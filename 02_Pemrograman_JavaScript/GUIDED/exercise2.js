// 1. buatlah array berisi 3 minuman favorit kalian, dan simpan variable bernama listMinuman. 
// 2. setelah itu, ubah 2 elemen pertama mengggunakan notasi kurung dan penugasan.
// 3. terakhir, tambahkan minuman baru di depan array

const listMinuman = ["jus jambu", "es teh", "air es"];
listMinuman[0] = "jus mangga";
listMinuman[1] = "es jeruk";
listMinuman.unshift("soda");
console.log(listMinuman);   
