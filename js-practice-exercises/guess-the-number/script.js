let randomNumber = generateRandomNumber(); // Initial random number
let guessCount = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    guessCount++;

    if (guess === randomNumber) {
        document.getElementById('result').textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${guessCount} attempts. Score: ${100 - guessCount}`;
        document.getElementById('guessInput').setAttribute('disabled', 'true');
        document.querySelector('button').setAttribute('disabled', 'true');
    } else if (guess < randomNumber) {
        document.getElementById('result').textContent = `Try a higher number than ${guess}.`;
    } else {
        document.getElementById('result').textContent = `Try a lower number than ${guess}.`;
    }
}
