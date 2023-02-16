// Password Generator

// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  let vokal = str.split("");
  for(let i = 0; i < vokal.length; i++){
    let n = vokal[i].charCodeAt() + 'a'.charCodeAt();
    n = (n + 1)%26;
    vokal[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  vokal.join("");
  return vokal;
}

function reverseWord (str) {
  let pertama = changeVocals();
  for(var i = str.length - 1; i >= 0; i--){
    pertama += str[i];
  }
  return pertama;
}

function setLowerUpperCase (str) {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let akhir = reverseWord();

  for(let i = 0; i < kalimat.length; i++){
    if(upper.indexOf(kalimat[i]) !== -1){
      akhir.push(kalimat[i].toLowerCase());
    } else if(lower.indexOf(kalimat[i]) !== -1){
      akhir.push(kalimat[i].toUpperCase());
    } else{
      akhir.push(kalimat[i]);
    }
  }
  akhir.join("");
  return akhir;
}

function removeSpaces (str) {
  let ketiga = setLowerUpperCase();
  ketiga = str.replaceAll(' ', '');
  return ketiga;
}

function passwordGenerator (name) {
  let terakhir = removeSpaces(name);
  return terakhir;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'