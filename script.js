const CANVAS_SIZE = 480;

//COLORS
const BLACK = "rgb(0,0,0)";
const RED = "rgb(225,0,0)";
const BLUE = "rgb(0,0,255)";
const GREEN = "rgb(0,255,0)";
let RAINBOW = false;
let CURRENT_COLOR = BLACK;



let gridContainer = document.querySelector("#grid-container");
let gridSquares = [];

//BUTTONS

//SET GRID SIZE BUTTON
let changeGridButton = document.querySelector("#change-grid");
changeGridButton.addEventListener("click", () => {
  let newSize = prompt("New size? (1 - 100)");
  while (!newSize || isNaN(newSize) || newSize > 100 || newSize < 0 ) {
    if(!newSize){
      return; //user pressed cancel
    }
    newSize = prompt("Invalid size (1 - 100)");
  }
  deleteGrid();
  createGrid(newSize)
});

//SET COLOR BLACK BUTTON
let colorBlackButton = document.querySelector("#color-black");
colorBlackButton.addEventListener( "click", () => {
  RAINBOW = false;
  CURRENT_COLOR = BLACK;
})

//SET COLOR RED BUTTON
let colorRedButton = document.querySelector("#color-red");
colorRedButton.addEventListener( "click", () => {
  RAINBOW = false;
  CURRENT_COLOR = RED;
})

//SET COLOR BLUE BUTTON
let colorBlueButton = document.querySelector("#color-blue");
colorBlueButton.addEventListener( "click", () => {
  RAINBOW = false;
  CURRENT_COLOR = BLUE;
})

//SET COLOR GREEN BUTTON
let colorGreenButton = document.querySelector("#color-green");
colorGreenButton.addEventListener( "click", () => {
  RAINBOW = false;
  CURRENT_COLOR = GREEN;
})

//SET COLOR RAINBOW
let colorRainbowButton = document.querySelector("#color-rainbow");
colorRainbowButton.addEventListener( "click", () => {
  RAINBOW = true;
})

//RESET BUTTON
let resetButton = document.querySelector("#reset");
resetButton.addEventListener( "click", () => {
  gridSquares.forEach(element => {
    element.style.backgroundColor = "white";
  });
})



//FUNCTIONS

function deleteGrid(){
  gridSquares.forEach(element => {
    element.remove();
  });
}

function createGrid(size){
  let boxSize = CANVAS_SIZE / size;

  for (let i = 0; i < size * size; i++) {
    gridSquares[i] = document.createElement("div");
    gridSquares[i].style.width = `${boxSize}px`;
    gridSquares[i].style.height = `${boxSize}px`;
    gridSquares[i].setAttribute("class", "grid-square");

    gridSquares[i].addEventListener('mouseover', (event) => {
      if (RAINBOW){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        CURRENT_COLOR = `rgb(${r},${g},${b})`
      }
      event.target.style.backgroundColor = CURRENT_COLOR;
    })
    
    gridContainer.appendChild(gridSquares[i]);
  }
}


createGrid(16);



