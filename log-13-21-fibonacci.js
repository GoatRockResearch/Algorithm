
//  Algorithm: Basic 13-21

//  Implement a *Fibonacci* f(x) (e.g., numerical sequence in which each number is the sum of the previous two).

//  The *Fibonacci* numbers @ `idx[0]` and `idx[1]` have values of `0` and `1` respectively;
//  f(x) should accept an argument of which Fibonacci number;
//  Fibonacci(2) = 1, fibonacci(3) = 2, fibonacci(4) = 3, fibonacci(5) = 5, etc.;
//  Passed nums w/ a fractional component are ignored;
//  Passed negative nums are = to 0;

function numFib(num) {
    if (num < 1) {
        return 0;
    }
    if (num < 2) {
        return 1;
    }

    var prevNum = 0;
    var currNum = 1;
    var nextNum;
    for (var x = 2; x <= num; x++) {
        nextNum = prevNum + currNum;
        prevNum = currNum;
        currNum = nextNum;
    }
    return nextNum;
    // console.log(nextNum);
}

//  L|5
