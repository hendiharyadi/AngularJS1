// Ubah Huruf

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
  let abjadBaru = kata.split("");
  for(var i = 0; i < abjadBaru.length; i++){
    let n = abjadBaru[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1)%26;
    abjadBaru[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return abjadBaru.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu