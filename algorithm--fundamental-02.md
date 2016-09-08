# Algorithms: Fundamentals 02

## Set 01

### Threes and Fives

Implement a f(x) `threesAndFives()` that adds all values from an optional parameter (default: `100`) to another optional parameter (default: `4000000`) that are divisible by 3 or 5 but not both.

```
    function threeAndFive(startVal, endVal) {
        var result = 0;
        if (startVal === undefined) {
            startVal = 100;
        }
        if (endVal === undefined) {
            endVal = 4000000;
        }
        for (var count = startVal; count <= endVal; count++) {
            if ((count % 3 == 0) || (count % 5 == 0)) {
                if ((count % 3 == 0) && (count % 5 == 0)) {
                    continue;
                }
                result += count;
            }
        }
        console.log('The 3 & 5 sum [%d-%d] is %d', startVal, endVal, result);
    }
```


### Generate Coin Change

Implement a f(x) `generateCoinChange()` that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins.

<!---
// Start w/ largest, work down, e.g., dollars, quarters, dimes, nickels, pennies;
// Optimal solution uses `%` and `/`
-->

```
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
```

## Set 02

### Statistics to Doubles

Implement `‘dice’` that randomly return `ints` between `1` and `6` inclusive. Roll dice, tracking stats until doubles are rolled. Display number of `rolls`, `min`, `max`, and `average`.

<!---
// Get num from 0 to "almost 1". Make it
// from 0 to "almost 6". Drop the decimal to
// make [0,1,2,3,4,5]. Add 1: [1,2,3,4,5,6]
-->

```
    function rollDie() {
        var rand = Math.random() * 6;
        rand = Math.floor(rand) + 1;
        return rand;
        <!--- // return Math.floor(Math.random() * 6) + 1; -->
    }

    function statsBeforeDoubles(){
        var minRoll = 12;
        var maxRoll = 2;
        var sum = 0;
        var numRolls = 0;
        var die1, die2;
        do {
            die1 = rollDie();
            die2 = rollDie();
            var total = die1 + die2;

            if(minRoll > total) { minRoll = total; }
            if(maxRoll < total) { maxRoll = total; }
            sum += total;
            numRolls++;
        }
        while (die1 != die2);

        console.log(numRolls, 'rolls');
        console.log('Average:', sum/numRolls);
        console.log('Lowest:',  minRoll);
        console.log('Biggest:', maxRoll);
        console.log('Last:', die1, 'and', die2);
    }
```

### Sum To One Digit

Implement sumToOne(num) that sums num's digits repeatedly until the sum is one digit.

#### Alt 01

```
    function sumToOneDigit(num) {
        if (num < 1) {
            return 0;
        }
        num = Math.floor(num);
        while (num >= 10) {
            while (num) {
                var digitSum;
                var onesDigit = num % 10;
                num -= onesDigit;
                num /= 10;
                digitSum += onesDigit;
            }
            num = digitSum;
        }
        return num;
    }
```

#### Alt 02

```
    function sumTo1Pro(num) {
        if (num < 1) return 0;
        return (num - 1) % 9 + 1;
    }
```


## Set 03

### Fibonacci

Implement the a *Fibonacci* f(x) (e.g., numerical sequence in which each number is the sum of the previous two). The *Fibonacci* numbers @ `idx[0]` and `idx[1]` have values of `0` and `1` respectively.

<!---\
//  f(x) should accept an argument of which Fibonacci number.
//  fibonacci(2) = 1, fibonacci(3) = 2, fibonacci(4) = 3, fibonacci(5) = 5, etc.;
//  passed nums w/ a fractional component are ignored;
//  passed negative nums are = to 0;
-->

```
    function iFibonacci(num) {
        if (num < 1) {
            return 0;
        }
        if (num < 2) {
            return 1;
        }

        var prevNum = 0;
        var currNum = 1;
        var nextNum;
        for (var counter = 2; counter <= num; counter++) {
            nextNum = prevNum + currNum;
            prevNum = currNum;
            currNum = nextNum;
        }
        return nextNum;
    }
```

<!---L|5-->
