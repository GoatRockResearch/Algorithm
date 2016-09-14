
//  Algorithms: Basic 13-08

//  Write a f(x) that takes an array and returns the number of values that are greater than Y;
//  e.g. if `arr = [1, 3, 5, 7]` and `Y = 3`, your function will return `2`;

function arrayGreater(arr, y) {
    arr = [1,3,5,7]
    var y = 3
    var count = 0;
    for(var x = 0; x < arr.length; x++){
        if(arr[x] > y){
            count++;
        }
    }
    console.log(count, 'values greater than', y);
}

//  L|5
