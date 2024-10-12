// Menampilkan jumlah deret bilangan ganjil dari batasAwal dan batasAkhir
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan batas awal: ", (batasAwal) => {
    rl.question("Masukkan batas akhir: ", (batasAkhir) => {
        batasAwal = parseInt(batasAwal);
        batasAkhir = parseInt(batasAkhir);
        
        let sum = 0;
        let i = batasAwal;
        
        do {
            if (i % 2 !== 0) {
                sum += i;
            }
            i++;
        } while (i <= batasAkhir);
        
        console.log(`Jumlah deret bilangan ganjil: ${sum}`);

        rl.close();
    });
});