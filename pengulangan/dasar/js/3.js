// Menampilkan bilangan ganjil dari batasAwal sampai dengan batasAkhir
let batasAwal = prompt("Masukkan batas awal:");
let batasAkhir = prompt("Masukkan batas akhir:");

batasAwal = parseInt(batasAwal);
batasAkhir = parseInt(batasAkhir);

if (batasAwal > 0 && batasAkhir >= batasAwal) {
    let i = batasAwal % 2 === 0 ? batasAwal + 1 : batasAwal; // Mulai dari angka ganjil berikutnya jika batasAwal genap
    do {
        console.log(i);
        i += 2;
    } while (i <= batasAkhir);
} else {
    console.log("Pastikan batasAwal > 0 dan batasAkhir >= batasAwal.");
}