const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const hurufBesarElement = document.getElementById("hb");
const hurufKecilElement = document.getElementById("hk");
const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");
const btnTerang = document.getElementById("mode-terang");
const btnGelap = document.getElementById("mode-gelap");
const btnSepia = document.getElementById("mode-sepia");


editorElement.addEventListener("input", hitungHuruf); 
function hitungHuruf() {
    const text = editorElement.value;

    charCountElement.textContent = text.length;

    let besar = 0;
    let kecil = 0;

    for (let char of text) {
        if (char >= "A" && char <= "Z") {
            besar++;
        } else if (char >= "a" && char <= "z") {
            kecil++;
        }
    }

    hurufBesarElement.textContent = besar;
    hurufKecilElement.textContent = kecil;
}

btnBesar.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    hitungHuruf();
});

btnKecil.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    hitungHuruf();
});

btnTerang.addEventListener("click", () => {
    document.body.className = "light-mode";
});

btnGelap.addEventListener("click", () => {
    document.body.className = "dark-mode";
});

btnSepia.addEventListener("click", () => {
    document.body.className = "sepia-mode";
});