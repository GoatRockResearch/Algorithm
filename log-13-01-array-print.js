
//  Algorithm: Basic 13-01

//  Write a f(x) that returns an array with all the numbers from 1 to 255;

// Method A:
function printArrayA() {
    var arr = [];
    for(var x = 1; x < 256; x++){
        arr.push(x);
    }
    return arr;
    // console.log(arr);
}

// Method B:
function printArrayB() {
    var num = 1;
    while (num <= 256) {
        console.log(num);
        num = num + 1;
    }
}

//  L|5
