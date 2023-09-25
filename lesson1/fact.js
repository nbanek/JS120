const readline = require('readline-sync');

function Person() {
  return {
    move : null,
  }
}

function Human() {

  const humanObj = Person();
  const thisObj = {
    choose() {
      let choices = ['rock', 'paper', 'scissors'];
      let choice = readline.question(`Please choose rock, paper, or scissors. `);
      while(!choices.includes(choice)) {
        choice = readeline.questin(`Invalid input, try again. `);
      }
      this.move = choice;
      console.log(choice);
    }
  }
  return Object.assign(humanObj, thisObj);
}

function RPSGame() {
  return {
    human: Human(),
    play() {
      this.displayWelcomeMessage();
      while(true) {
        this.human.choose();
        break;
      }
    },
    
    displayWelcomeMessage() {
      console.log(`Welcome to RPS!`);
    }
  }
}

const game = RPSGame();
game.play();