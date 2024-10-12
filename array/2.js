// Mengurutkan Angka
function UrutkanAngka(array) {
    return array.slice().sort((a, b) => a - b);
}

const angka = [9.2, 2.5, 3.2, 7.0, 1.1, 4.1, 5.2, 8.5, 6.4, 10.5];
const angkaTerurut = UrutkanAngka(angka);
console.log(`Angka terurut: ${angkaTerurut}`);