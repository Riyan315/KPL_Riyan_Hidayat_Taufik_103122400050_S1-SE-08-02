/**
 * Mengubah satu bilangan bulat menjadi string "Fizz", "Buzz", "FizzBuzz", atau bilangan bulat.
 * * @param {number} value - Bilangan bulat yang akan diperiksa.
 * @returns {string|number} "FizzBuzz", "Fizz", "Buzz", atau angka asli.
 * @throws {Error} Jika input bukan angka.
 */
function zzzzOrNum(value) {
    if (typeof value !== 'number' || Array.isArray(value)) {
        throw new Error("Input must be a number");
    }

    if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
    if (value % 3 === 0) return "Fizz";
    if (value % 5 === 0) return "Buzz";
    
    return value;
}

/**
 * Memproses larik bilangan bulat menjadi larik berisi campuran string dan bilangan.
 * * @param {number[]} sequence - Larik bilangan bulat.
 * @returns {(string|number)[]} Larik hasil transformasi.
 * @throws {Error} Jika input bukan sebuah Array.
 */
function fizzBuzz(sequence) {
    
    if (!Array.isArray(sequence)) {
        throw new Error("Input must be an array");
    }

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};