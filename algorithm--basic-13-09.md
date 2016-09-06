# Algorithms: Basic 13

## Log 09

Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself (e.g. `[1,5,10,-2]` will become `[1,25,100,4]`).

```
    function squareVal(arr) {
        for(var x = 0; x < arr.length; x++){
            arr[x] = arr[x] * arr[x];
        }
        return arr;
    }
```

<!--L|5-->
