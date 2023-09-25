const readline = require('readline-sync');

const Person = {
  initialize() {
    this.move = null;
    return this;
  }
}

const Human = Object.create(Person).initialize();

Human.choose = function() {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = readline.question(`Please choose rock, paper, or scissors. `);
  while(!choices.includes(choice)) {
    choice = readeline.questin(`Invalid input, try again. `);
  }
  this.move = choice;
  console.log(choice);
}


const RPSGame = {
  init() {
    this.human = Object.create(Human).initialize();
    return this;
  },

  play () {
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

const game = Object.create(RPSGame).init();
game.play();