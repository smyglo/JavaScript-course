'use strict';

// DOM (Document Object Model) manipulation

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct number 🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 69;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log('Initial', secretNumber, typeof secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log('Initial', guess, typeof guess);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number❗';

    // User wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    // Number higher than secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💀 You lost 💀';
    } // Number lower than secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💀 You lost 💀';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  console.log('Reset', secretNumber, typeof secretNumber);
});

// console.log(document.querySelector('.score').textContent);

// Coding challange

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:

// 1. Select the element with the 'again' class and attach a click event handler

// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables

// 3. Restore the initial conditions of the message, number, score and guess input
// fields

// 4. Also restore the original background color (#222) and number width (15rem)
