// Menentukan bilangan terbesar dari tiga buah bilangan yang diinput, yaitu (X, Y, Z)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan pertama (X): ", (x) => {
    x = parseFloat(x);
    rl.question("Masukkan bilangan kedua (Y): ", (y) => {
        y = parseFloat(y);
        rl.question("Masukkan bilangan ketiga (Z): ", (z) => {
            z = parseFloat(z);
            let terbesar;

            if (x > y && x > z) {
                terbesar = x;
            } else if (y > x && y > z) {
                terbesar = y;
            } else {
                terbesar = z;
            }

            console.log(`Bilangan terbesar adalah: ${terbesar}`);
            rl.close();
        });
    });
});