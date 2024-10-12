// Menampilkan bilangan dari batasAwal sampai dengan batasAkhir
let batasAwal = prompt("Masukkan batas awal (harus lebih dari 0):");
let batasAkhir = prompt("Masukkan batas akhir (harus lebih dari atau sama dengan batas awal):");

batasAwal = parseInt(batasAwal);
batasAkhir = parseInt(batasAkhir);

if (batasAwal > 0 && batasAkhir >= batasAwal) {
    let i = batasAwal;
    while (i <= batasAkhir) {
        console.log(i);
        i++;
    }
} else {
    console.log("Nilai yang dimasukkan tidak valid. Pastikan batasAwal > 0 dan batasAkhir >= batasAwal.");
}