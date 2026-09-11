const oyuncular = [
    {
        ad: "Poyraz Karayel",
        cinsiyet: "Erkek",
        meslek: "Polis",
        platform: "TV",
        durumu: "Hayatta",
        yas: 43, 
        resim: "../images/poyrazk.jpg"
    },
    { 
        ad: "Ayşegül Umman", 
        cinsiyet: "Kadın", 
        meslek: "Doktor", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 41, 
        resim: "../images/ayşegül.jpg" 
    },
    { 
        ad: "Bahri Umman", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 68, 
        resim: "../images/bahri.jpg" 
    },
];

let secilenOyuncu = oyuncular[Math.floor(Math.random() * oyuncular.length)];
let yapilanTahminler = [];  // Daha önce yapılan tahminleri tutacak dizi


document.getElementById("tahminInput").addEventListener("input", function() {
    let input = this.value.toLowerCase();  // Kullanıcıdan gelen girdi
    let datalist = document.getElementById("oyuncuSecim");
    datalist.innerHTML = ""; // Listeyi temizle

    if (input.length > 0) {
        // Kullanıcı yazmaya başladığında kutucuklar açılacak
        datalist.style.display = "block";

        // Oyuncuları filtrele ve sadece ad, soyad veya üçüncü isimle yazılan harfle başlayanları göster
        let filtrelenmisOyuncular = oyuncular.filter(oyuncu => {
            let isimler = oyuncu.ad.toLowerCase().split(' '); // Ad, soyad ve varsa üçüncü isimleri ayır
            return isimler.some(isim => isim.startsWith(input)) &&
                   !yapilanTahminler.includes(oyuncu.ad.toLowerCase());
        });

        // Filtrelenmiş oyuncuları listele
        filtrelenmisOyuncular.forEach(oyuncu => {
            let option = document.createElement("div");
            option.classList.add("oyuncuOption");

            // Oyuncunun resmi için img etiketi oluştur
            let img = document.createElement("img");
            img.src = oyuncu.resim;  // Oyuncu nesnesindeki resim URL'si
            img.alt = oyuncu.ad;
            img.classList.add("oyuncuResim");

            // Oyuncunun adını içeren span etiketi oluştur
            let span = document.createElement("span");
            span.innerText = oyuncu.ad;

            // Resim ve span'ı option div'ine ekle
            option.appendChild(img);
            option.appendChild(span);

            option.onclick = function() {
                document.getElementById("tahminInput").value = oyuncu.ad;
                tahminiKontrolEt(); // Tahmin etme fonksiyonunu çağır
                datalist.style.display = "none"; // Listeyi gizle
            };
            datalist.appendChild(option);
        });
    } else {
        // Eğer input boşsa listeyi gizle
        datalist.style.display = "none";
    }
});



// Enter tuşuna basıldığında sadece ilk oyuncuyu tahmin et
document.getElementById("tahminInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let input = this.value.trim().toLowerCase();

        // Eğer input boşsa hiçbir şey yapma
        if (!input) {
            return;
        }

        // Datalist'i gizle
        let datalist = document.getElementById("oyuncuSecim");
        datalist.style.display = "none"; // Datalist'i gizle

        // Filtrelenmiş oyunculardan sadece ilkini al
        let enYakinOyuncu = oyuncular.find(oyuncu => {
            let isimler = oyuncu.ad.toLowerCase().split(' ');
            return isimler.some(isim => isim.startsWith(input)) && 
                   !yapilanTahminler.includes(oyuncu.ad.toLowerCase());
        });

        // Eğer uygun bir oyuncu bulunursa
        if (enYakinOyuncu) {
            this.value = enYakinOyuncu.ad; // Yazıyı oyuncunun adıyla tamamla
            tahminiKontrolEt(); // Tahmin etme fonksiyonunu çağır
        } else {
            document.getElementById("sonuc").innerText = "Bu oyuncu daha önce tahmin edildi!";
            document.getElementById("sonuc").style.color = "red";
        }
    }
});

