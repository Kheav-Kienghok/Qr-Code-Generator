function genQR() {
    var size = document.getElementById('size').value;
    var qrtext = document.getElementById('qrtext').value.trim();
    var img = document.getElementById('img');
    var placeholder = document.getElementById('placeholder');

    if (!qrtext) {
        alert("Please enter some text.");
        return;
    }

    // Hide the placeholder immediately after the button is clicked
    placeholder.style.display = 'none';

    // Prepare for loading the QR code image
    img.classList.add('hidden');

    var baseUrl = 'https://api.qrserver.com/v1/create-qr-code/';
    var url = `${baseUrl}?size=${size}x${size}&data=${encodeURIComponent(qrtext)}`;

    img.onload = function() {
        img.classList.remove('hidden');
    };
    img.onerror = function() {
        alert("Failed to load QR code. Please try again.");
    };

    img.src = url;
}
