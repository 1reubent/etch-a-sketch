let gridContainer = document.querySelector("#grid-container");
let gridSquares = [];
for (let i = 0; i < 16 * 16; i++) {
  gridSquares.push(document.createElement("div"));
  gridSquares[i].style.width = "50px";
  gridSquares[i].style.height = "50px";
  gridSquares[i].style.outline = "2px solid red";

  gridSquares[i].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "blue";
  })
  gridSquares[i].setAttribute("class", "grid-square");
  gridContainer.appendChild(gridSquares[i]);
}

