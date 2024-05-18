const inputElem = document.querySelector('#controls input');
const createBtnElem = document.querySelector('[data-create]');
const destroyBtnElem = document.querySelector('[data-destroy]');
const boxesElem = document.querySelector('#boxes');

createBtnElem.addEventListener('click', createBoxes);
destroyBtnElem.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(inputElem.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  boxesElem.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesElem.appendChild(box);
    size += 10;
  }

  inputElem.value = '';
}

function destroyBoxes() {
  boxesElem.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
