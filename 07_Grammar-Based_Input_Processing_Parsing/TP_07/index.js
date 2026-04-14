function toNumberArray(number) {
  let arr;

  // kalau string brati pakai split & trim
  if (typeof number === "string") {
    arr = number.trim().split(",");
  } else {
    arr = number;
  }

  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].trim(); // hapus spasi

    let num = Number(item);   // ubah ke angka

    // mengecek apakah itu angka valid atau bukan 
    if (!isNaN(num)) {
      hasil.push(num);
    }
  }

  return hasil;

}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]
