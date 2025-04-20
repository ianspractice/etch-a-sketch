//.box width/height = (contatiner.width / number of boxes desired) - 2px; the 2px accounts for the borders

const container = document.querySelector("#container");

//create 1 box
function createBoxes() {
  for (let i = 0; i < 16; i++) {
    let createBox = document.createElement("div");
    createBox.setAttribute("class", "box");
    container.append(createBox);
    console.log(createBox);
  }
}

createBoxes();

//add boxes to container

//create hover function that changes colors of boxes with mouseenter and mouseleave (or mouseover and mouseout? research this)

//create prompt to ask for number of squares per side of grid (max 100)

//calculate new grid based on user response

//replace current grid with new grid
