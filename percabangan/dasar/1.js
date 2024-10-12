// Menentukan apakah sebuah bilangan "X" adalah bilangan ganjil atau bukan
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah bilangan: ", (x) => {
    x = parseInt(x);
    if (x % 2 === 1) {
        console.log(`${x} adalah bilangan ganjil.`);
    } else {
        console.log(`${x} bukan bilangan ganjil.`);
    }
    rl.close();
});