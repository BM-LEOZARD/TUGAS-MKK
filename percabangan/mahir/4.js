// Menaikan jam setiap 1 menit
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jam (0-23): ", (jam) => {
    jam = parseInt(jam);
    rl.question("Masukkan menit (0-59): ", (menit) => {
        menit = parseInt(menit);
        menit++;

        if (menit === 60) {
            menit = 0;
            jam++;
        }

        if (jam === 24) {
            jam = 0;
        }

        console.log(`Waktu baru: ${jam} jam ${menit} menit.`);
        rl.close();
    });
});