function tahminiKontrolEt() {
    let tahminInput = document.getElementById("tahminInput");
    let tahmin = tahminInput.value.trim();
    let sonuc = document.getElementById("sonuc");
    let tablo = document.getElementById("sonucTablosu").querySelector("tbody");
    let tahminButonu = document.getElementById("tahminButonu");
    let dogruTahminButton = document.getElementById("dogruTahminButton");

    if (!tahmin) {
        sonuc.innerText = "Lütfen bir isim girin!";
        sonuc.style.color = "orange";
        return;
    }

    let tahminEdilenOyuncu = oyuncular.find(o => o.ad.toLowerCase() === tahmin.toLowerCase());
    if (!tahminEdilenOyuncu) {
        sonuc.innerText = "Oyuncu bulunamadı! Tekrar deneyin.";
        sonuc.style.color = "red";
        tahminInput.value = "";
        return;
    }

    let satir = document.createElement("tr");

    // Resim hücresi: Doğru tahminde yeşil, yanlışta kırmızı sınıfı ekleniyor
    let resimHucre = document.createElement("td");
    let img = document.createElement("img");
    img.src = tahminEdilenOyuncu.resim;
    img.alt = tahminEdilenOyuncu.ad;
    img.style.width = "150px";
    img.style.height = "100px";
    
    if (tahminEdilenOyuncu.ad.toLowerCase() === secilenOyuncu.ad.toLowerCase()) {
        resimHucre.classList.add("yesil");
    } else {
        resimHucre.classList.add("kirmizi");
    }
    resimHucre.appendChild(img);
    satir.appendChild(resimHucre);

    // Hücre sırası: [Cinsiyet, Meslek, Platform, Durum, Yaş]
    let hucreler = [
        tahminEdilenOyuncu.cinsiyet,
        tahminEdilenOyuncu.meslek,
        tahminEdilenOyuncu.platform,
        tahminEdilenOyuncu.durumu,
        tahminEdilenOyuncu.yas // Yaş eklendi
    ];

    hucreler.forEach((icerik, index) => {
        let td = document.createElement("td");
        let correct = false;

        if (index === 0 && tahminEdilenOyuncu.cinsiyet === secilenOyuncu.cinsiyet) {
            correct = true;
        } else if (index === 1 && tahminEdilenOyuncu.meslek === secilenOyuncu.meslek) {
            correct = true;
        } else if (index === 2 && tahminEdilenOyuncu.platform === secilenOyuncu.platform) {
            correct = true;
        } else if (index === 3 && tahminEdilenOyuncu.durumu === secilenOyuncu.durumu) {
            correct = true;
        } else if (index === 4) {
            let okGorunumu = "";
            if (parseInt(tahminEdilenOyuncu.yas) > parseInt(secilenOyuncu.yas)) {
                okGorunumu = "↓";
            } else if (parseInt(tahminEdilenOyuncu.yas) < parseInt(secilenOyuncu.yas)) {
                okGorunumu = "↑";
            }
            td.innerHTML = `${icerik} ${okGorunumu}`;
            correct = parseInt(tahminEdilenOyuncu.yas) === parseInt(secilenOyuncu.yas);
        }

        if (index !== 4) { // Yaşta ok gösterilecektir
            td.innerText = icerik;
        }

        if (correct) {
            td.classList.add("yesil");
        } else {
            td.classList.add("kirmizi");
        }
        
        td.style.opacity = "0";
        td.style.transition = "opacity 0.5s ease-in-out";
        satir.appendChild(td);
        setTimeout(() => { td.style.opacity = "1"; }, index * 200);
    });

    setTimeout(() => {
        let tumYesil = [...satir.children].every(td => td.classList.contains("yesil"));
        if (tumYesil) {
            confetti();
        }
    }, hucreler.length * 200 + 500);

    tablo.insertBefore(satir, tablo.firstChild);

    // Tahmin edilen oyuncuyu tekrar tahmin etmemek için listeye ekle
    yapilanTahminler.push(tahminEdilenOyuncu.ad.toLowerCase());

    tahminInput.value = "";
    document.getElementById("oyuncuSecim").innerHTML = "";
    tahminInput.blur();

    // Doğru tahmin durumunda kutuları gizle ve kutlama mesajı göster
    if (tahminEdilenOyuncu.ad.toLowerCase() === secilenOyuncu.ad.toLowerCase()) {
        document.body.classList.add("kutlama");
        sonuc.innerText = "Tebrikler! Doğru tahmin ettiniz!";
        sonuc.style.color = "green";
        setTimeout(() => {
            document.body.classList.remove("kutlama");
        }, 3000);
        
        tahminInput.style.display = "none";
        tahminButonu.style.display = "none";
        dogruTahminButton.style.display = "block";
    }

    tahminInput.focus();
    
}





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
                x: Math.random() * canvas.width, // Ekranın genişliği boyunca rastgele bir konumda
                y: -10, // Başlangıçta ekranın üst kısmında (10px yukarıda)
                size: Math.random() * 5 + 2,
                speedX: Math.random() * 2 - 1, // Yavaş hareket eden yatay hız
                speedY: Math.random() * 2 + 0.5, // Düşme hızı
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
            particle.x += particle.speedX;  // Yatay hareket
            particle.y += particle.speedY;  // Düşme hareketi

            // Eğer konfeti ekranın altına düşerse, sil
            if (particle.y > canvas.height) particles.splice(index, 1);
        });
        
        // Eğer hala konfeti varsa, animasyona devam et
        if (particles.length > 0) {
            setTimeout(() => requestAnimationFrame(updateConfetti), 20);  // Yavaşlatma için gecikme ekle
        } else {
            document.body.removeChild(canvas); // Konfetiler bittiğinde kanvası sil
        }
    }

    generateConfetti();
    updateConfetti();
}
