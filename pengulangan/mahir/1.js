// Menghitung n!, dimana n>=0, 0!=1
function Factorial(n) {
    let result = 1;
    let i = 1;

    if (n === 0) {
        return 1;
    }

    do {
        result *= i;
        i++;
    } while (i <= n);

    return result;
}

// Contoh
const n = 2; // Ganti dengan nilai n yang diinginkan
const hasil = Factorial(n);
console.log(`Faktorial dari ${n} adalah ${hasil}`);