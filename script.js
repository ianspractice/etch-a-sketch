//.box width/height = (contatiner.width / number of boxes desired) - 2px; the 2px accounts for the borders

const container = document.querySelector("#container");

const containerStyle = window.getComputedStyle(container);

const containerWidth = containerStyle.getPropertyValue("width");

console.log(containerWidth);

const grid = 32 * 32;

//create 1 box
function createBoxes() {
  for (let i = 0; i < grid; i++) {
    let createBox = document.createElement("div");
    createBox.setAttribute("class", "box");
    createBox.style.width = "38px";
    createBox.style.height = "38px";
    container.appendChild(createBox);
  }
}

//add boxes to container
createBoxes();

//create hover function that changes colors of boxes with mouseenter and mouseleave (or mouseover and mouseout? research this)

//create prompt to ask for number of squares per side of grid (max 100)

//calculate new grid based on user response

//replace current grid with new grid
