let sayi= prompt("SAYI GİRİNİZ");
let toplam=0;


for(let i=0; i<sayi.length;i++){
    let rakam=sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}

if(Number(sayi)==toplam){
    alert("ARMSTRONG SAYISIDIR");
}else{
    alert("ARMSTRONG SAYISI DEĞİLDİR");
}