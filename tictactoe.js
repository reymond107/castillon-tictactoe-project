const board = document.querySelector(".game-board");
const boxes = document.querySelectorAll(".box");

// turn number will determine the input in the box upon clicking
let turnNumber = 0;
let boardInput = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// loop through the boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function(event) {
        console.log(turnNumber)
            // if the box is empty it is available for input
        if (event.target.innerHTML == "") {
            let row = Number(boxes[i].getAttribute("row"));
            let col = Number(boxes[i].getAttribute("col"));
            console.log(row + col)
            if (turnNumber % 2 === 0) {
                event.target.innerHTML = "X";
                boardInput[row][col] = "X";
                // next input should be "O"
            } else {
                event.target.innerHTML = "O";
                // boardInput[][] = "O";
            }
            console.log(boardInput);
            // increment turnNumber upon every click
            turnNumber++;
            //win if correct combination 
        }
    })
}


// console.log(boxes);