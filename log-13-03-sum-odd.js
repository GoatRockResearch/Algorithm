
//  Algorithms: Basic 13-03

//  Write a f(x) that returns the sum of all the odd numbers from 1 to x;
//  e.g. `1+3+5 ... X`;

function sumOdd() {
    var sum = 0;
    for(var x = 1; x < 5000; x++) {
       if(x % 2 === 1){
           sum = sum + x;
       }
    }
    return sum;
    // console.log(sum);
}

//  L|5
