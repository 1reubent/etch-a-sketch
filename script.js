const CANVAS_SIZE = 960;

let gridContainer = document.querySelector("#grid-container");
let gridSquares = [];

let button = document.querySelector("button");
button.addEventListener("click", (event) => {
  let newSize = Number.parseInt(prompt("New size? (1 - 100)"));
  while (isNaN(newSize) || newSize > 100 || newSize < 0 ) {
    if(!newSize){
      return; //user pressed cancel
    }
    newSize = Number.parseInt(prompt("Invalid Size. (1 - 100)"));
  }
  deleteGrid();
  createGrid(newSize)
});


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
      event.target.style.backgroundColor = "blue";
    })
    
    gridContainer.appendChild(gridSquares[i]);
  }
}


createGrid(16);



