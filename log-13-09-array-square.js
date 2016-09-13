
//  Algorithms: Basic 13-09

//  Write a function that replaces each value in an array with the product of the original value squared by itself;
//  (e.g. `[1,5,10,-2]` will become `[1,25,100,4]`).

function squareVal(arr) {
    arr =  [1,1,117]
    for(var x = 0; x < arr.length; x++){
        arr[x] = arr[x] * arr[x];
    }
    return arr;
    // console.log(arr);
}

//  L|5
