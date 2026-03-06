const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const hurufBesarElement = document.getElementById("hb");
const hurufKecilElement = document.getElementById("hk");
const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");
const btnParagraf = document.getElementById("huruf-paragraf");

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

btnParagraf.addEventListener("click", () => {
    const text = editorElement.value.toLowerCase();
    editorElement.value = text.charAt(0).toUpperCase() + text.slice(1);
    hitungHuruf();
});