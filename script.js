class Kitap {//verileri kullanmak için class oluşturup constuctorları belirliyoruz
    constructor(kitapAdi, kitapYazari, kitapISBN) {
        this.kitapAdi = kitapAdi;
        this.kitapYazari = kitapYazari;
        this.kitapISBN = kitapISBN;
    }
}

class Arayuz {
    kitapEkle(kitap) {//html kısmında ekrana liste şeklinde yazdırıyoruz

        const tablo = document.getElementById("kitapListesi");

        const satir = document.createElement("tr");

        satir.innerHTML = `
        <td>${kitap.kitapAdi}</td>
        <td>${kitap.kitapYazari}</td>
        <td>${kitap.kitapISBN}</td>
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

    }

}
//kullanıcıdan bilgileri çekip kitap classımızı kullandığımız yer
document.getElementById("formKitap").addEventListener("submit", function (e) {

    const kitapAdi = document.getElementById("txtKitapAdi").value,
        kitapYazari = document.getElementById("txtKitapYazari").value,
        kitapISBN = document.getElementById("txtKitapISBN").value;

    const kitap = new Kitap(kitapAdi, kitapYazari, kitapISBN);

    const islem = new Arayuz();

    if (kitapAdi != "" && kitapYazari != "" && kitapISBN != "") {
        islem.kitapEkle(kitap);

        islem.mesajGoster("Kitap başarıyla eklendi", "success");

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