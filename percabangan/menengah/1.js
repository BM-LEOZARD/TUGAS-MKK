// Menentukan bilangan terbesar dari dua buah bilangan yang diinput yaitu x dan y
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
            console.log(`${x} adalah bilangan terbesar.`);
        } else if (x < y) {
            console.log(`${y} adalah bilangan terbesar.`);
        } else {
            console.log(`${x} dan ${y} adalah sama besar.`);
        }
        rl.close();
    });
});