

var userChoice = prompt('Please enter Rock, Paper or Scissors.');
userChoice = userChoice.toLowerCase();

if (userChoice === 'rock' || userChoice === 'paper' 
    || userChoice === 'scissors') {
    document.write('You picked ' + userChoice + '<br />' )
} else {
    document.write('Please pick something specified.')
}

var computerPick = Math.random();
var computerChoice = 'scissors';
if (computerPick < 0.34) {
    computerChoice = 'rock';
} else if (computerPick <= 0.66 ) {
    computerChoice = 'paper';
} 

document.write('The computer picked: ' + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return 'It is a tie'

    }
    if (choice1 === 'rock') {
        if (choice2 === 'paper') {
            return 'The computer won!'
        } else {
            return 'YOU WON!!!!'
        }
    }

if (choice1 === 'paper') {
    if (choice2 === 'scissors') {
        return 'The computer won!';
    } else {
        return 'YOU WON!!!!';
    }
}

if (choice1 === 'scissors') {
    if (choice2 === 'rock') {
        return 'The computer won!';
    } else {
        return 'YOU WON!!!!';
    }
}
}

var winner = compare(userChoice, computerChoice);
document.write('<br />This means: ' + winner);