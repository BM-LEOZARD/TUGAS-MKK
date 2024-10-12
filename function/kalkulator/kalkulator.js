const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tambah(angka1, angka2) {
    let hasil = angka1 + angka2;
    console.log(`${angka1} + ${angka2} = ${hasil}`);
    return hasil;
}

function kurang(angka1, angka2) {
    let hasil = angka1 - angka2;
    console.log(`${angka1} - ${angka2} = ${hasil}`);
    return hasil;
}

function kali(angka1, angka2) {
    let hasil = angka1 * angka2;
    console.log(`${angka1} * ${angka2} = ${hasil}`);
    return hasil;
}

function bagi(angka1, angka2) {
    if (angka2 !== 0) {
        let hasil = angka1 / angka2;
        console.log(`${angka1} / ${angka2} = ${hasil}`);
        return hasil;
    } else {
        console.log("Tidak dapat membagi dengan nol");
        return null;
    }
}

function hitung() {
    rl.question('Masukkan angka pertama: ', (num1) => {
        const angka1 = parseFloat(num1);
        rl.question('Masukkan angka kedua: ', (num2) => {
            const angka2 = parseFloat(num2);
            rl.question('Pilih operasi (tambah/kurang/kali/bagi): ', (operator) => {
                let hasil;
                
                if (operator === 'tambah') {
                    hasil = tambah(angka1, angka2);
                } else if (operator === 'kurang') {
                    hasil = kurang(angka1, angka2);
                } else if (operator === 'kali') {
                    hasil = kali(angka1, angka2);
                } else if (operator === 'bagi') {
                    hasil = bagi(angka1, angka2);
                } else {
                    console.log('Operasi tidak valid');
                    hitung();  // Recursion to start over
                    return;
                }
                
                if (hasil !== null) {
                    console.log(`Hasil: ${hasil}`);
                }
                
                rl.question('Apakah ingin melanjutkan? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        hitung();  // Recursion to start over
                    } else {
                        rl.close();
                    }
                });
            });
        });
    });
}

hitung();