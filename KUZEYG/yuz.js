const oyuncular = [
    { ad: "Kuzey Tekinoğlu", resim: "../images/kuzey.jpg" },
];

const yuz = [
    { karakter: "Kuzey Tekinoğlu", resim: "../images/yuz/kuzey.jpg" },
    // İstediğiniz kadar yüz fotoğrafı ekleyebilirsiniz.
];

let currentYuz = {};       // Şu an gösterilen yüz resmi
let dogruCevap = '';       // Doğru cevap (yüzün sahibi)
let yapilanTahminler = []; // Yapılan tahminleri tutan dizi

let kirpmaSeviyesi = 40; // Başlangıçta %40'lık bir alan kırpılmış
const kirpmaAdimi = 2;   // Her yanlış tahminde %2 daha az kırpılacak

// Rastgele yüz seçme fonksiyonu
function rastgeleYuz() {
    let index = Math.floor(Math.random() * yuz.length);
    currentYuz = yuz[index];
    dogruCevap = currentYuz.karakter;

    // Yüz resmini güncelle
    const yuzResmiElem = document.getElementById('yüzResmi');
    yuzResmiElem.src = currentYuz.resim;
    yuzResmiElem.alt = currentYuz.karakter;

    // Kırpma seviyesini sıfırla
    kirpmaSeviyesi = 40; // Daha az kırpılmış başlasın
    yuzResmiElem.style.clipPath = `inset(${kirpmaSeviyesi}% ${kirpmaSeviyesi}% ${kirpmaSeviyesi}% ${kirpmaSeviyesi}%)`;
}

// Dinamik karakter önerisi
document.getElementById("tahminInput").addEventListener("input", function () {
    let input = this.value.toLowerCase().trim(); // Baş ve sondaki boşlukları kaldır
    let datalist = document.getElementById("oyuncuSecim");
    datalist.innerHTML = ""; // Listeyi temizle

    if (input.length > 0) {
        datalist.style.display = "block";

        // Yazılan harf ile başlayan isimleri veya kelimeleri filtrele
        let filtrelenmisOyuncular = oyuncular.filter(oyuncu => {
            let adKelimeListesi = oyuncu.ad.toLowerCase().split(" ");
            return adKelimeListesi.some(kelime => kelime.startsWith(input)) &&
                   !yapilanTahminler.includes(oyuncu.ad.toLowerCase());
        });

        filtrelenmisOyuncular.forEach(oyuncu => {
            let option = document.createElement("div");
            option.classList.add("oyuncuOption");

            let img = document.createElement("img");
            img.src = oyuncu.resim;
            img.alt = oyuncu.ad;
            img.classList.add("oyuncuResim");

            let span = document.createElement("span");
            span.innerText = oyuncu.ad;

            option.appendChild(img);
            option.appendChild(span);

            option.onclick = function () {
                document.getElementById("tahminInput").value = oyuncu.ad;
                datalist.style.display = 'none';
            };
            datalist.appendChild(option);
        });
    } else {
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

    if (tahmin.toLowerCase() === dogruCevap.toLowerCase()) {
        tahminCell.innerHTML = `
            <div class="cevapKutusu yesil">
                <img src="${currentYuz.resim}" class="cevapResim" alt="${currentYuz.karakter}">
                <span>${currentYuz.karakter}</span>
            </div>
        `;
        confetti();

        // Kırpılan resmi tamamen görünür yap
        document.getElementById('yüzResmi').style.clipPath = 'none';

        document.getElementById('tahminInput').style.display = 'none';
        document.getElementById('tahminButonu').style.display = 'none';
        document.getElementById('yeniSayfaButonu').style.display = 'block';
    } else {
        let yanlisOyuncu = oyuncular.find(oyuncu => oyuncu.ad.toLowerCase() === tahmin.toLowerCase());
        tahminCell.innerHTML = `
            <div class="cevapKutusu kirmizi">
                <img src="${yanlisOyuncu ? yanlisOyuncu.resim : '../images/default.png'}" class="cevapResim" alt="${tahmin}">
                <span>${tahmin}</span>
            </div>
        `;

        // Yanlış tahmin: kırpma seviyesini azalt
        kirpmaSeviyesi = Math.max(0, kirpmaSeviyesi - kirpmaAdimi);
        document.getElementById('yüzResmi').style.clipPath = `inset(${kirpmaSeviyesi}% ${kirpmaSeviyesi}% ${kirpmaSeviyesi}% ${kirpmaSeviyesi}%)`;
    }

    yeniSatir.appendChild(tahminCell);
    sonucTablosu.querySelector('tbody').prepend(yeniSatir);
    yapilanTahminler.push(tahmin.toLowerCase());
    tahminInput.value = '';
    document.getElementById('oyuncuSecim').style.display = 'none';
}

// Konfeti efekti fonksiyonu (aynı şekilde çalışır)
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

// Enter tuşu ile tahmin
document.getElementById('tahminInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let tahminInput = document.getElementById('tahminInput').value.trim();
        if (tahminInput === '') {
            return; // Input boşsa işlem yapma
        }

        let datalist = document.getElementById("oyuncuSecim");
        let firstOption = datalist.querySelector('.oyuncuOption');
        if (firstOption) {
            document.getElementById('tahminInput').value = firstOption.innerText;
        }
        tahminEt();
    } else if (event.key === ' ') {
        // Boşluk tuşuna izin ver
        return;
    }
});

// Sayfa yüklendiğinde rastgele yüz resmi getir
window.onload = function () {
    rastgeleYuz();
    // document.body.style.overflow = "hidden"; // Bu satır kaldırıldı
};