
//  Algorithm: Basic 13-17

//  Implement a f(x) that adds all values from an optional parameter (default: `100`) to another optional parameter (default: `4000000`);
//  that are divisible by 3 or 5 but not both.

function optPara(startVal, endVal) {
    var result = 0;
    var startVal = 100;
    var endVal = 4000000;
    for (var count = startVal; count <= endVal; count++) {
        if ((count % 3 == 0) || (count % 5 == 0)) {
            if ((count % 3 == 0) && (count % 5 == 0)) {
                continue;
            }
            result += count;
        }
    }
    //console.log('The 3 & 5 sum [ `%d` - `%d` ] is `%d`', startVal, endVal, result);
    console.log('Sum of Optional Parameters [%d] and [%d] divisible by 3 or 5 but not both: %d', startVal, endVal, result);
}

//  L|5
