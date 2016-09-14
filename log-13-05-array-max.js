
//  Algorithms: Basic 13-05

//  Write a f(x) that returns the maximum number in an array;
//  e.g. for `[-3,3,5,7]` max is `7`;

function arrayMax(arr) {
    arr = [-3,3,5,7]
    var max = arr[0];
    for(var x = 0; x < arr.length; x++){
        if(max < arr[x]){
            max = arr[x]
        }
    }
    return max;
    // console.log(`Max value:`, max);
}

//  L|5
