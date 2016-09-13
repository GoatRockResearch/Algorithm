
//  Algorithms: Basic 13-06

//  Write a function that returns the average of the values in an array;
//  e.g. for `[1,3,5,7,20]` average is `7.2`;

function arrayAvgA(arr) {
    arr = [1,3,5,7,20]
    var sum = 0;
    for(var x = 0; x < arr.length; x++){
        sum = sum + arr[x];
    }
    return sum / arr.length;
    // console.log(`Average value is:`, sum / arr.length);
}

//  L|5
