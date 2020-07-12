let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissor_div = document.getElementById("Scissor");
const refresh_div = document.getElementById("Ref");


function getComputerChoice(){
    const choices = ['Rock','Paper','Scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function result(result,user,computer) {
    const smallUserWord = " user ".fontsize(3).sub();
    const smallCompWord = " comp ".fontsize(3).sub();
    const resultColorSpeed = 300;
    switch (result){
        case "win":
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = `${smallUserWord+user} beats ${smallCompWord+computer}. You Win!`;
        document.getElementById(user).classList.add('green-glow');
        setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},resultColorSpeed);
        break;
        case "lose":
        compScore++;
        compScore_span.innerHTML = compScore;
        result_p.innerHTML = `${smallUserWord+user} beats ${smallCompWord+computer}. You Lose!`;
        document.getElementById(user).classList.add('red-glow');
        setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},resultColorSpeed);
        break;
        case "draw":
        result_p.innerHTML = `${smallUserWord+user} beats ${smallCompWord+computer}. Draw!`;
        document.getElementById(user).classList.add('gray-glow');
        setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')},resultColorSpeed);
        break;
    }
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("user choice: " + userChoice);
    console.log("comp choice: " + computerChoice);
    switch(userChoice+' vs '+computerChoice){
        case "Rock vs Scissor":
        case "Paper vs Rock":
        case "Scissor vs Paper":
        result("win",userChoice,computerChoice);
        break;
        case "Scissor vs Rock":
        case "Rock vs Paper":
        case "Paper vs Scissor":
        result("lose",userChoice,computerChoice);
        break;
        case "Rock vs Rock":
        case "Paper vs Paper":
        case "Scissor vs Scissor":
        result("draw",userChoice,computerChoice);
        break;
    }
}

function refresh(){
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Start!";
}

function main(){
    rock_div.addEventListener('click',function(){
        game("Rock");
    })
    paper_div.addEventListener('click',function(){
        game("Paper");
    })
    scissor_div.addEventListener('click',function(){
        game("Scissor");
    })
    refresh_div.addEventListener('click',function(){
        refresh();
    })
    }
    
main();