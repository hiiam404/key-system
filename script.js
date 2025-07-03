// Substitua pelo seu link do Linkvertise e pela key correta
const LINKVERTISE_URL = "https://link-center.net/1261358/CJ6Mw6Y3N7GN";
const KEYS_CORRETAS = [
    "fdff5662parabens",
    "parabensvcpegouumakey",
    "PARABENSPEGOUUMA",
    "fdfghbahh",
    "bahhgfgfg"
];


const linkBtn = document.getElementById("linkvertise-btn");
const keySection = document.getElementById("key-section");
const verifyBtn = document.getElementById("verify-btn");
const keyInput = document.getElementById("key-input");
const result = document.getElementById("result");
const downloadSection = document.getElementById("download-section");
const downloadLink = document.getElementById("download-link");


linkBtn.addEventListener("click", () => {
    window.open(LINKVERTISE_URL, "_blank");
    keySection.style.display = "block";
});

verifyBtn.addEventListener("click", () => {
    const key = keyInput.value.trim();
    if (KEYS_CORRETAS.includes(key)) {
        result.textContent = "Key correta! Baixe seu script abaixo.";
        result.style.color = "#00c853";
        downloadSection.style.display = "block";
        // Substitua pelo caminho real do seu script
        downloadLink.href = "script.txt";
    } else {
        result.textContent = "Key incorreta. Tente novamente.";
        result.style.color = "#ff1744";
        downloadSection.style.display = "none";
    }
});
