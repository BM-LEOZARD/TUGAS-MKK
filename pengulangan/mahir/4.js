// Menghitung Pembagi Bersama Terbesar dari dua buah bilangan a dan b
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan pertama (a): ", (a) => {
    rl.question("Masukkan bilangan kedua (b): ", (b) => {
        a = parseInt(a);
        b = parseInt(b);

        function gcd(a, b) {
            do {
                let remainder = a % b;
                a = b;
                b = remainder;
            } while (b !== 0);
            return a;
        }

        const hasil = gcd(a, b);
        console.log(`Pembagi Bersama Terbesar dari ${a} dan ${b} adalah ${hasil}`);

        rl.close();
    });
});