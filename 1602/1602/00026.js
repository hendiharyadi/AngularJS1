// Mengurutkan Abjad

// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

function urutkanAbjad(str) {
  let abjadBaru = kata.split("");
  for(var i = 0; i < abjadBaru.length; i++){
    let n = abjadBaru[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1)%26;
    abjadBaru[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return abjadBaru.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'