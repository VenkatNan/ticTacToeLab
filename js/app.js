//constants
console.log("test js/app.js");
const winCombo =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const mssg = document.querySelector('h2');

//variables

let board;
let turn = 'x';
let winner;

//chached elems

//none of these worked with, or without the array.from

// const sqrBox = Array.from(document.querySelectorAll('.square'));
// const sqrBox = Array.from(document.querySelectorAll('[data-cell]'));

const sqrBox = Array.from(document.querySelectorAll('#board div'));

console.log(sqrBox, "WHY IS THIS ARRAY EMPTY!!");

//event listners

//this turned up undefined as well, idk whats happening man....

// document.getElementById('board').addEventListener('click', yourTurn());


//functions
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    render();
};

function render() {
    board.forEach(function(mrk, inx) {
        sqrBox[inx].textContent = mrk;
    });
};

function yourTurn(){
    console.log("it's your turn now!");
}

init();