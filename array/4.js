// Deret Fibonacci
function Fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

const n = 15; // Ganti dengan nilai n yang diinginkan
const deretFibonacci = Fibonacci(n);
console.log(`Deret Fibonacci sebanyak ${n} angka: ${deretFibonacci}`);