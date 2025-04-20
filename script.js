//.box width/height = (contatiner.width / number of boxes desired) - 2px; the 2px accounts for the borders
//create variables
const container = document.querySelector("#container");
const btn = document.querySelector("button");
const containerStyle = window.getComputedStyle(container);
const containerWidth = parseInt(containerStyle.getPropertyValue("width"));
const containerHeight = parseInt(containerStyle.getPropertyValue("height"));

//hold letters
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//generate a random number between 0-255
function randomNumber() {
  return Math.floor(Math.random() * 256);
}

//generate number between 0-25
function randomLetter() {
  return Math.floor(Math.random() * 26);
}

function createText(event) {
  event.target.textContent = `${letters[randomLetter()]}`;
}

//generate random colors
function colorChange(event) {
  //option to stop chaning colors once opacity reaches 1
  // if (Number(event.target.style.opacity) === 1) {
  //   event.target.removeEventListener("mouseover", colorchange);
  // } else {
  //   event.target.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  // }

  //option to change box to a different color once opacity reaches 1
  if (Number(event.target.style.opacity) === 1) {
    event.target.style.backgroundColor = "#067e1c";
    event.target.removeEventListener("mouseover", colorchange);
  } else {
    event.target.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  }

  //option to keep changing colors endlessly
  // event.target.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

//change opacity
function boxOpacity(event) {
  let boxOpacity = event.target.style.opacity;
  if (boxOpacity < 1) {
    event.target.style.opacity = Number(boxOpacity) + 0.2;
  } else {
    event.target.style.opacity = 1;
  }
  console.log(boxOpacity);
}

//create boxes
function createBoxes(choice) {
  //empty current grid
  container.textContent = "";
  //create new grid
  let gridSize = choice * choice;
  for (let i = 0; i < gridSize; i++) {
    let createBox = document.createElement("div");
    let boxWidth = containerWidth / choice + "px";
    let textSize = containerWidth / choice;
    createBox.setAttribute("class", "box");
    createBox.style.width = boxWidth;
    createBox.style.height = boxWidth;
    createBox.style.textAlign = "center";
    createBox.style.alignContent = "center";
    createBox.style.fontSize = textSize * 0.8 + "px";
    createBox.addEventListener("mouseover", colorChange);
    createBox.addEventListener("mouseover", boxOpacity);
    createBox.addEventListener("mouseover", createText);
    container.appendChild(createBox);
  }
}

//create prompt to ask for number of squares per side of grid (max 100); add boxes to container
btn.addEventListener("click", getGridSize);
function getGridSize() {
  let gridChoice = prompt(
    "Choose a number of boxes for the sides of the grid."
  );
  if (isNaN(gridChoice) || gridChoice > 100 || gridChoice < 1) {
    alert("Please choose a number between 1 and 100.");
    return;
  }
  createBoxes(gridChoice);
}

//create initial grid
createBoxes(16);

//below functions didn't work as the entire grid would change to one color when hovering just over the parent border
//create hover function that changes colors of boxes with mouseover/mouseout on parent div
// container.addEventListener("mouseover", (event) => {
//   container.style.backgroundColor = "";
//   let target = event.target;
//   target.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
// });

//remove color on parent div
// container.addEventListener("mouseout", () => {
//   container.style.backgroundColor = "";
// });
