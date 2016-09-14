
//  Algorithms: Basic 13-12

//  Write a f(x) that will swap the first and last values of any given array;
//  The default minimum length of the array is `2`;
//  e.g. `[1,5,10,-2]` will become `[-2,5,10,1]`;

function arraySwap(arr) {
    arr = [1,1,7,117]
    var temp = arr[0]; // temp = 1
    arr[0] = arr[arr.length - 1]; // arr[0] = -2
    arr[arr.length - 1] = temp; // arr[3] = -2
    return arr;
    // console.log(arr);
}

//  L|5
