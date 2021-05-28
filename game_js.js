//const { doc } = require("prettier");

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



  let outRet;
  let comptest;
  let playertest;
  let result;

  

  function game(counter, input){
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
      else if (counter==5){
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
    
    return {
        result: result,
        playerScore: playertest,
        compScore: comptest,
    };;

  }



function execGame(playerCnt, compCnt){
    const inputs = document.querySelectorAll('input');
    const container = document.querySelector('.listOutput');
    const youContainer = document.querySelector('.you')

    inputs.forEach( (input) => {
        // and for each one we add a 'click' listener
    input.addEventListener('click', () => {
        counter = hello();
        //test(counter, input);
        //console.log(playRound(input.id,computerPlay()));
        if (counter<=4){
            
            let textAdd=document.createElement('li');
            textAdd.classList.add('li' + input.id);
            let gameValues = game(counter, input);
            textAdd.textContent = gameValues.result;
            container.appendChild(textAdd);
            

            let updatePlayer=document.querySelector('.youScore')
            updatePlayer.textContent = gameValues.playerScore;

            let updateComp=document.querySelector('.compScore')
            updateComp.textContent = gameValues.compScore;


        }
        else if (counter==5){
            let textAdd=document.createElement('li');
            textAdd.classList.add('li' + input.id);
            let gameValues = game(counter, input);
            textAdd.textContent = gameValues.result;
            container.appendChild(textAdd);
            

            let updatePlayer=document.querySelector('.youScore')
            updatePlayer.textContent = gameValues.playerScore;

            let updateComp=document.querySelector('.compScore')
            updateComp.textContent = gameValues.compScore;

            //final 

            let textAddF=document.createElement('p');
            textAddF.classList.add('finalResultText');
            let finalResult = game(counter, input);
            textAddF.textContent = finalResult.result;
            textAddF.setAttribute('style', 'font-size: 30px');
            container.appendChild(textAddF);

            let butAdd = document.createElement('button');
            butAdd.textContent = 'Play Again';
            butAdd.onclick=function(){window.location.reload()};
            butAdd.setAttribute('style', 'margin-top: 30px'); 
            container.appendChild(butAdd);
            





        }

    });
  });
}


execGame(playerCnt, compCnt);






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


