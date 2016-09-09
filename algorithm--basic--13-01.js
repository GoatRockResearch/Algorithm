
//  Algorithm: Basic 13-01

//  Write a function that returns an array with all the numbers from 1 to 255.

// Method A
function get_array() {
    var arr = [];
    for(var x = 1; x < 256; x++){
        arr.push(x);
    }
    return arr;
}

// Method B
function get_array() {
    var num = 1;
    while (num <= 256) {
        console.log(num);
        num = num + 1;
    }
}

//  L|5
