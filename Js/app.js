const qrContainer = document.querySelector("#qr-code");
const qrText = document.querySelector(".qr-text");
const downloadBtn = document.querySelector("#download-btn");


qrText.addEventListener("input", handleQRText);
downloadBtn.addEventListener("click", downloadQRCode);
let text = "";


function handleQRText(e) {
    const value = e.target.value.trim();
    text = value;
    text = value;

    if (!text) {
        // Ocultar el botón de descarga si no hay texto para generar el QR
        downloadBtn.hidden = true;
        qrContainer.innerHTML = "";
    } else {
        // Generar el código QR y mostrar el botón de descarga
        generateQRCode();
        downloadBtn.hidden = false;
    }
}

async function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode("qr-code", {
        text
    });
}
function downloadQRCode() {
    // Seleccionar el canvas dentro del contenedor del código QR
    const qrCanvas = qrContainer.querySelector("canvas");

    if (!qrCanvas) return alert("QR code not generated!");

    // Crear enlace de descarga
    const qrImage = qrCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "qr-code.png";
    link.click();
}

generateQRCode();