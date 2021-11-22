let buttonGen = document.querySelector("#generate");
let submitCoords = document.querySelector("#submit");
let square = document.querySelector(".square");
let xForm = document.querySelector("#x");
let yForm = document.querySelector("#y");
let xCoord = +xForm.value;
let yCoord = +yForm.value;
let selectedCoords = [xCoord, yCoord];

let coords = [];
let bombs = [];

const generateBombs = () => {
  while (bombs.length < 15) {
    let bomb = Math.floor(Math.random() * 101);
    if (!bombs.includes(bomb)) {
      bombs.push(bomb);
    }
  }
};

const generateGrid = () => {
  let container = document.getElementById("container");
  for (let y = 10; y > 0; y--) {
    for (let x = 0; x < 10; x++) {
      let elem = document.createElement("div");
      container.appendChild(elem);
      elem.className = "square";
      elem.setAttribute("x-coord", x);
      elem.setAttribute("y-coord", y);
      coords.push([x, y]);
    }
    let breaker = document.createElement("div");
    container.appendChild(breaker);
    breaker.className = "clear";
  }
  generateBombs();
  console.log(coords);
  console.log(bombs);
};

buttonGen.addEventListener("click", generateGrid);

// randomly assign 15 squares a bomb
// use elem attributes to check bomb proximity
// bomb check at (1, 1) would be:
// x = 0, 1, 2
// y = 0, 1, 2

for (let i = x - 1; i <= x + 1; i++) {
  for (let j = y - 1; j <= y + 1; j++) {
    if (bombExists) {
      count += 1;
    }
  }
}

submitCoords.addEventListener("click", () => {
  bombCheck();
});

const bombCheck = () => {
  // finding square of coords
  let squareOfCoords = coords.map((coord, index) => {
    if (JSON.stringify(coord) === JSON.stringify(selectedCoords)) {
      return index + 1;
    }
  });
  console.log(`the corresponding square is ${squareOfCoords}`);
  let surroundingSquares = [
    squareOfCoords - 11,
    squareOfCoords - 10,
    squareOfCoords - 9,
    squareOfCoords - 1,
    squareOfCoords + 1,
    squareOfCoords + 9,
    squareOfCoords + 11,
    squareOfCoords + 12,
  ];
  console.log(
    `the surrounding squares of your square is ${surroundingSquares}`
  );
  console.log(
    surroundingSquares.map(
      (surrSquare) => bombs.filter((bomb) => surrSquare === bomb).length
    )
  );
};

// at square 13, (2, 9) we want to check squares (bombs[square - 1]):
// 2, 3, 4
// 12, 14
// 22, 23, 24
