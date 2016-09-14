
//  Algorithms: Basic 13-10

//  Write a f(x) that replaces any negative numbers within the array with the value of 0;
//  When the program is done the array should contain no negative values. (e.g. `[1,5,10,-2]` will become `[1,5,10,0]`);

function noNeg(arr) {
    arr = [-1,-1,-7,117]
    for(var x = 0; x < arr.length; x++){
        if(arr[x] < 0){
            arr[x] = 0;
        }
    }
    return arr;
    // console.log(arr);
}

//  L|5
