const qrContainer = document.querySelector("#qr-code");
const qrText = document.querySelector(".qr-text");

const defaultUrl = "Te quiero mucho meme <3";

qrText.addEventListener("input", handleQRText);

function handleQRText(e) {
    const value = e.target.value;
    text = value;
    if (!value) {
        text = defaultUrl;
    }
    generateQRCode();
}

async function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode("qr-code", {
        text
    });
}

generateQRCode();