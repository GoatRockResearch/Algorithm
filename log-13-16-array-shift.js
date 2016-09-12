
//  Algorithm: Fundamental 13-16

//  Given an array, shift all values forward, dropping the first value and leaving an extra '`0`' value at the end.

function arrShift(arr) {
    for (var x = 1; x < arr.length; x++) {
        arr[x - 1] = arr[x];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

//  L|5
