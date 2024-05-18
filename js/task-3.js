const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');
const placeholder = e => {
  outputElem.textContent =
    inputElem.value !== '' ? e.currentTarget.value : 'Anonymous';
};

inputElem.addEventListener('input', placeholder);
