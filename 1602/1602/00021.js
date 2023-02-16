// Faktor Persekutuan Terbesar

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
  let hasil = [];
  let kecil, besar;
  if(angka1 <= angka2){
    kecil = angka1;
  } else{
    kecil = angka2;
  }

  if(angka1 >= angka2){
    besar = angka1;
  } else{
    besar = angka2;
  }

  for(let i = 1; i < kecil; i++){
    if(kecil % i == 0 && besar % i == 0){
      hasil.push(i);
    }
  }
  return Math.max(...hasil);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1