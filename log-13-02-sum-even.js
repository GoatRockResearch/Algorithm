
//  Algorithms: Basic 13-02

//  Write a f(x) that sums all the even numbers from 1 to x;

function sumEven() {
    var sum = 0;
    for(var x = 1; x < 1001; x++) {
       if(x % 2 === 0){
           sum += x;
       }
    }
    return sum;
    // console.log(sum);
}

//  L|5
