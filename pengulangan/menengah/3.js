// Menghitung rata-rata dari bilangan
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah bilangan yang ingin diinput: ", (n) => {
    n = parseInt(n);
    let numbers = [];
    let sum = 0;

    const getNumber = (i) => {
        if (i < n) {
            rl.question(`Masukkan bilangan ke-${i + 1}: `, (num) => {
                num = parseFloat(num);
                numbers.push(num);
                sum += num;
                getNumber(i + 1);
            });
        } else {
            let rataRata = sum / n;
            console.log(`Rata-rata: ${rataRata}`);
            rl.close();
        }
    };

    getNumber(0);
});