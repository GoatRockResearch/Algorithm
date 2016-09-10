
//  Algorithms: Basic 13-07

//  Write a function that would return an array of all the odd numbers between 1 to 50 (e.g. `[1,3,5, .... , 47,49]`).

//  Method A
function oddNumbers() {
    var arr = [];
    for(var x = 1; x < 50; x++){
       if(x % 2 === 1){
           arr.push(x);
       }
    }
    return arr;
}

//  Method B
function oddArray() {
    var oddArray = [];
    for (var x = 1; x <= 255; x += 2) {
        oddArray.push(x);
    }
    return oddArray;
}

//  L|5
