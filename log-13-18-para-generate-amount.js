
//  Algorithm: Basic 13-17

//  Implement a f(x) `generateCoinChange()` that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins.

// Start w/ largest, work down, e.g., dollars, quarters, dimes, nickels, pennies;
// Optimal solution uses `%` and `/`

function generateCoinChange(amount) {
    console.log('%d cents is:', amount);
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

    console.log('%d dollars',  numDollars);
    console.log('%d quarters', numQuarters);
    console.log('%d dimes',    numDimes);
    console.log('%d nickels',  numNickels);
    console.log('%d pennies',  numPennies);
}

//  L|5
