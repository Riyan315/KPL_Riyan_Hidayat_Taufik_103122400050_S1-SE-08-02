function fizzBuzz(arr) {

    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    let hasil = "";

    for (let i = 0; i < arr.length; i++) {

        let nilai;

        if (arr[i] % 14 === 0) {
            nilai = "FizzBuzz";
        } else if (arr[i] % 2 === 0) {
            nilai = "Fizz";
        } else if (arr[i] % 7 === 0) {
            nilai = "Buzz";
        } else {
            nilai = arr[i];
        }

        if (i > 0) {
            if (arr[0] === 1 || arr[0] < 0) {
                hasil += ", ";
            } else {
                hasil += " ";
            }
        }

        hasil += nilai;
    }

    return hasil;
}

module.exports = fizzBuzz;