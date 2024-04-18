'use strict';

// console.log(document.querySelector('.message').textContent);

// Selecting and Manipulating Elements
/*
document.querySelector('.message').textContent = 
'🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling Click Events

// console.log(document.querySelector('.check'));
/*
document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
  //     document.querySelector('.message').textContent =
  // '🎉 Correct Number!';

  const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

  if(!guess){
    document.querySelector('.message').textContent = '⛔️ No Number!';
  }
});
*/

// Implementing the Game Logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
  }
  // Whaen Player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📉 Too High...' : '📈 Too Low...';
      displayMessage(guess > secretNumber ? '📉 Too High...' : '📈 Too Low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = '😢 You Lost the Game!';
      displayMessage('😢 You Lost the Game!');
    }
  }
  // // When Guess is too low
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too High...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😢 You Lost the Game!';
  //   }
  // }
  // // When Guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😢 You Lost the Game!';
  //   }
  // }
});

// Working on Again! button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});










