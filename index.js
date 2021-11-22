let buttonGen = document.querySelector("#generate");
let square = document.querySelector(".square");

let coords = [];
let bombs = [];

const generateBombs = () => {
  while (bombs.length < 15) {
    let bomb = Math.floor(Math.random() * 101);
    if (bombs.includes(bomb)) {
      return;
    } else bombs.push(bomb);
  }
  console.log(bombs);
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
