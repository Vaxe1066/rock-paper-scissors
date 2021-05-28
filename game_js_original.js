function computerPlay(){
    let compNumb = Math.random();
    if (compNumb <= 1/3){
        return 'Rock';
    }
    else if (compNumb <= 2/3){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}


function propcase(str){
    str = str.toUpperCase();
    str = str.toLowerCase();
    first = str.slice(0,1);
    first = first.toUpperCase();
    return str.replace(str.slice(0,1), first);

}



function playRound(playerSelection, computerSelection){
    playerSelection = propcase(playerSelection);

    if (playerSelection==computerSelection){
        return `Draw! You both picked ${playerSelection}`;
    }
    else if (playerSelection=='Rock' && computerSelection=='Paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection=='Paper' && computerSelection=='Scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    }
    else if (playerSelection=='Scissors' && computerSelection=='Rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else{
        return `You Win ! ${playerSelection} beats ${computerSelection}`;
    }


}

/*
-1 You
0 Draw
1 Comp
*/

function playRoundNumeric(playerSelection, computerSelection){
    playerSelection = propcase(playerSelection);

    if (playerSelection==computerSelection){
        return 0
    }
    else if (playerSelection=='Rock' && computerSelection=='Paper') {
        return 1;
    }
    else if (playerSelection=='Paper' && computerSelection=='Scissors') {
        return 1;

    }
    else if (playerSelection=='Scissors' && computerSelection=='Rock') {
        return 1;
    }
    else{
        return -1;
    }


}

//User prompt function take only correct values do until cancel or correct input
function userPrompt(){
    let answerCheck=1;
    let answer = prompt("Please enter, Rock, Paper or Scissors");
    while(answerCheck==1){
        
        if (answer === null){
            return;
        }
        else{
            answer = propcase(answer);
            if (answer=='Rock' || answer=='Paper' || answer=='Scissors'){
                answerCheck=0;
                return answer;
            }
            else{
                answer = prompt("Wrong Input, Please enter, Rock, Paper or Scissors");
                answerCheck==1;
                continue;
            }
        }
        

    
    }
}



//Main game function below

function game(rounds=5){
    console.log('Welcome you are about to play 5 rounds of Rock Paper Scissors with the computer');

    let playerCnt = 0;
    let compCnt=0;
    let userInput;
    let computer;
    let roundOutput;
    for(let i=0; i!=rounds; ++i){
        console.log(`Round ${i}`);
        userInput = userPrompt();
        computer = computerPlay();
        console.log(playRound(userInput, computer));

        roundOutput=playRoundNumeric(userInput, computer);
        if (roundOutput==0){
            continue;
        }
        else if (roundOutput==1){
            ++compCnt;
        }
        else if (roundOutput==-1){
            ++playerCnt;
        }
    }

    console.log('Game Over');
    if (playerCnt>=compCnt){
        console.log(`You Won! ${playerCnt} Vs ${compCnt}`);
    }
    else if (layerCnt<=compCnt){
        console.log(`You Lost! ${playerCnt} Vs ${compCnt}`);
    }
    else {
        console.log(`Draw ${playerCnt} each`);
    }

}

game();


//console.log(game());

/*
let viraj = 'Scissors';
const computer = computerPlay();

console.log(playRound(viraj, computer));
*/