// Menentukan jenis akar persamaan kuadrat berdasarkan nilai deskriminan (D)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai koefisien A: ", (a) => {
    a = parseFloat(a);
    rl.question("Masukkan nilai koefisien B: ", (b) => {
        b = parseFloat(b);
        rl.question("Masukkan nilai konstanta C: ", (c) => {
            c = parseFloat(c);
            let D = (b * b) - (4 * a * c);
            if (D > 0) {
                console.log("Akar persamaan kuadrat adalah real dan berbeda.");
            } else if (D === 0) {
                console.log("Akar persamaan kuadrat adalah real dan sama.");
            } else {
                console.log("Akar persamaan kuadrat adalah imaginer.");
            }
            rl.close();
        });
    });
});