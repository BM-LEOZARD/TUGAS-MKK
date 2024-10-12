// Menampikan tampilan MENU untuk menghitung luas bangun
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log("MENU UTAMA:");
    console.log("[1] Luas Segitiga");
    console.log("[2] Luas Persegi Panjang");
    console.log("[3] Exit");

    rl.question("Masukan pilihan No.: ", (choice) => {
        while (choice !== '3') {
            switch (choice) {
                case '1':
                    calculateTriangleArea();
                    return;
                case '2':
                    calculateRectangleArea();
                    return;
                default:
                    console.log("Pilihan tidak valid. Coba lagi.");
                    mainMenu();
                    return;
            }
        }
        console.log("Terima kasih! Program selesai.");
        rl.close();
    });
}

function calculateTriangleArea() {
    rl.question("Masukkan alas segitiga: ", (alas) => {
        rl.question("Masukkan tinggi segitiga: ", (tinggi) => {
            let area = 0.5 * parseFloat(alas) * parseFloat(tinggi);
            console.log(`Luas Segitiga: ${area}`);
            mainMenu();
        });
    });
}

function calculateRectangleArea() {
    rl.question("Masukkan panjang persegi panjang: ", (panjang) => {
        rl.question("Masukkan lebar persegi panjang: ", (lebar) => {
            let area = parseFloat(panjang) * parseFloat(lebar);
            console.log(`Luas Persegi Panjang: ${area}`);
            mainMenu();
        });
    });
}

// Start the program
mainMenu();