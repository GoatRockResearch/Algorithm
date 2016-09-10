
//  Algorithms: Basic 13-08

//  Given value of Y, write a function that takes an array and returns the number of values that are greater than Y (e.g. if `arr = [1, 3, 5, 7]` and `Y = 3`, your function will return `2`).

//  Method A
function greaterY(arr, Y) {
    var count = 0;
    for(var x = 0; x < arr.length; x++){
        if(arr[x] > Y){
            count++;
        }
    }
    return count;
}

// Method B
function numGreater(arr, y){
    var count = 0;
    for (var x = 0; x < arr.length; x++) {
            if (arr[x] > y) {
            count++;
        }
    }
    console.log("%d values greater than %d", count, y);
}

//  L|5
