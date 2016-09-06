# Algorithms: Basic 13

## Log 07

Write a function that would return an array of all the odd numbers between 1 to 50 (e.g. `[1,3,5, .... , 47,49]`).

```
    function oddNumbers() {
        var arr = [];
        for(var x = 1; x < 50; x++){
           if(x % 2 === 1){
               arr.push(x);
           }
        }
        return arr;
    }
```

<!--L|5-->
