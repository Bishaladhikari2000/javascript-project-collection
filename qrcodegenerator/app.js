// Get references to the HTML elements we will be working with
let imgBox = document.getElementById("imgBox"); // The box that will contain the QR code image
let qrImage = document.getElementById("qrImage"); // The image element where the QR code will be displayed
let qrText = document.getElementById("qrText"); // The input field where the user enters the URL

// Function to generate the QR code
function generateQR() {
  // Set the source of the QR code image using the QR code API
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;

  // Add the class 'show-img' to imgBox to make it visible
  imgBox.classList.add("show-img"); // This will change the max-height to allow the image to be displayed
}
