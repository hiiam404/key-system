const LINKVERTISE_URL = "https://link-center.net/1261358/CJ6Mw6Y3N7GN";

function verifyKey() {
    const input = document.getElementById("key-input").value.trim();
    const date = new Date();
    const correctKey = "Amethyst_" + date.getDate() + (date.getMonth() + 1) + "_Key";

    const result = document.getElementById("result");
    if (input === correctKey) {
        result.textContent = "Success! Access granted.";
        result.style.color = "#00ff7f";
        // Logic to unlock download or redirect
    } else {
        result.textContent = "Invalid Key. Try again.";
        result.style.color = "#ff4c4c";
    }
}
