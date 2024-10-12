// Mencari Angka Terbesar
function CariAngkaTerbesar(array) {
    return Math.max(...array);
}

const angka = [3.7, 8.8, 1.5, 4.5, 2.0, 5.1, 15.0, 25.5];
const angkaTerbesar = CariAngkaTerbesar(angka);
console.log(`Angka terbesar: ${angkaTerbesar}`);