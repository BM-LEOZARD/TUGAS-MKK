// Menampilkan bilangan dari satu sampai dengan n
let n = prompt("Masukkan nilai n (harus lebih dari atau sama dengan 1):");

let i = 1;

if (n >= 1) {
    while (i <= n) {
        console.log(i);
        i++;
    }
} else {
    console.log("Nilai n harus lebih dari atau sama dengan 1.");
}