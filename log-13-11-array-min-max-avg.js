
//  Algorithms: Basic 13-11

//  Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array (e.g. `[1,5,10,-2]` will return `[10,-2,3.5]`).

function maxMinAvg(arr) {
    var sum = arr[0];
    var max = arr[0];
    var min = arr[0];
    for(var x = 1; x < arr.length; x++){
        if(arr[x] > max){
            max = arr[x];
        }
        if(arr[x] < min){
            min = arr[x]
        }
        sum = sum + arr[x];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew;
}

//  L|5
