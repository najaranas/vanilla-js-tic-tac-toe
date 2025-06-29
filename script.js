/*
planing

player click => X||O

box click(){
    variable player-turn= X-turn||O-turn change on box click
    add box clicked class 
    if box contain clicked can't click again
    if all boxs are clicked game over
}
winning 
checkWinnig(){
    
}




*/
let boxsElements = document.querySelectorAll(".box");
let contentElements = document.querySelectorAll(".content");
let containerElement = document.querySelector(".container");
let button = document.querySelector("button");
let playerTurn = "X-turn";
//
// start box click event
boxsElements.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (box.firstElementChild.classList.contains("clicked")) {
      return;
    }
    if (playerTurn === "X-turn") {
      box.firstElementChild.innerHTML = "X";
      box.firstElementChild.classList.add("clicked");
      box.firstElementChild.classList.add("X");
      checkWinnig();
      playerTurn = "O-turn";
    } else {
      box.firstElementChild.innerHTML = "O";
      box.firstElementChild.classList.add("clicked");
      box.firstElementChild.classList.add("O");
      checkWinnig();
      playerTurn = "X-turn";
    }
  });
});
// play again start
button.addEventListener("click", (e) => {
  resestGame();
});

// play again start

// end box click event
function checkWinnig() {
  //check horizantal
  for (let i = 1; i <= 3; i++) {
    const element1 = document.getElementsByClassName(`${i}-${1}`)[0];
    const element2 = document.getElementsByClassName(`${i}-${2}`)[0];
    const element3 = document.getElementsByClassName(`${i}-${3}`)[0];
    if (
      (element1.classList.contains("X") &&
        element2.classList.contains("X") &&
        element3.classList.contains("X")) ||
      (element1.classList.contains("O") &&
        element2.classList.contains("O") &&
        element3.classList.contains("O"))
    ) {
      containerElement.classList.add("game-end");
      elementsAnimation(element1, element2, element3);
      loseElementsColor();
    }
  }
  //check vertical
  for (let i = 1; i <= 3; i++) {
    const element1 = document.getElementsByClassName(`${1}-${i}`)[0];
    const element2 = document.getElementsByClassName(`${2}-${i}`)[0];
    const element3 = document.getElementsByClassName(`${3}-${i}`)[0];
    if (
      (element1.classList.contains("X") &&
        element2.classList.contains("X") &&
        element3.classList.contains("X")) ||
      (element1.classList.contains("O") &&
        element2.classList.contains("O") &&
        element3.classList.contains("O"))
    ) {
      containerElement.classList.add("game-end");
      elementsAnimation(element1, element2, element3);
      loseElementsColor();
    }
  }
  const element1 = document.getElementsByClassName(`${1}-${1}`)[0];
  const element2 = document.getElementsByClassName(`${2}-${2}`)[0];
  const element3 = document.getElementsByClassName(`${3}-${3}`)[0];
  if (
    (element1.classList.contains("X") &&
      element2.classList.contains("X") &&
      element3.classList.contains("X")) ||
    (element1.classList.contains("O") &&
      element2.classList.contains("O") &&
      element3.classList.contains("O"))
  ) {
    containerElement.classList.add("game-end");
    elementsAnimation(element1, element2, element3);
    loseElementsColor();
  }
  const element4 = document.getElementsByClassName(`${3}-${1}`)[0];
  const element5 = document.getElementsByClassName(`${2}-${2}`)[0];
  const element6 = document.getElementsByClassName(`${1}-${3}`)[0];
  if (
    (element4.classList.contains("X") &&
      element5.classList.contains("X") &&
      element6.classList.contains("X")) ||
    (element4.classList.contains("O") &&
      element5.classList.contains("O") &&
      element6.classList.contains("O"))
  ) {
    containerElement.classList.add("game-end");
    elementsAnimation(element4, element5, element6);
    loseElementsColor();
  }
  //check diagonale
  //check draw
  // let check;
  for (i = 0; i < contentElements.length; i++) {
    if (!contentElements[i].classList.contains("clicked")) {
      return;
    } else {
      if (i == 8) {
        button.style.display = "block";
        containerElement.classList.add("game-end");
        playerTurn = "X-turn";
      }
    }
  }
}

function elementsAnimation(element1, element2, element3) {
  element1.classList.add("win");
  element2.classList.add("win");
  element3.classList.add("win");
}
function loseElementsColor() {
  contentElements.forEach((element) => {
    if (!element.classList.contains("win")) {
      element.style.cssText = "color: whitesmoke; opacity:.3 ";
    }
  });
  button.style.display = "block";
}
function resestGame() {
  contentElements.forEach((element) => {
    element.innerHTML = "";
    element.classList.remove("win");
    element.classList.remove("X");
    element.classList.remove("O");
    element.classList.remove("clicked");
    element.style.cssText = "";
  });
  containerElement.classList.remove("game-end");
  button.style.display = "none";
  playerTurn = "X-turn";
}
