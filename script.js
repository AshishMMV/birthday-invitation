function showMessage() {
    document.getElementById('message').classList.remove('hidden');
    // Show a cute popup as well
    showPopup();
}

function moveButton() {
    const noButton = document.querySelector('.no');
    noButton.classList.add('moved');
    noButton.textContent = "Are you sure?";
}

function showPopup() {
    // Create an overlay to blur the background
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Create a popup element
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <h2>Surprise! 🎉</h2>
        <p>I'm so excited to celebrate your special day with you! Let’s make it unforgettable!</p>
        <button onclick="closePopup()">Close</button>
    `;

    document.body.appendChild(popup);
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    document.querySelector('.popup').remove();
    document.querySelector('.overlay').remove();
}
