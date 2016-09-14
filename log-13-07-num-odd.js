
//  Algorithms: Basic 13-07

//  Write a f(x) that returns all the odd numbers between 1 to 117;
//  e.g. `[1,3,5, .... , 47,49]`;

//  Method A:
function numOddA() {
    var arr = [];
    for(var x = 1; x < 118; x++){
       if(x % 2 === 1) {
           arr.push(x);
       }
    }
    return arr;
    // console.log(arr);
}

//  Method B:
function numOddB() {
    var arr = [];
    for (var x = 1; x <= 118; x += 2) {
        arr.push(x);
    }
    return arr;
    // console.log(arr);
}

//  L|5
