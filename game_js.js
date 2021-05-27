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

function game(rounds=5, input){
    console.log('Welcome you are about to play 5 rounds of Rock Paper Scissors with the computer');

    let playerCnt = 0;
    let compCnt=0;
    let userInput;
    let computer;
    let roundOutput;
    for(let i=0; i!=rounds; ++i){
        console.log(`Round ${i}`);
        userInput = input
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

function changeDom(out){
    const container=document.querySelector('.container');

    const outputDiv = document.createElement('div');
    outputDiv.classList.add('content');
    outputDiv.textContent=out;
    container.appendChild(outputDiv);
  
  }

  let clicks=0;
  function hello() {
    clicks += 1;
    //document.getElementById("clicks").textContent= clicks;
    return clicks;
      
  };


  let playerCnt=0;
  function playerC() {
    playerCnt += 1;
    return playerCnt;
      
  };

  let compCnt=0;
  function compC() {
    compCnt += 1;
    return compCnt;
      
  };


  function updateBox(input){
    const container = document.querySelector('.listOutput');
    let textAdd=document.createElement('li');
    textAdd.classList.add('li' + input.id);
    textAdd.textContent = playRound(input.id, computerPlay());
    container.appendChild(textAdd);

  }

  let outRet;
  let comptest;
  let playertest;
  let result;
  function test(counter, input){
      if (counter<=5){
        let computer = computerPlay();
        result = playRound(input.id,computer);
        roundOutput=playRoundNumeric(input.id, computer);
        if (roundOutput==1){
            comptest = compC();
            console.log(comptest);
        }
        else if (roundOutput==-1){
            playertest = playerC();
            console.log(playertest);
        }
      }
      else if (counter==6){
        console.log('Game Over');
        if (playertest>comptest){
            result = `You Won! ${playertest} Vs ${comptest}`;
        }
        else if (playertest<comptest){
            result = `You Lost! ${playertest} Vs ${comptest}`;
        }
        else if (playertest==comptest){
            result=`You Draw! ${playertest} points each`;
        }
     
      }
    
    return result;

  }


function alertTest(playerCnt, compCnt){
    const inputs = document.querySelectorAll('input');
    const container = document.querySelector('.listOutput');

    inputs.forEach( (input) => {
        // and for each one we add a 'click' listener
    input.addEventListener('click', () => {
        counter = hello();
        //test(counter, input);
        //console.log(playRound(input.id,computerPlay()));
        if (counter<=5){
            let textAdd=document.createElement('li');
            textAdd.classList.add('li' + input.id);
            textAdd.textContent = test(counter, input);
            container.appendChild(textAdd);

        }
        else if (counter==6){
            let textAdd=document.createElement('p');
            textAdd.classList.add('p' + input.id);
            textAdd.textContent = test(counter, input);
            textAdd.setAttribute('style', 'font-size: 30px');
            container.appendChild(textAdd);

            let butAdd = document.createElement('button');
            butAdd.textContent = 'Play Again';
            butAdd.onclick=function(){window.location.reload()};
            butAdd.setAttribute('style', 'margin-top: 30px'); 
            container.appendChild(butAdd);
            





        }

    });
  });
}


alertTest(playerCnt, compCnt);






/*
const container = document.querySelector('.listOutput');

let compCnt=0;
let playerCnt=0;

const inputs = document.querySelectorAll('input');
inputs.forEach( (input) => {
      // and for each one we add a 'click' listener
  input.addEventListener('click', () => {
    let textAdd=document.createElement('li');
    textAdd.classList.add('li' + input.id);
    textAdd.textContent = playRound(input.id, computerPlay());
    container.appendChild(textAdd);

    let textNumbAdd = document.createElement('li');
    textNumbAdd.classList.add('li_num'+input.id);
    textNumbAdd.textContent=playRoundNumeric(input.id, computerPlay());
    let test;

    test = playRoundNumeric(input.id, computerPlay());
    container.appendChild(textNumbAdd)
    
  });
});
*/


