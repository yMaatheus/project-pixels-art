const colorPalette = document.querySelector('#color-palette');
const generateBoard = document.querySelector('#generate-board');
const pixelBoard = document.querySelector('#pixel-board');

function randomNumber() {
  return Number((Math.random() * 255).toFixed());
}

function generateRandomColor() {
  return `RGB(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

function paintColorsPalette() {
  const blackColor = document.querySelector('#black');
  blackColor.style.backgroundColor = 'black';

  const redColor = document.querySelector('#red');
  redColor.style.backgroundColor = generateRandomColor();

  const blueColor = document.querySelector('#blue');
  blueColor.style.backgroundColor = generateRandomColor();

  const greenColor = document.querySelector('#green');
  greenColor.style.backgroundColor = generateRandomColor();
}

function pixelBoardCreateLines(height, width) {
  for (let index = 1; index <= height; index += 1) {
    const lineSection = document.createElement('section');
    lineSection.id = `pixel-board-line-${index}`;

    for (let i = 1; i <= width; i += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.style.backgroundColor = 'white';

      lineSection.appendChild(pixel);
    }

    pixelBoard.appendChild(lineSection);
  }
  pixelBoard.style.width = `${(width * 42)}px`;
  pixelBoard.style.height = `${(height * 42)}px`;
}

function resetSelected() {
  const blackColor = document.querySelector('#black');

  if (document.getElementsByClassName('selected').length > 0) {
    const array = document.getElementsByClassName('selected');
    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      element.classList.remove('selected');
    }
  }

  blackColor.classList.add('selected');
}

function changeSelected(event) {
  const selected = document.getElementsByClassName('selected');
  if (selected.length > 0) {
    resetSelected();
  }
  if (event.target === selected) {
    return;
  }
  selected[0].classList.remove('selected');
  event.target.classList.add('selected');
}

function toPaintPixel(event) {
  const selected = document.querySelector('.selected');
  const color = selected.style.backgroundColor;
  const { target } = event;
  if (!target.classList.contains('pixel')) {
    return;
  }

  target.style.backgroundColor = color;
}

function clearPixelBoard() {
  const array = document.getElementsByClassName('pixel');
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    element.style.backgroundColor = 'white';
  }
}

function resetPixelBoard() {
  for (let index = pixelBoard.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pixelBoard.childNodes[index];
    currentChildren.remove();
  }
}

function loadClearButton() {
  const button = document.querySelector('#clear-board');
  button.innerText = 'Limpar';
  button.addEventListener('click', clearPixelBoard);
}

function generateBoardEvent() {
  const input = document.querySelector('#board-size');
  if (input.value === '') {
    alert('Board inválido!');
    return;
  }
  resetPixelBoard();
  let value = input.value < 5 ? 5 : input.value;
  value = input.value > 50 ? 50 : value;
  pixelBoardCreateLines(Number(value), Number(value));
}

paintColorsPalette();
loadClearButton();
pixelBoardCreateLines(5, 5);
resetSelected();
colorPalette.addEventListener('click', changeSelected);
generateBoard.addEventListener('click', generateBoardEvent);
pixelBoard.addEventListener('click', toPaintPixel);
