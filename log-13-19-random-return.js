
//  Algorithm: Basic 13-19

//  Implement f(x) [‘dice’] that randomly return ints between 1 and 6 inclusive;
//  Initiate random f(x), tracking stats until double random numbers are rolled;
//  Display number of rolls, min, max, average;

//  Get num from 0 to "almost 1";
//  Make it from 0 to "almost 6";
//  Drop the decimal to make [0,1,2,3,4,5];
//  Add 1: [1,2,3,4,5,6]

function rollDie() {
    var rand = Math.random() * 6;
    rand = Math.floor(rand) + 1;
    return rand;
}

function randomReturn(){
    var minRoll = 12;
    var maxRoll = 2;
    var sum = 0;
    var numRolls = 0;
    var die1, die2;
    do {
        die1 = rollDie();
        die2 = rollDie();
        var total = die1 + die2;

        if(minRoll > total) {
            minRoll = total;
        }
        if(maxRoll < total) {
            maxRoll = total;
        }
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

//  L|5
