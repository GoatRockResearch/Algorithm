
//  Algorithms: Basic 13-13

//  Write a f(x) that replaces negative values within an array with a `'String'`;
//  e.g., `arr = [-1,-3,2]` returns `['String','String',2]`;

function numToStr(arr) {
    arr = [-1,1,1,7]
    for(var x = 0; x < arr.length; x++){
        if(arr[x] < 0){
            arr[x] = 'Master Chief';
        }
    }
    return arr;
    // console.log(arr);
}

//  L|5
