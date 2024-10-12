// Menghitung n dengan inputan 5
function Factorial(n) {
    let result = 1;
    let i = n;
    let output = `${n}! = `;

    if (n === 0) {
        return "0! = 1";
    }

    do {
        result *= i;
        output += (i !== 1) ? `${i}*` : `${i} = ${result}`;
        i--;
    } while (i > 0);

    return output;
}

const n = 5; // Ganti dengan nilai n yang diinginkan
console.log(Factorial(n));