class Kitap {//verileri kullanmak için class oluşturup constuctorları belirliyoruz
    constructor(kitapAdi, kitapYazari, kitapISBN, kulTC, iadeTARİH, kulAd, kulTel) {
        this.kitapAdi = kitapAdi;
        this.kitapYazari = kitapYazari;
        this.kitapISBN = kitapISBN;
        this.kulTC=kulTC;
        this.iadeTARİH=iadeTARİH;
        this.kulAd=kulAd;
        this.kulTel=kulTel;
    }
}

class Arayuz {//html kısmında ekrana liste şeklinde yazdırıyoruz
    kitapEkle(kitap) {

        const tablo = document.getElementById("kitapListesi");

        const satir = document.createElement("tr");

        satir.innerHTML = `
        <td>${kitap.kitapAdi}</td>
        <td>${kitap.kitapYazari}</td>
        <td>${kitap.kitapISBN}</td>
        <td>${kitap.kulTC}</td>
        <td>${kitap.iadeTARİH}</td>
        <td>${kitap.kulAd}</td>
        <td>${kitap.kulTel}</td>
        `
            ;

        tablo.appendChild(satir);

    }

    mesajGoster(mesaj, className) {//mesaj kısmı 5 sn sonra kayboluyor

        const mesajKutusu = document.createElement("div");

        mesajKutusu.className = `alert ${className}`;

        mesajKutusu.appendChild(document.createTextNode(mesaj));

        const container = document.querySelector(".container");

        const form = document.querySelector("#formKitap");

        container.insertBefore(mesajKutusu, form);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 5000);

    }


    kitapSay() {//kitap say tr lerin sayısına bakıyor 1 tane eksiltiyor başlangıçta biz verdiğimiz için
        const tablo = document.getElementById("kitapListesi");
        var kayitSayisi = document.getElementsByTagName("tr").length - 1;
        document.getElementById("sonuc").innerHTML = kayitSayisi + " adet kayıtlı kitap bulunmaktadır.";

    }

   

    formuTemizleme() {//temizlik
        document.getElementById("txtKitapAdi").value = "";
        document.getElementById("txtKitapYazari").value = "";
        document.getElementById("txtKitapISBN").value = "";
        document.getElementById("aliciTC").value = "";
        document.getElementById("iadeTarih").value="";
        document.getElementById("aliciIsmi").value="";
        document.getElementById("aliciNo").value="";
        
    }

}
//kullanıcıdan bilgileri çekip kitap classımızı kullandığımız yer
document.getElementById("formKitap").addEventListener("submit", function (e) {

    const kitapAdi = document.getElementById("txtKitapAdi").value,
        kitapYazari = document.getElementById("txtKitapYazari").value,
        kitapISBN = document.getElementById("txtKitapISBN").value;
        kulTC = document.getElementById("aliciTC").value;
        iadeTARİH = document.getElementById("iadeTarih").value;
        kulAd = document.getElementById("aliciIsmi").value;
        kulTel = document.getElementById("aliciNo").value;
        

    const kitap = new Kitap(kitapAdi, kitapYazari, kitapISBN, kulTC, iadeTARİH, kulAd, kulTel);

    const islem = new Arayuz();

    if (kitapAdi != "" && kitapYazari != "" && kitapISBN != "" && kulTC !="" && kulAd !="" && kulTel!="") {
        islem.kitapEkle(kitap);

        islem.mesajGoster("Kitap başarıyla kullanıcıya verildi", "success");

        islem.kitapSay();

        islem.formuTemizleme();
    }

    else {
        islem.mesajGoster("Lütfen tüm alanları doldurunuz!", "error");
    }


    e.preventDefault();

});

document.getElementById("kitapListesi").addEventListener("click", function (e) {

    const islem = new Arayuz();

    islem.kitapSay();


    e.preventDefault();

});

