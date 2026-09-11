const oyuncular = [
  { ad: "Behzat Ç.", resim: "../images/behzatc.jpg" },
  { ad: "Esra Ç.", resim: "../images/savciesra.jpg" },
  { ad: "Harun Sinanoğlu", resim: "../images/harun.jpg" },
  { ad: "Hayalet", resim: "../images/hayalet.jpg" },
  { ad: "Akbaba", resim: "../images/akbaba.jpg" },
  { ad: "Eda Akkaya", resim: "../images/eda.jpg" },
  { ad: "Cevdet", resim: "../images/cevdet.jpg" },
  { ad: "Tahsin Yılmaz", resim: "../images/tahsin.jpg" },
  { ad: "Selim Ersöz", resim: "../images/selim.jpg" },
  { ad: "Şevket Ç.", resim: "../images/sevket.jpg" },
  { ad: "Şule Ç.", resim: "../images/sule.jpg" },
  { ad: "Memduh Başgan", resim: "../images/memduh.jpg" },
  { ad: "Ercüment Çözer", resim: "../images/ercument.jpg" },
  { ad: "Abi", resim: "../images/abi.jpg" },
  { ad: "Berna Ç.", resim: "../images/berna.jpg" },
];


const resim = document.getElementById("charImage");
const girdi = document.getElementById("guessInput");
const mesaj = document.getElementById("message");
const önerilerDiv = document.getElementById("suggestions");
const tahminlerDiv = document.getElementById("guesses");

let doğruCevap = "";
let bulanıklıkSeviyesi = 30; // Başlangıç bulanıklık seviyesi
const bulanıklıkAdımı = 1; // Her yanlış tahminde azaltılacak bulanıklık miktarı

// Rastgele oyuncu seç
function yeniOyuncuBelirle() {
    const seçilenOyuncu = oyuncular[Math.floor(Math.random() * oyuncular.length)];
    doğruCevap = seçilenOyuncu.ad.toLowerCase();
    resim.src = seçilenOyuncu.resim;
    resim.style.filter = `blur(${bulanıklıkSeviyesi}px)`; // Buradaki bulanıklık sadece ana resme uygulanacak
    mesaj.innerHTML = `Tahmin et bakam!`;
    tahminlerDiv.innerHTML = ""; // Geçmiş tahminleri temizle
    girdi.value = ""; // Girdi kutusunu temizle
    önerilerDiv.innerHTML = ""; // Öneri listesini temizle
}

function oyuncularıFiltrele() {
  const sorgu = document.getElementById("guessInput").value.toLowerCase();
  const oyuncuSecim = document.getElementById("oyuncuSecim");
  oyuncuSecim.style.display = "none"; // Başlangıçta gizli
  oyuncuSecim.innerHTML = ""; // Mevcut önerileri temizle

  if (sorgu.length === 0) return;

  const filtrelenmişOyuncular = oyuncular.filter(oyuncu =>
    oyuncu.ad.toLowerCase().startsWith(sorgu)
  );

  if (filtrelenmişOyuncular.length > 0) {
    oyuncuSecim.style.display = "block"; // Öneriler varsa göster
  }

  filtrelenmişOyuncular.forEach(oyuncu => {
    // Daha önce tahmin edilen oyuncuları kontrol et
    const tahminEdilenler = Array.from(document.querySelectorAll(".cevapKutusu span")).map(
      span => span.textContent.toLowerCase()
    );

    if (tahminEdilenler.includes(oyuncu.ad.toLowerCase())) {
      return; // Daha önce tahmin edilen oyuncuyu listeye ekleme
    }

    const div = document.createElement("div");
    div.className = "oyuncuOption";
    div.innerHTML = `<img src="${oyuncu.resim}" alt="${oyuncu.ad}" class="oyuncuResim"> ${oyuncu.ad}`;
    div.onclick = () => {
      document.getElementById("guessInput").value = oyuncu.ad; // Seçilen oyuncuyu inputa yaz
      oyuncuSecim.style.display = "none"; // Önerileri gizle
    };
    oyuncuSecim.appendChild(div);
  });
}

function tahminEkle(ad, resim) {
    const div = document.createElement("div");
    div.className = "tahmin-ögesi";
    div.style.color = "white"; // Varsayılan olarak beyaz
    div.innerHTML = `<img src="${resim}" alt="${ad}" class="tahmin-resim"> ${ad}`;
    tahminlerDiv.insertBefore(div, tahminlerDiv.firstChild); // En son tahmin en üste
}

