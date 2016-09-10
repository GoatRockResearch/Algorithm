
//  Algorithms: Basic 13-05

//  Given an array with multiple values, write a function that returns the maximum number in the array (e.g. for `[-3,3,5,7]` max is `7`).

//  Method A
function findMax(arr) {
    var max = arr[0];
    for(var x = 0; x < arr.length; x++){
        if(max < arr[x]){
            max = arr[x]
        }
    }
    return max;
}

//  Method B
function printMax(arr){
    if (arr.length == 0){
        console.log(`Empty array, no max value.`);
        return;
    }
    var max = arr[0];
    for (var x = 1; x < arr.length; x++){
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    console.log(`Max value is:`, max);
}

//  L|5
