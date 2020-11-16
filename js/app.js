//constants
console.log("hello");
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

const sqrBox = Array.from(document.querySelectorAll('.square'));

console.log(sqrBox);

//event listners

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