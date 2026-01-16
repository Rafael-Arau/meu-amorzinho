const messages = [
    "Você tem crtz?",
    "Tem mesmo certeza??",
    "Não tem volta hein",
    "Pensa bem...",
    "Pensa mehor!",
    "Se você falar não, vou ficar muito triste com você...",
    "Mas muito , muito, muito triste...",
    "Triste tipo pra caramba, muito triste...",
    "Tabom, vou parar de perguntar...",
    "Brincadeirinha , fala sim por favorzinho ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
