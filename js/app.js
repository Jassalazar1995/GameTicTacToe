let smallBox = document.querySelectorAll(".smallBox");
console.log(smallBox);
let bigContainer = document.querySelector(".bigContainer");

let playerMarker = false;
let xPoints = [];
let oPoints = [];
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function sortPoints(array1) {
  array = array1.sort();
  return array;
}

function playMakerSwitch() {
  playerMarker = !playerMarker;
  return playerMarker;
}

function checkForWin() {
  for (let winPattern of winConditions) {
    let counterX = 0;
    let counterO = 0;
    for (let cellIndex of winPattern) {
      if (smallBox[cellIndex].textContent == "X") {
        counterX++;
      } else if (smallBox[cellIndex].textContent == "O") {
        counterO++;
      }
    }
    if (counterX == 3) {
      alert("X wins");
      clearBoard();
      break;
    } else if (counterO == 3) {
      alert("O wins");
      clearBoard();
      break;
    }
  }
}

function clearBoard() {
  for (let i = 0; i <= 8; i++) {
    smallBox[i].textContent = "";
  }
}

for (let i = 0; i <= 8; i++) {
  smallBox[i].addEventListener("click", (event) => {
    if (playerMarker == true) {
      smallBox[i].textContent = "X";
      smallBox[i].style.color = 'red';
      
    } else if (playerMarker == false) {
      smallBox[i].textContent = "O";
      smallBox[i].style.color = 'blue';
    }

    if (playerMarker == true) {
      xPoints.push(event.target.id);
    } else if (playerMarker == false) {
      oPoints.push(event.target.id);
    }

    sortPoints(xPoints);
    sortPoints(oPoints);
    checkForWin();
    playMakerSwitch();
  });
}
