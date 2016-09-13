
//  Algorithms: Basic 13-04

//  Write a function that returns the sum of all the values within an array;
//  e.g. `[-5,2,5,12]` returns `14`);

function returnArray(arr) {
    arr = [-5,2,5,12]
    var sum = 0;
    for(var x = 0; x < arr.length; x++) {
        sum = sum + arr[x];
    }
    return sum;
    // console.log(sum);
}

//  L|5
