console.log("Welcome to Tic Tac Toe")

let music = new Audio("bgmusic.mp3")
let aturn = new Audio("O.mp3")
let gameovers = new Audio("gameover.wav")

let gameover = false

let turn = "X"  //initial variable

//function to change the turn
const changeturn = ()=>
{
    return turn==="X"? "O": "X"
}
// function to check for a win
const checkwin = ()=>
{
    let boxtexts = document.getElementsByClassName('boxtext'); //retireve all the text elements inside each box
    let wins = [  //making an array of possible wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    wins.forEach(e=>{   //iterating through the array and comparing win situations using if statements 
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ""))
        {
            document.querySelector('.gamerinfo').innerText = boxtexts[e[0]].innerText + " has won!"
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

//Game Logic 
//putting an on click listener
music.play(); 
let boxes = document.getElementsByClassName("box"); //retrieved all the boxes with class name box
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn; //i.e 'X'
            turn = changeturn() 
            aturn.play();
            checkwin();
            if(!gameover)
            {
                document.getElementsByClassName("gamerinfo")[0].innerText = "Turn for "+ turn
            }
        }
    })
})
//Add onclick listener to reset button 
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText=""
    })
    turn = "X"
    gameover = false
                document.getElementsByClassName("gamerinfo")[0].innerText = "Turn for "+ turn

                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})