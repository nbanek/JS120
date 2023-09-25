/*
RPSGame
  displays welcome message
  displays goodbye message

Human
  take turn/move
Computer
  take turn/move



*/

const readline = require('readline-sync');

function Player() {
  return {
    move : null,
  }
}

function Human() {
  const playerObj = Player();

  return Object.assign({}, playerObj, {
    takeTurn() {
      let choice = readline.question(`It's your turn, choose rock, paper, or scissors. `);
      while(!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = readline.question('Wrong input, try again. (rock, paper, or scissors) ');
      }
      this.move = choice;
    }
  })

}

function Computer() {
  const playerObj = Player();

  return Object.assign({}, playerObj, {
    takeTurn() {
      let choices = ['rock', 'paper', 'scissors'];
      let randomNum = Math.floor(Math.random() * choices.length);
      this.move = choices[randomNum];
    }
  })

}


function RPSGame() {
  return {
    human : Human(),
    computer : Computer(),
    score : {
      human: 0,
      computer: 0,
    },
  
    run() {
      this.displayWelcomeMessage();

      while(true) {
        while(!this.winnerDetected()) {
          this.displayScore();
          this.human.takeTurn();
          this.computer.takeTurn();
          this.displayWinner();
          if(this.winnerDetected) {
            console.clear();
            let winner = Object.keys(this.score).filter(key => {
              return this.score[key] === 3;
          })[0];
          console.log(`${winner === 'human'? 'You' : 'Computer'} won the game!`);
          }
        }

        if(this.playAgain()) {
          this.resetScore();
        } else {
          break;
        }-
    }
      this.displayGoodbyeMessage();
    },
  
    displayWelcomeMessage() {
      console.log(`Welcome to Tic Tac Toe! First to win 3 rounds wins the game.`);
    },

    displayGoodbyeMessage() {
      console.log(`Goodbye! Thanks for playing Tic Tac Toe!`);
    },

    displayWinner() {
      console.clear();
      humanMove = this.human.move;
      computerMove = this.computer.move;

      console.log(`You chose ${humanMove}, computer chose ${computerMove}`);

      if (humanMove === 'rock' && computerMove === 'scissors' ||
      humanMove === 'scissors' && computerMove === 'paper' ||
      humanMove === 'paper' && computerMove === 'rock') {
        console.log('You win this round!\n');
        this.score.human += 1;
      } else if (computerMove === 'rock' && humanMove === 'scissors' ||
      computerMove === 'scissors' && humanMove === 'paper' ||
      computerMove === 'paper' && humanMove === 'rock') {
        console.log("Computer wins this round!\n");
        this.score.computer += 1;
      } else {
        console.log(`It's a tie. No one wins this round!\n`);
      }
    },

    winnerDetected() {
      return Object.keys(this.score).some(key => {
        return this.score[key] === 3;
      });
    },

    displayScore() {
      console.log(`The score is you: ${this.score.human}, computer: ${this.score.computer}.`);
    },

    playAgain() {
      let playAgain = readline.question("Would you like to play again?");
      while(!['yes', 'no'].includes(playAgain)){
        playAgain = readline.question('Sorry, wrong input. (yes, or no)')
      }
      return playAgain === 'yes' ? true : false;
    },

    resetScore() {
      this.score.human = 0;
      this.score.computer = 0;
    }

  }


}

const game = RPSGame();
game.run();