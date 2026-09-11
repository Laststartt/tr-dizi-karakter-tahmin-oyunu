const oyuncular = [
    {
        ad: "Ezel Bayraktar",
        cinsiyet: "Erkek",
        meslek: "Mafya",
        platform: "TV",
        durumu: "Hayatta",
        yas: 47,
        resim: "../images/ezel.jpg"
    },
    {
        ad: "Kenan Birkan",
        cinsiyet: "Erkek",
        meslek: "Mafya",
        platform: "TV",
        durumu: "Ölü",
        yas: 57,
        resim: "../images/kenanb.jpg"
    },
    {
        ad: "Ramiz Karaeski",
        cinsiyet: "Erkek",
        meslek: "Mafya",
        platform: "TV",
        durumu: "Ölü",
        yas: 75,
        resim: "../images/ramiz.jpg"
    },
    {
        ad: "Eyşan",
        cinsiyet: "Kadın",
        meslek: "Dolandırıcı",
        platform: "TV",
        durumu: "Ölü",
        yas: 43,
        resim: "../images/eyşan.jpg"
    },
    { 
        ad: "Kerpeten Ali", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 52, 
        resim: "../images/kerpeten.jpg" 
    },
    { 
        ad: "Tefo", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 22, 
        resim: "../images/tefo.jpg" 
    },
    { 
        ad: "Serdar Tezcan", 
        cinsiyet: "Erkek", 
        meslek: "Dolandırıcı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 64, 
        resim: "../images/serdar.jpg" 
    },
    { 
        ad: "Cengiz Atay", 
        cinsiyet: "Erkek", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 37, 
        resim: "../images/cengiz.jpg" 
    },
    {
        ad: "Ali Rıza Bey",
        cinsiyet: "Erkek",
        meslek: "Aile Babası",
        platform: "TV",
        durumu: "Hayatta",
        yas: 54, // Yaş eklendi
        resim: "../images/alirıza.jpg"
    },
    {
        ad: "Ferhunde Tekin",
        cinsiyet: "Kadın",
        meslek: "Ev Kadını",
        platform: "TV",
        durumu: "Hayatta",
        yas: 33, // Yaş eklendi
        resim: "../images/ferhunde.jpg"
    },
    {
        ad: "Bihter Ziyagil",
        cinsiyet: "Kadın",
        meslek: "Ev Hanımı",
        platform: "TV",
        durumu: "Ölü",
        yas: 26, // Yaş eklendi
        resim: "../images/bihter.jpg"
    },
    { 
        ad: "Nihal Ziyagil", 
        cinsiyet: "Kadın", 
        meslek: "Öğrenci", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 15, // Yaş eklendi
        resim: "../images/nihal.jpg" 
    },
    { 
        ad: "Adnan Ziyagil", 
        cinsiyet: "Erkek", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 50, // Yaş eklendi
        resim: "../images/adnan.jpg" 
    },
    { 
        ad: "Firdevs Yöreoğlu", 
        cinsiyet: "Kadın", 
        meslek: "Ev Hanımı", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 47, // Yaş eklendi
        resim: "../images/firdevs.jpg" 
    },
    { 
        ad: "Beşir Elçi", 
        cinsiyet: "Erkek", 
        meslek: "Şoför", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 41, // Yaş eklendi
        resim: "../images/beşir.jpg" 
    },
    {
        ad: "Behzat Ç.",
        cinsiyet: "Erkek",
        meslek: "Polis",
        platform: "TV",
        durumu: "Hayatta",
        yas: 42,
        resim: "../images/behzatc.jpg"
    },
    { 
        ad: "Esra Ç.", 
        cinsiyet: "Kadın", 
        meslek: "Savcı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 35, // Yaş eklendi
        resim: "../images/savciesra.jpg" 
    },
    { 
        ad: "Harun Sinanoğlu", 
        cinsiyet: "Erkek", 
        meslek: "Polis", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 28, // Yaş eklendi
        resim: "../images/harun.jpg" 
    },
    { 
        ad: "Hayalet", 
        cinsiyet: "Erkek", 
        meslek: "Polis", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 30, // Yaş eklendi
        resim: "../images/hayalet.jpg" 
    },
    { 
        ad: "Akbaba", 
        cinsiyet: "Erkek", 
        meslek: "Polis", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 38, // Yaş eklendi
        resim: "../images/akbaba.jpg" 
    },
    { 
        ad: "Eda Akkaya", 
        cinsiyet: "Kadın", 
        meslek: "Polis", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 26, // Yaş eklendi
        resim: "../images/eda.jpg" 
    },
    { 
        ad: "Cevdet", 
        cinsiyet: "Erkek", 
        meslek: "Polis", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 24, // Yaş eklendi
        resim: "../images/cevdet.jpg" 
    },
    { 
        ad: "Tahsin Yılmaz", 
        cinsiyet: "Erkek", 
        meslek: "Polis", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 42, // Yaş eklendi
        resim: "../images/tahsin.jpg" 
    },
    { 
        ad: "Selim Ersöz", 
        cinsiyet: "Erkek", 
        meslek: "Polis", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 26, // Yaş eklendi
        resim: "../images/selim.jpg" 
    },
    { 
        ad: "Şevket Ç.", 
        cinsiyet: "Erkek", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 50, // Yaş eklendi
        resim: "../images/sevket.jpg" 
    },
    { 
        ad: "Şule Ç.", 
        cinsiyet: "Kadın", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 21, // Yaş eklendi
        resim: "../images/sule.jpg" 
    },
    { 
        ad: "Memduh Başgan", 
        cinsiyet: "Erkek", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 55, // Yaş eklendi
        resim: "../images/memduh.jpg" 
    },
    { 
        ad: "Ercüment Çözer", 
        cinsiyet: "Erkek", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 40, // Yaş eklendi
        resim: "../images/ercument.jpg" 
    },
    { 
        ad: "Abi", 
        cinsiyet: "Erkek", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 55, // Yaş eklendi
        resim: "../images/abi.jpg" 
    },
    { 
        ad: "Berna Ç.", 
        cinsiyet: "Kadın", 
        meslek: "İş Adamı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 25, // Yaş eklendi
        resim: "../images/berna.jpg" 
    },
    {
        ad: "Kuzey Tekinoğlu",
        cinsiyet: "Erkek",
        meslek: "Boksör",
        platform: "TV",
        durumu: "Hayatta",
        yas: 25, // Yaş eklendi
        resim: "../images/kuzey.jpg"
    },
    {
        ad: "Polat Alemdar",
        cinsiyet: "Erkek",
        meslek: "İstihbarat Ajanı",
        platform: "TV",
        durumu: "Hayatta",
        yas: 32, // Yaş eklendi
        resim: "../images/polat.jpg"
    },
    {
        ad: "İskender Büyük",
        cinsiyet: "Erkek",
        meslek: "İstihbarat Ajanı",
        platform: "TV",
        durumu: "Ölü",
        yas: 48, // Yaş eklendi
        resim: "../images/iskenderb.jpg"
    },
    {
        ad: "Testere Necmi",
        cinsiyet: "Erkek",
        meslek: "Mafya",
        platform: "TV",
        durumu: "Ölü",
        yas: 45, // Yaş eklendi
        resim: "../images/testere.jpg"
    },
    {
        ad: "Memati Baş",
        cinsiyet: "Erkek",
        meslek: "Mafya",
        platform: "TV",
        durumu: "Ölü",
        yas: 29, // Yaş eklendi
        resim: "../images/memati.jpg"
    },
    {
        ad: "Süleyman Çakır",
        cinsiyet: "Erkek",
        meslek: "Mafya",
        platform: "TV",
        durumu: "Ölü",
        yas: 39, // Yaş eklendi
        resim: "../images/çakır.jpg"
    },   
    {
        ad: "Şahin Ağa",
        cinsiyet: "Erkek",
        meslek: "Mafya",
        platform: "TV",
        durumu: "Ölü",
        yas: 50, // Yaş eklendi
        resim: "../images/şahinağa.jpg"
    },
    {
        ad: "Kara",
        cinsiyet: "Erkek",
        meslek: "İstihbarat Ajanı",
        platform: "TV",
        durumu: "Ölü",
        yas: 49, // Yaş eklendi
        resim: "../images/kara.jpg"
    },
    { 
        ad: "Pala", 
        cinsiyet: "Erkek", 
        meslek: "İstihbarat Ajanı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 40, // Yaş eklendi
        resim: "../images/pala.jpg" 
    },
    { 
        ad: "Meral Yılmaz", 
        cinsiyet: "Kadın", 
        meslek: "Mafya ile ilişkili", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 31, // Yaş eklendi
        resim: "../images/meral.jpg" 
    },
    { 
        ad: "Kılıç", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 59, // Yaş eklendi
        resim: "../images/kılıç.jpg" 
    },
    { 
        ad: "Laz Ziya", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 60, // Yaş eklendi
        resim: "../images/lazziya.jpg" 
    },
    { 
        ad: "Mehmet Karahanlı", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 62, // Yaş eklendi
        resim: "../images/karahanlı.jpg" 
    },
    { 
        ad: "Abdülhey Çoban", 
        cinsiyet: "Erkek", 
        meslek: "İstihbarat Ajanı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 28, // Yaş eklendi
        resim: "../images/abdulhey.jpg" 
    },
    { 
        ad: "Aslan Akbey", 
        cinsiyet: "Erkek", 
        meslek: "İstihbarat Ajanı", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 50, // Yaş eklendi
        resim: "../images/aslan.jpg" 
    },
    { 
        ad: "Elif Eylül", 
        cinsiyet: "Kadın", 
        meslek: "Avukat", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 24, // Yaş eklendi
        resim: "../images/elif.jpg" 
    },
    { 
        ad: "Tombalacı Mehmet", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 42, // Yaş eklendi
        resim: "../images/tombalacı.jpg" 
    },
    { 
        ad: "Güllü Erhan", 
        cinsiyet: "Erkek", 
        meslek: "Mafya", 
        platform: "TV", 
        durumu: "Hayatta", 
        yas: 23, // Yaş eklendi
        resim: "../images/güllü.jpg" 
    },
    { 
        ad: "İplikçi Nedim", 
        cinsiyet: "Erkek", 
        meslek: "Tefeci", 
        platform: "TV", 
        durumu: "Ölü", 
        yas: 45, // Yaş eklendi
        resim: "../images/iplikçi.jpg" 
    },
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
