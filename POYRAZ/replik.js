const oyuncular = [
    { ad: "Poyraz Karayel", resim: "../images/poyrazk.jpg" },
    { ad: "Ayşegül Umman", resim: "../images/ayşegül.jpg" },
    { ad: "Bahri Umman", resim: "../images/bahri.jpg" },
  ];

const replikler = [
    { replik: "Sevdikçe kuruyorum ben albayım. Her şeyi, herkesi elimden alıyorlar. Yaşamak bu değil albayım, bu değil...", karakter: "Poyraz Karayel", resim: "../images/poyrazk.jpg" },
];

let currentReplik = {}; // Şu anki replik
let dogruCevap = ''; // Doğru cevap
let yapilanTahminler = []; // Daha önce yapılan tahminleri tutacak dizi

// Rastgele replik seçme fonksiyonu
function rastgeleReplik() {
    let index = Math.floor(Math.random() * replikler.length); // Rastgele bir index seç
    currentReplik = replikler[index]; // Rastgele seçilen repliği al
    dogruCevap = currentReplik.karakter; // Doğru cevabı belirle

    document.getElementById('rastgeleReplik').innerText = `"${currentReplik.replik}"`; // Repliği ekrana yazdır
}

// Dinamik karakter önerisi
document.getElementById("tahminInput").addEventListener("input", function () {
    let input = this.value.toLowerCase(); // Kullanıcıdan gelen girdi
    let datalist = document.getElementById("oyuncuSecim");
    datalist.innerHTML = ""; // Listeyi temizle

    if (input.length > 0) {
        // Kullanıcı yazmaya başladığında kutucuklar açılacak
        datalist.style.display = "block";

        // Oyuncuları filtrele ve yazılan harf ile başlayan isimleri veya ikinci/üçüncü kelimesi eşleşenleri göster
        let filtrelenmisOyuncular = oyuncular.filter(oyuncu => {
            let adKelimeListesi = oyuncu.ad.toLowerCase().split(" ");
            return adKelimeListesi.some(kelime => kelime.startsWith(input)) &&
                   !yapilanTahminler.includes(oyuncu.ad.toLowerCase());
        });

        // Filtrelenmiş oyuncuları listele
        filtrelenmisOyuncular.forEach(oyuncu => {
            let option = document.createElement("div");
            option.classList.add("oyuncuOption");

            // Oyuncunun resmi için img etiketi oluştur
            let img = document.createElement("img");
            img.src = oyuncu.resim; // Oyuncu nesnesindeki resim URL'si
            img.alt = oyuncu.ad;
            img.classList.add("oyuncuResim");

            // Oyuncunun adını içeren span etiketi oluştur
            let span = document.createElement("span");
            span.innerText = oyuncu.ad;

            // Resim ve span'ı option div'ine ekle
            option.appendChild(img);
            option.appendChild(span);

            option.onclick = function () {
                document.getElementById("tahminInput").value = oyuncu.ad;
                datalist.style.display = "none"; // Listeyi gizle
            };
            datalist.appendChild(option);
        });
    } else {
        // Eğer input boşsa listeyi gizle
        datalist.style.display = "none";
    }
});

// Tahmin yapma fonksiyonu
function tahminEt() {
    let tahminInput = document.getElementById('tahminInput');
    let tahmin = tahminInput.value.trim();
    let datalist = document.getElementById("oyuncuSecim");

    // Eğer datalist boşsa işlem yapma
    if (!datalist.querySelector('.oyuncuOption')) {
        return;
    }

    let sonucTablosu = document.getElementById('sonucTablosu');
    let yeniSatir = document.createElement('tr');
    let tahminCell = document.createElement('td');

    // Tahmin doğruysa
    if (tahmin.toLowerCase() === dogruCevap.toLowerCase()) {
        tahminCell.innerHTML = `
            <div class="cevapKutusu yesil">
                <img src="${currentReplik.resim}" class="cevapResim" alt="${currentReplik.karakter}">
                <span>${currentReplik.karakter}</span>
            </div>
        `;
        confetti(); // Doğru tahminde konfeti efektini çalıştır

        // Input'u ve Tahmin Et butonunu gizle
        document.getElementById('tahminInput').style.display = 'none';
        document.getElementById('tahminButonu').style.display = 'none';

        // Yeni sayfa butonunu göster
        document.getElementById('yeniSayfaButonu').style.display = 'block';
    } else {
        // Tahmin yanlışsa
        let yanlisOyuncu = oyuncular.find(oyuncu => oyuncu.ad.toLowerCase() === tahmin.toLowerCase());
        tahminCell.innerHTML = `
            <div class="cevapKutusu kirmizi">
                <img src="${yanlisOyuncu ? yanlisOyuncu.resim : '../images/default.png'}" class="cevapResim" alt="${tahmin}">
                <span>${tahmin}</span>
            </div>
        `;
    }

    yeniSatir.appendChild(tahminCell);
    sonucTablosu.querySelector('tbody').prepend(yeniSatir); // Yeni satırı tablonun en üstüne ekle
    yapilanTahminler.push(tahmin.toLowerCase()); // Yapılan tahmini listeye ekle
    tahminInput.value = ''; // Input'u temizle
    document.getElementById('oyuncuSecim').style.display = 'none'; // Seçenekleri gizle
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

// Enter tuşuna basıldığında tahmin yapma
document.getElementById('tahminInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let datalist = document.getElementById("oyuncuSecim");
        let firstOption = datalist.querySelector('.oyuncuOption'); // İlk öneriyi seç

        if (firstOption) {
            document.getElementById('tahminInput').value = firstOption.innerText; // İlk öneriyi inputa yaz
        }
        tahminEt(); // Tahmini kontrol et
    }
});

// Sayfa yüklendiğinde rastgele replik al
window.onload = function () {
    rastgeleReplik(); // İlk repliği yükle
    document.body.style.overflow = "hidden"; // Sayfa kaydırma çubuğunu kaldır
};