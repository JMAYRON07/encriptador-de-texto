function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const shift = 3; // Número de posiciones para desplazar
    let encryptedText = "";

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        encryptedText += char;
    }

    document.getElementById("encryptedText").value = encryptedText;
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("encryptedText").value = "";
}

function copyText() {
    const encryptedText = document.getElementById("encryptedText");
    encryptedText.select();
    document.execCommand("copy");
}