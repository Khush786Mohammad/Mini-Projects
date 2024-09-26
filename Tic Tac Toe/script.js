let gameInfo = document.querySelector('.player-info');
const boxes = document.querySelectorAll('.boxes');
const newGame = document.querySelector(".new-game");
//set the current player

let currentPlayer = "X";
let counter = 0;

const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');
const box7 = document.querySelector('#box7');
const box8 = document.querySelector('#box8');
const box9 = document.querySelector('#box9');


let activeBox1 = true;
let activeBox2 = true;
let activeBox3 = true;
let activeBox4 = true;
let activeBox5 = true;
let activeBox6 = true;
let activeBox7 = true;
let activeBox8 = true;
let activeBox9 = true;

// when the players are checking the boxes

box1.addEventListener('click',()=>{
    if(activeBox1)
    {
        box1.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox1 = false
        // function to check if anyone won the match
        isWinner();
    }
});

box2.addEventListener('click',()=>{
    if(activeBox2)
    {
        box2.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox2 = false;
        // function to check if anyone won the match
        isWinner();
    }
});

box3.addEventListener('click',()=>{
    if(activeBox3)
    {
        box3.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox3 = false;
        // function to check if anyone won the match
        isWinner();
    }
});

box4.addEventListener('click',()=>{
    if(activeBox4)
    {
        box4.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox4 = false;
        // function to check if anyone won the match
        isWinner();
    }
});

box5.addEventListener('click',()=>{
    if(activeBox5)
    {
        box5.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox5 = false;
        // function to check if anyone won the match
        isWinner();
    }
});

box6.addEventListener('click',()=>{
    if(activeBox6)
    {
        box6.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox6 = false;
        // function to check if anyone won the match
        isWinner();
    }
});

box7.addEventListener('click',()=>{
    if(activeBox7)
    {
        box7.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox7 = false;
        // function to check if anyone won the match
        isWinner();
    }
});

box8.addEventListener('click',()=>{
    if(activeBox8)
    {
        box8.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox8 = false;
        // function to check if anyone won the match
        isWinner();
    }
});

box9.addEventListener('click',()=>{
    if(activeBox9)
    {
        box9.textContent = currentPlayer;
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameInfo.textContent = `Current Player - ${currentPlayer}`;
        counter++;
        activeBox9= false;
        // function to check if anyone won the match
        isWinner();
    }
});

function newGameWindow(){
    newGame.classList.add('active');
}

newGame.addEventListener('click',()=>{
    newGame.classList.remove('active');

    // reset the boxes
    box1.textContent = "";
    box2.textContent = "";
    box3.textContent = "";
    box4.textContent = "";
    box5.textContent = "";
    box6.textContent = "";
    box7.textContent = "";
    box8.textContent = "";
    box9.textContent = "";

    // reset their active boolean values

    activeBoxes(true);

    currentPlayer = "X";
    gameInfo.textContent = `Current Player - ${currentPlayer}`;
    counter = 0;

   
    // box1.classList.remove('highlight1');
    // box2.classList.remove('highlight1');
    // box3.classList.remove('highlight1');
    // box4.classList.remove('highlight1');
    // box5.classList.remove('highlight1');
    // box6.classList.remove('highlight1');
    // box7.classList.remove('highlight1');
    // box8.classList.remove('highlight1');
    // box9.classList.remove('highlight1');
   
   
});

function activeBoxes(bool){
    activeBox1 = bool;
    activeBox2 = bool;
    activeBox3 = bool;
    activeBox4 = bool;
    activeBox5 = bool;
    activeBox6 = bool;
    activeBox7 = bool;
    activeBox8 = bool;
    activeBox9 = bool;
}
//  function to check if anyone won the game

function isWinner(){
    // first row
    if(box1.textContent != "" && box1.textContent == box2.textContent && box2.textContent == box3.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box1.textContent}`;
        addBoxColors(box1,box2,box3);

        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box1,box2,box3);
        });
    }

    // second row
    else if(box4.textContent != "" && box4.textContent == box5.textContent && box5.textContent == box6.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box4.textContent}`;
        addBoxColors(box4,box5,box6);
        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box4,box5,box6);
        });
    }
    // second column
    else if(box2.textContent != "" && box2.textContent == box5.textContent && box5.textContent == box8.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box2.textContent}`;
        addBoxColors(box2,box5,box8);

        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box2,box5,box8);
        });
    }
    // first column
    else if(box1.textContent != "" && box1.textContent == box4.textContent && box4.textContent == box7.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box1.textContent}`;
        addBoxColors(box1,box4,box7);

        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box1,box4,box7);
        });
    }
    // third row
    else if(box7.textContent != "" && box7.textContent == box8.textContent && box8.textContent == box9.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box7.textContent}`;
        addBoxColors(box7,box8,box9);
        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box7,box8,box9);
        });
    }
    // third column
    else if(box3.textContent != "" && box3.textContent == box6.textContent && box6.textContent == box9.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box3.textContent}`;
        addBoxColors(box3,box6,box9);
        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box3,box6,box9);
        });
    }
    // left diagonal
    else if(box1.textContent != "" && box1.textContent == box5.textContent && box5.textContent == box9.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box1.textContent}`;
        addBoxColors(box1,box5,box9);
        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box1,box5,box9);
        });
    }
    // right diagonal
    else if(box3.textContent != "" && box3.textContent == box5.textContent && box5.textContent == box7.textContent)
    {
        gameInfo.textContent = `Winner Player - ${box3.textContent}`;
        addBoxColors(box3,box5,box7);
        activeBoxes(false);
        newGameWindow();

        newGame.addEventListener('click',()=>{
            removeBoxColors(box3,box5,box7);
        });
    }
    else if(counter == 9)
    {
        gameInfo.textContent = `Game Tied !`
        activeBoxes(false);
        newGameWindow();
    }
}

function addBoxColors(box1,box2,box3){
    box1.classList.add('highlight');
    box2.classList.add('highlight');
    box3.classList.add('highlight');
}

function removeBoxColors(box1,box2,box3){
    box1.classList.remove('highlight');
    box2.classList.remove('highlight');
    box3.classList.remove('highlight');
}