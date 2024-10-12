// Menentukan nilai akhir mahasiswa A, B, C, D, atau E berdasarkan nilai akhir (NA)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai UTS: ", (uts) => {
    rl.question("Masukkan nilai UAS: ", (uas) => {
        rl.question("Masukkan nilai Tugas: ", (tugas) => {
            uts = parseFloat(uts);
            uas = parseFloat(uas);
            tugas = parseFloat(tugas);

            const NA = (0.35 * uts) + (0.45 * uas) + (0.20 * tugas);
            let grade;

            if (NA >= 80 && NA <= 100) {
                grade = 'A';
            } else if (NA >= 70 && NA < 80) {
                grade = 'B';
            } else if (NA >= 50 && NA < 70) {
                grade = 'C';
            } else if (NA >= 40 && NA < 50) {
                grade = 'D';
            } else if (NA < 40) {
                grade = 'E';
            } else {
                grade = 'Invalid';
            }

            console.log(`Nilai Akhir: ${NA.toFixed(2)}`);
            console.log(`Indeks Akhir: ${grade}`);

            rl.close();
        });
    });
});