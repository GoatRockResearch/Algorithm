
//  Algorithms: Basic 13-04

//  Write a function that returns the sum of all the values within an array (e.g. `[1,2,5]` returns `8`, `[-5,2,5,12]` returns `14`).

function iterArr(arr) {
    var sum = 0;
    for(var x = 0; x < arr.length; x++) {
        sum = sum + arr[x];
    }
    return sum;
}

//  L|5
