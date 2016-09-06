# Algorithms: Basic 13

## Log 13

Write a function that takes an array of numbers and replaces any negative values within the array with the string `'Text'`.

```
    function numToStr(arr) {
        for(var x = 0; x < arr.length; x++){
            if(arr[x] < 0){
                arr[x] = "Text";
            }
        }
        return arr;
    }
```

<!--L|5-->
