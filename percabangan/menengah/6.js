// Menentukan Hari Keberapa dalam tahun berjalan, berdasarkan tanggal dan bulan
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

rl.question("Masukkan tanggal: ", (tanggal) => {
    tanggal = parseInt(tanggal);
    rl.question("Masukkan bulan: ", (bulan) => {
        bulan = parseInt(bulan);
        let hariKe = tanggal;
        
        for (let i = 0; i < bulan - 1; i++) {
            hariKe += daysInMonth[i];
        }
        
        console.log(`Hari ke-${hariKe}`);
        rl.close();
    });
});