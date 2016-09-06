# Algorithms: Basic 13

## Log 05

Given an array with multiple values, write a function that returns the maximum number in the array (e.g. for `[-3,3,5,7]` max is `7`).

```

    function findMax(arr) {
        var max = arr[0];
        for(var x = 0; x < arr.length; x++){
            if(max < arr[x]){
                max = arr[x]
            }
        }
        return max;
    }

```

<!--L|5-->
