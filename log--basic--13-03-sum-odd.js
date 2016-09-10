
//  Algorithms: Basic 13-03

//  Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. `1+3+5+...+4997+4999`).

//  Method A
function sum_odd_5000() {
    var sum = 0;
    for(var x = 1; x < 5000; x++){
       if(x % 2 === 1){
           sum = sum + x;
       }
    }
    return sum;
}

//  Method B
function sum_odd_255(){
    var sum = 0;
    while (sum <= 256){
        console.log(sum);
        sum = sum + 2;
    }
}

//  L|5
