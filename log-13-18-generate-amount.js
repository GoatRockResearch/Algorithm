
//  Algorithm: Basic 13-18

//  Implement a f(x) that accepts a parameter for the number of cents that returns smallest amount of coins.

function genAmount(amount) {
    console.log('%d cents reduces to:', amount);
    var numDollars = 0;
    var numQuarters = 0;
    var numDimes = 0;
    var numNickels = 0;
    var numPennies = 0;

    while (amount >= 100) {
        numDollars++;
        amount -= 100;
    }
    while (amount >= 25) {
        numQuarters++;
        amount -= 25;
    }
    while (amount >= 10) {
        numDimes++;
        amount -= 10;
    }
    while (amount >= 5) {
        numNickels++;
        amount -= 5;
    }
    while (amount >= 1) {
        numPennies++;
        amount -= 1;
    }
    console.log('%d dollars; %d quarters; %d dimes; %nickels; %d pennies', numDollars, numQuarters, numDimes, numNickels, numPennies);
}

//  L|5
