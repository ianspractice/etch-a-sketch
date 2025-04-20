//.box width/height = (contatiner.width / number of boxes desired) - 2px; the 2px accounts for the borders

const container = document.querySelector("#container");
const btn = document.querySelector("button");
const containerStyle = window.getComputedStyle(container);
const containerWidth = parseInt(containerStyle.getPropertyValue("width"));
const containerHeight = parseInt(containerStyle.getPropertyValue("height"));

//create 1 box
function createBoxes(choice) {
  for (let i = 0; i < choice; i++) {
    let createBox = document.createElement("div");
    let boxWidth = containerWidth / choice - 2 + "px";
    createBox.setAttribute("class", "box");
    createBox.style.width = boxWidth;
    createBox.style.height = boxWidth;
    container.append(createBox);
  }
}

//create hover function that changes colors of boxes with mouseenter and mouseleave (or mouseover and mouseout? research this)

//create prompt to ask for number of squares per side of grid (max 100); add boxes to container
btn.addEventListener("click", getGridSize);
function getGridSize() {
  container.innerHTML = "";
  let gridChoice = prompt("Choose a number for the sides of the grid.");
  if (isNaN(gridChoice) || gridChoice > 100) {
    alert("Please choose a number less than 100.");
  }

  createBoxes(gridChoice);
}

//calculate new grid based on user response

//replace current grid with new grid
