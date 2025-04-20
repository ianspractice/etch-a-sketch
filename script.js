//.box width/height = (contatiner.width / number of boxes desired) - 2px; the 2px accounts for the borders

const container = document.querySelector("#container");
const btn = document.querySelector("button");
const containerStyle = window.getComputedStyle(container);
const containerWidth = parseInt(containerStyle.getPropertyValue("width"));
const containerHeight = parseInt(containerStyle.getPropertyValue("height"));

const boxWidth = containerWidth / 16 - 2 + "px";
const grid = 32 * 32;

//create 1 box
function createBoxes() {
  for (let i = 0; i < 16; i++) {
    let createBox = document.createElement("div");
    createBox.setAttribute("class", "box");
    createBox.style.width = boxWidth;
    createBox.style.height = boxWidth;
    container.appendChild(createBox);
  }
}

//add boxes to container
createBoxes();

//create hover function that changes colors of boxes with mouseenter and mouseleave (or mouseover and mouseout? research this)

//create prompt to ask for number of squares per side of grid (max 100)
btn.addEventListener("click", getGridSize);
function getGridSize() {
  let gridChoice = prompt("Choose a number for the sides of the grid.");
  if (isNaN(gridChoice)) {
    alert("Please choose a number less than 100.");
  }
  console.log(gridChoice);
}

//calculate new grid based on user response

//replace current grid with new grid
