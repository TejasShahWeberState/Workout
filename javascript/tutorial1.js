var message = 'Hello, please state your name!';
var name = prompt(message, '');
//document.write("<h2>" + "Hello " + name + "! Ready to guess some numbers?");
//document.getElementByI("name3").innerHTML = document.write("Hello " + name + "! Ready to guess some numbers?");

wonNumber = 0;
lossNumber = 0;
let theNumber = 0;
let guessNumber = 0;

function initialize () {
  // random number 1-100
   theNumber = Math.floor(Math.random() * 100) + 1

  document.thePicture.src = 'img/guess.jpg';
  document.getElementById('anotherRound').disabled = true;
  document.getElementById('name2').innerHTML = '';
  guessNumber = 0;
  // set userGuess to zero on game load and reset
  document.guessForm.userGuess.value = guessNumber;
  document.getElementById('guessNumber').value = 0;
  document.getElementById('aGuess').disabled = false;

  document.guessForm.userInput.focus();
  document.guessForm.userInput.select();
}

function checkGuess () {
  var userGuess = eval(document.guessForm.userGuess.value);

  while (guessNumber < 11) {
    if (theNumber === userGuess && guessNumber <= 3) {
      document.thePicture.src = 'img/win.jpg';
      guessNumber++;
      wonNumber++;
      document.getElementById('guessNumber').stepUp(1);
      document.getElementById('wonNumber').stepUp(1);
      document.getElementById('name2').innerHTML = '<h3>' + name + ', you got the correct number after ' +
        guessNumber + ' guesses. You are a great guesser.';
      document.getElementById('aGuess').disabled = true;
      document.getElementById('anotherRound').disabled = false;

    } else if (theNumber === userGuess && (guessNumber < 6 && guessNumber >= 4)) {
      document.thePicture.src = 'img/win.jpg';
      guessNumber++;
      wonNumber++;
      document.getElementById('guessNumber').stepUp(1);
      document.getElementById('wonNumber').stepUp(1);
      document.getElementById('name2').innerHTML = '<h3>' + name + ', you got the correct number after ' +
        guessNumber + ' guesses. You did wonderful.';
      document.getElementById('aGuess').disabled = true;
      document.getElementById('anotherRound').disabled = false;

    } else if (theNumber === userGuess && (guessNumber <= 10 && guessNumber >= 7)) {
      document.thePicture.src = 'img/win.jpg';
      guessNumber++;
      wonNumber++;
      document.getElementById('guessNumber').stepUp(1);
      document.getElementById('wonNumber').stepUp(1);
      document.getElementById('name2').innerHTML = '<h3>' + name + ', you got the correct number after ' +
        guessNumber + ' guesses. It took you an expected amount of tries.';
      document.getElementById('aGuess').disabled = true;
      document.getElementById('anotherRound').disabled = false;

    } else {
      if (userGuess > theNumber) {
        document.guessForm.thePicture.src = 'img/down.jpg';
        guessNumber++;
        document.getElementById('guessNumber').stepUp(1);
        document.getElementById('name2').innerHTML = '<h3>' + name + ', you guessed too high. Go lower!';
        document.getElementById('anotherRound').disabled = true;

      } else if (userGuess < theNumber) {
        document.guessForm.thePicture.src = 'img/up.jpg';
        guessNumber++;
        document.getElementById('guessNumber').stepUp(1);
        document.getElementById('name2').innerHTML = '<h3>' + name + ', you guessed too low. Go higher!';
        document.getElementById('anotherRound').disabled = true;
      }
      // document.guessForm.userInput.focus();
    }
    document.guessForm.userInput.focus();
  }
  document.getElementById('guessNumber').disabled= true;
  lossNumber++;
  document.getElementById('lostNumber').stepUp(1);
  document.getElementById('name2').innerHTML = '<h3>' + name + ', you did not get the number correct.\
        The correct answer is ' + theNumber;
  document.getElementById('aGuess').disabled = true;
  document.getElementById('anotherRound').disabled = false;

}

function playAnotherRound () {
  initialize();
  document.getElementById('name2').innerHTML = ''
}

function stopInterval () {
  document.getElementById('name2').innerHTML = '';
  document.thePicture.src = 'img/guess.jpg';
  initialize();
  document.getElementById('aGuess').disabled = false;

}
