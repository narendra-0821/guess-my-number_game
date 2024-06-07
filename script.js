'use strict';
var scores = 20;
var highscores = 0;
var secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretnumber;
document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = ' green';
    document.querySelector('.number').style.width = '30rem';
    if (scores > highscores) {
      highscores = scores;
      document.querySelector('.highscore').textContent = highscores;
    }
  } else if (guess > secretnumber) {
    if (scores >= 1) {
      document.querySelector('.message').textContent = ' Too High';
      scores--;
      document.querySelector('.score').textContent = scores;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
    }
  } else if (guess < secretnumber) {
    if (scores >= 1) {
      document.querySelector('.message').textContent = 'Too Low';
      scores--;
      document.querySelector('.score').textContent = scores;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  scores = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = scores;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
