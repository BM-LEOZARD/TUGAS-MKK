// Menentukan apakah sebuah bilangan "X" adalah bilangan positif atau bukan
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah bilangan: ", (x) => {
    x = parseFloat(x);
    if (x > 0) {
        console.log(`${x} adalah bilangan positif.`);
    } else {
        console.log(`${x} bukan bilangan positif.`);
    }
    rl.close();
});