
//  Algorithms: Basic 13-03

//  Write a function that returns the sum of all the odd numbers from 1 to 5000;
//  e.g. `1+3+5 ... 4999`;

//  Method A:
function sumOdd5000A() {
    var sum = 0;
    for(var x = 1; x < 5000; x++){
       if(x % 2 === 1){
           sum = sum + x;
       }
    }
    return sum;
    // console.log(sum);
}

//  L|5
