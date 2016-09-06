# Algorithms: Basic 13

## Log 02

Write a function that would get the sum of all the even numbers from 1 to 1000.

```
    function sum_even_numbers(){
        var sum = 0;
        for(var x = 1; x < 1001; x++){
           if(x % 2 === 0){
               sum += x;
           }
        }
        return sum;
    }
```

<!--L|5-->
