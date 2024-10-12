// Menghitung Nilai rata-rata
function HitungRataRata(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

const angka = [3.7, 1.5, 5.1];
const rataRata = HitungRataRata(angka);
console.log(`Nilai rata-rata: ${rataRata}`);