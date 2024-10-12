// Menentukan kalimat dari bilangan 1-99
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const satuan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
const belasan = ["Sepuluh", "Sebelas", "Dua belas", "Tiga belas", "Empat belas", "Lima belas", "Enam belas", "Tujuh belas", "Delapan belas", "Sembilan belas"];
const puluhan = ["", "", "Dua puluh", "Tiga puluh", "Empat puluh", "Lima puluh", "Enam puluh", "Tujuh puluh", "Delapan puluh", "Sembilan puluh"];

function convertToWords(num) {
    if (num < 10) {
        return satuan[num];
    } else if (num < 20) {
        return belasan[num - 10];
    } else {
        let puluhanPlace = Math.floor(num / 10);
        let satuanPlace = num % 10;
        return puluhan[puluhanPlace] + (satuanPlace > 0 ? " " + satuan[satuanPlace] : "");
    }
}

rl.question("Masukkan bilangan (1-99): ", (num) => {
    num = parseInt(num);
    if (num >= 1 && num <= 99) {
        console.log(`Bilangan ${num} dalam kata: ${convertToWords(num)}`);
    } else {
        console.log("Masukkan bilangan antara 1 dan 99.");
    }
    rl.close();
});