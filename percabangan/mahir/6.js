// Menghitung Hari ke N dari hari Senin
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

rl.question("Masukkan jumlah hari (N): ", (N) => {
    N = parseInt(N);
    let hariKe = N % 7;
    let hariBaru = hari[hariKe];

    console.log(`Hari ke-${N} dari sekarang adalah: ${hariBaru}`);
    rl.close();
});