// Menentukan nama hari berdasarkan no hari yang diinput
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nomor hari (1-7): ", (no_hari) => {
    no_hari = parseInt(no_hari);
    switch (no_hari) {
        case 1:
            console.log("SENIN");
            break;
        case 2:
            console.log("SELASA");
            break;
        case 3:
            console.log("RABU");
            break;
        case 4:
            console.log("KAMIS");
            break;
        case 5:
            console.log("JUMAT");
            break;
        case 6:
            console.log("SABTU");
            break;
        case 7:
            console.log("MINGGU");
            break;
        default:
            console.log("Nomor hari tidak valid. Masukkan nilai antara 1-7.");
    }
    rl.close();
});