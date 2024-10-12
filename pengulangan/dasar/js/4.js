// Menampilkan bilangan yang habis dibagi 5 dari batasAwal dan batasAkhir
let batasAwal = prompt("Masukkan batas awal:");
let batasAkhir = prompt("Masukkan batas akhir:");

batasAwal = parseInt(batasAwal);
batasAkhir = parseInt(batasAkhir);

for (let i = batasAwal; i <= batasAkhir; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

console.log(batasAwal());
console.log(batasAkhir());