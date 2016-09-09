
//  Algorithms: Basic 13-08

//  Given value of Y, write a function that takes an array and returns the number of values that are greater than Y (e.g. if `arr = [1, 3, 5, 7]` and `Y = 3`, your function will return `2`).

function greaterY(arr, Y) {
    var count = 0;
    for(var x = 0; x < arr.length; x++){
        if(arr[x] > Y){
            count++;
        }
    }
    return count;
}

//  L|5
