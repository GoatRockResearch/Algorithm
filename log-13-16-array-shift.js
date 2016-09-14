
//  Algorithm: Fundamental 13-16

//  Write a f(x) that shifts all values in an array forward, dropping the first value and leaving an extra '`0`' value at the end;

function arrayShift(arr) {
    arr = [5,1,1,7]
    for (var x = 1; x < arr.length; x++) {
        arr[x - 1] = arr[x];
    }
    arr[arr.length - 1] = 0;
    return arr;
    // console.log(arr);
}

//  L|5
