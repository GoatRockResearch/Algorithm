
//  Algorithms: Basic 13-06

//  Given an array with multiple values, write a function that returns the average of the values in the array (e.g. for `[1,3,5,7,20]` average is `7.2`).

//  Method A
function findAvg(arr) {
    var sum = 0;
    for(var x = 0; x < arr.length; x++){
        sum = sum + arr[x];
    }
    return sum / arr.length;
}

//  Method B
function arrayAvg(arr) {
    if (arr.length == 0) {
        console.log(`Null array, no average value.`);
        return;
    }
    var sum = arr[0];
    for (var x = 1; x < arr.length; x++) {
        sum += arr[x];
    }
    console.log(`Average value is:`, sum / arr.length);
}

//  L|5
