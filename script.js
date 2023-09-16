const container = document.getElementById('container');
const button = document.getElementById('size');
const grid = document.getElementById('grid');
const gridPixels = 400;
let gridSize = 16;

let gridClicked = false;
grid.addEventListener('mousedown', () => (gridClicked = true));
grid.addEventListener('mouseup', () => (gridClicked = false));

let penType = 'black';

//generate initial grid
initialGrid();

function initialGrid() {
  grid.innerHTML = '';
  for (let i = 1; i <= gridSize; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    for (let j = 1; j <= gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      const dimensions = 400 / gridSize;
      square.style.width = `${dimensions}px`;
      square.style.height = `${dimensions}px`;
      column.appendChild(square);
    }
    grid.appendChild(column);
  }
  container.appendChild(grid);
  const squares = Array.from(document.getElementsByClassName('square'));
  squares.forEach((square) =>
    square.addEventListener('mouseover', () => {
      if (gridClicked) {
        if (penType == 'black') {
          square.style.backgroundColor = 'black';
        } else if (penType == 'rainbow') {
          square.style.backgroundColor = `rgba(${Math.floor(
            Math.random() * 256
          )},
                ${Math.floor(Math.random() * 257)},${Math.floor(
            Math.random() * 256
          )})`;
        } else {
          square.style.backgroundColor = 'white';
        }

        //to-do: shading
      }
    })
  );
}

//clear grid with button
const clear = document.getElementById('clear');
clear.addEventListener('click', initialGrid);

//black pen button
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');

black.addEventListener('click', () => {
  penType = 'black';
  black.classList.add('selected');
  if (rainbow.classList.contains('selected')) {
    rainbow.classList.remove('selected');
  }
  if (eraser.classList.contains('selected')) {
    eraser.classList.remove('selected');
  }
});

//rainbow pen button

rainbow.addEventListener('click', () => {
  penType = 'rainbow';
  rainbow.classList.add('selected');
  if (black.classList.contains('selected')) {
    black.classList.remove('selected');
  }
  if (eraser.classList.contains('selected')) {
    eraser.classList.remove('selected');
  }
});

//shading pen button
// const shading = document.getElementById('shading');
// shading.addEventListener('click', () => {penType = 'shading';});

//eraser button

eraser.addEventListener('click', () => {
  penType = 'eraser';
  eraser.classList.add('selected');
  if (rainbow.classList.contains('selected')) {
    rainbow.classList.remove('selected');
  }
  if (black.classList.contains('selected')) {
    black.classList.remove('selected');
  }
});

//generate grid from 'size' button
button.addEventListener('click', createGrid);

function createGrid() {
  gridSize = parseInt(prompt('Please enter a size (1-100)'));
  while (gridSize > 100 || gridSize < 1 || isNaN(gridSize)) {
    gridSize = parseInt(prompt('Please enter a valid size (1-100)', '16'));
  }
  grid.innerHTML = '';
  for (let i = 1; i <= gridSize; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    for (let j = 1; j <= gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      const dimensions = 400 / gridSize;
      square.style.width = `${dimensions}px`;
      square.style.height = `${dimensions}px`;
      column.appendChild(square);
    }
    grid.appendChild(column);
  }
  container.appendChild(grid);
  const squares = Array.from(document.getElementsByClassName('square'));
  squares.forEach((square) =>
    square.addEventListener('mouseover', () => {
      if (gridClicked) {
        if (penType == 'black') {
          square.style.backgroundColor = 'black';
        } else if (penType == 'rainbow') {
          square.style.backgroundColor = `rgba(${Math.floor(
            Math.random() * 256
          )},
                ${Math.floor(Math.random() * 257)},${Math.floor(
            Math.random() * 256
          )})`;
        } else {
          square.style.backgroundColor = 'white';
        }

        //to-do: shading
      }
    })
  );
}
