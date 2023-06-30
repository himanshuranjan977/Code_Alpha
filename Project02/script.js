const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradient = document.getElementById('gradient');
const generateBtn = document.getElementById('generateBtn');

function setGradient() {
    gradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
}

function generateRandomGradient() {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
}

generateBtn.addEventListener('click', setGradient);

generateRandomGradient();