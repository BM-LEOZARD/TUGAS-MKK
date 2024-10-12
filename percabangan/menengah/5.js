// Menentukan letak kuadran, apakah berada di kuadaran I,II,III atau kuadran IV
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai X: ", (x) => {
    x = parseFloat(x);
    rl.question("Masukkan nilai Y: ", (y) => {
        y = parseFloat(y);
        let kuadran;

        if (x > 0 && y > 0) {
            kuadran = 'Kuadran I';
        } else if (x < 0 && y > 0) {
            kuadran = 'Kuadran II';
        } else if (x < 0 && y < 0) {
            kuadran = 'Kuadran III';
        } else if (x > 0 && y < 0) {
            kuadran = 'Kuadran IV';
        } else if (x === 0 && y === 0) {
            kuadran = 'Titik pusat';
        } else if (x === 0) {
            kuadran = 'Garis Y';
        } else if (y === 0) {
            kuadran = 'Garis X';
        }

        console.log(`Titik (${x}, ${y}) berada di ${kuadran}.`);
        rl.close();
    });
});