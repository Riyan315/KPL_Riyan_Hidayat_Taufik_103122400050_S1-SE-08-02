// /
//  Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan dari 1 hingga N. Contohnya, jika N adalah 5, maka fungsi akan mencetak:
//   1 + 2 + 3 + 4 + 5 = 15
//  //
function penjumlahanHinggaN(N) {
    let jumlah = 0;
    let penjumlahan = "";
    for (let i = 1; i <= N; i++) {
        jumlah += i;
        penjumlahan += i;
        if (i < N) {
            penjumlahan += " + ";
        }
    }
    console.log(`${penjumlahan} = ${jumlah}`);
}

penjumlahanHinggaN(5);