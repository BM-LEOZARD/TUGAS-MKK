// Menghitung jumlah mobil yang diperlukan berdasarkan jumlah peserta yang akan ikut
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const kapasitasMobil = 7;

rl.question("Masukkan jumlah peserta: ", (peserta) => {
    peserta = parseInt(peserta);
    let jumlahMobil = Math.ceil(peserta / kapasitasMobil);

    console.log(`Jumlah mobil yang diperlukan: ${jumlahMobil}`);
    rl.close();
});