function tahminiKontrolEt(tahmin) {
    tahmin = tahmin.toLowerCase().trim();

    const tahminElemanları = document.querySelectorAll('.tahmin-ögesi');

    // Doğru tahmin kontrolü
    if (tahmin === doğruCevap) {
        resim.style.filter = "blur(0px)"; // Doğru tahmin yapıldığında, ana resmin bulanıklığını kaldır
        mesaj.innerHTML = "Helal lan! Bildin! 🔥";

        // Tahmin kutusunun arka plan rengini yeşil yap
        tahminElemanları.forEach(eleman => {
            if (eleman.innerText.toLowerCase().includes(tahmin)) {
                eleman.classList.add("doğru"); // Doğru tahminde yeşil arka plan
            }
        });
    } else {
        bulanıklıkSeviyesi -= bulanıklıkAdımı;
        if (bulanıklıkSeviyesi < 0) bulanıklıkSeviyesi = 0;
        resim.style.filter = `blur(${bulanıklıkSeviyesi}px)`; // Her yanlış tahminde görsel daha netleşecek

        // Yanlış tahmin durumunda arka planı kırmızı yap
        tahminElemanları.forEach(eleman => {
            if (eleman.innerText.toLowerCase().includes(tahmin)) {
                eleman.classList.add("yanlış"); // Yanlış tahminde kırmızı arka plan
            }
        });
    }
}

function tahminEt() {
    const tahminInput = document.getElementById("guessInput");
    const tahmin = tahminInput.value.trim();
    const oyuncuSecim = document.getElementById("oyuncuSecim");
    const ilkÖneri = oyuncuSecim.querySelector(".oyuncuOption");

    // Eğer bir seçenek yoksa, tahmin boşsa veya tahmin tek bir harfse işlem yapma
    if (!ilkÖneri || !tahmin || tahmin.length === 1) {
        return; // Hiçbir işlem yapma
    }

    const sonuçTablosu = document.getElementById("sonucTablosu").querySelector("tbody");

    let yeniSatir = document.createElement("tr");
    let tahminCell = document.createElement("td");

    if (tahmin.toLowerCase() === doğruCevap.toLowerCase()) {
        const doğruOyuncu = oyuncular.find(oyuncu => oyuncu.ad.toLowerCase() === doğruCevap);
        tahminCell.innerHTML = `
            <div class="cevapKutusu yesil">
                <img src="${resim.src}" class="cevapResim" alt="${doğruOyuncu.ad}">
                <span>${doğruOyuncu.ad}</span>
            </div>
        `;
        document.getElementById("yeniSayfaButonu").style.display = "inline-block";
        resim.style.filter = "blur(0px)";
        confetti(); // Konfeti efekti çağrıldı
    } else {
        const yanlisOyuncu = oyuncular.find(oyuncu => oyuncu.ad.toLowerCase() === tahmin.toLowerCase());
        tahminCell.innerHTML = `
            <div class="cevapKutusu kirmizi">
                <img src="${yanlisOyuncu ? yanlisOyuncu.resim : 'images/default.png'}" class="cevapResim" alt="${tahmin}">
                <span>${tahmin}</span>
            </div>
        `;

        // Yanlış tahmin: bulanıklık seviyesini azalt
        bulanıklıkSeviyesi = Math.max(0, bulanıklıkSeviyesi - 3);
        resim.style.filter = `blur(${bulanıklıkSeviyesi}px)`;
    }

    yeniSatir.appendChild(tahminCell);
    sonuçTablosu.prepend(yeniSatir); // Yeni tahmini en üste ekle
    tahminInput.value = ""; // Input alanını temizle
    oyuncuSecim.style.display = "none"; // Önerileri gizle
}

// Konfeti efekti fonksiyonu
function confetti() {
    let canvas = document.createElement('canvas');
    canvas.id = 'confettiCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    let ctx = canvas.getContext('2d');
    let particles = [];
    let colors = ['#ff0', '#0f0', '#f00', '#00f', '#0ff', '#f0f'];

    function generateConfetti() {
        for (let i = 0; i < 100; i++) {
            let particle = {
                x: Math.random() * canvas.width,
                y: -10,
                size: Math.random() * 5 + 2,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 2 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            };
            particles.push(particle);
        }
    }

    function updateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.y > canvas.height) particles.splice(index, 1);
        });

        if (particles.length > 0) {
            setTimeout(() => requestAnimationFrame(updateConfetti), 20);
        } else {
            document.body.removeChild(canvas);
        }
    }

    generateConfetti();
    updateConfetti();
}

// Enter tuşuna basıldığında en üstteki önerilen kişiyi otomatik tahmin et
girdi.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const tahminInput = document.getElementById("guessInput").value.trim();
        const oyuncuSecim = document.getElementById("oyuncuSecim");
        const ilkÖneri = oyuncuSecim.querySelector(".oyuncuOption");

        // Eğer input boşsa veya bir öneri yoksa işlem yapma
        if (!tahminInput) {
            return;
        }

        // Eğer bir öneri varsa otomatik olarak en üstteki seçeneği tahmin et
        if (ilkÖneri) {
            ilkÖneri.click(); // En üstteki öneriyi seç
            tahminEt(); // Tahmini kontrol et
        }
    }
});

// Sayfa ilk yüklendiğinde yeni oyuncu belirle
window.onload = yeniOyuncuBelirle;
