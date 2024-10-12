// Menentukan hubungan dari dua bilangan
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan pertama (X): ", (x) => {
    x = parseFloat(x);
    rl.question("Masukkan bilangan kedua (Y): ", (y) => {
        y = parseFloat(y);
        if (x > y) {
            console.log(`${x} lebih besar dari ${y}.`);
        } else if (x < y) {
            console.log(`${x} lebih kecil dari ${y}.`);
        } else {
            console.log(`${x} sama dengan ${y}.`);
        }
        rl.close();
    });
});