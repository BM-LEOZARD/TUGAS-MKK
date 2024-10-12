// Menampilkan banyaknya bilangan ganjil dari batasAwal dan batasAkhir
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan batas awal: ", (batasAwal) => {
    rl.question("Masukkan batas akhir: ", (batasAkhir) => {
        batasAwal = parseInt(batasAwal);
        batasAkhir = parseInt(batasAkhir);

        let count = 0;
        let i = batasAwal;

        do {
            if (i % 2 !== 0) {
                count++;
            }
            i++;
        } while (i <= batasAkhir);

        console.log(`Banyaknya bilangan ganjil: ${count}`);

        rl.close();
    });
});