// Luas segitiga
function HitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

// contoh
let alas = 12;
let tinggi = 32;
let luas = HitungLuasSegitiga(alas, tinggi);
console.log(`Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas}`);