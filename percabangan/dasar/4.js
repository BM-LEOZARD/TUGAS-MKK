// Menentukan apakah a dan b merupakan kelipatan dari bilangan integer
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan pertama (A): ", (a) => {
    a = parseInt(a);
    rl.question("Masukkan bilangan kedua (C): ", (b) => {
        b = parseInt(b);
        if (a >= b && a > 0) {
            if (a % b === 0) {
                console.log(`${a} adalah kelipatan dari ${b}.`);
            } else {
                console.log(`${a} bukan kelipatan dari ${b}.`);
            }
        } else {
            console.log("Nilai a harus lebih besar atau sama dengan b dan lebih besar dari 0.");
        }
        rl.close();
    });
});