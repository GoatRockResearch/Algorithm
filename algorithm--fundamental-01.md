# Algorithms: Fundamentals 01


Basic constructs of programming: loops, conditionals, logic operators, (e.g., `variables`, `functions`, `for loops`, `while loops`, `conditional` (if / else) statements, `console.log`, `return values`, `math.random`, `math.floor`, `math.ceil`, `&& || !` (and, or, not), `% (modulus)`) and a few techniques.

`For` Loops:
```
    for (INITIALIZATION; TEST; INCREMENT/DECREMENT)
        {
            // body of the loop -- run repeatedly while TEST is true
            // INIT.   TEST?-BODY-INCREMENT.   TEST?-BODY-INCREMENT.   TEST?-[exit]
        }
```

`Conditional` (if / else) statements:
```
    if (CONDITION_1 && CONDITION_2)
        {
            // body of the ‘if’ statement -- only runs if CONDITION_1 is true AND CONDITION_2 is true
        }
    else
        {
            // body of the ‘else’ statement -- only runs if CONDITION_1 is false or CONDITION_2 is false
        }
```

`Functions`:
```
    //  Declaring standalone functions
        function MY_FUNCTION(PARAMETER_1, PARAMETER_2)
            {
                // body of the function -- only runs if function is invoked
            }        


    //  Calling standalone functions. ARGUMENTS passed by a caller enter the function as PARAMETERS
        MY_FUNCTION(ARGUMENT_1, ARGUMENT_2);
```

=====

## Fundamentals Set #1

### Print 1-255

Print all the integers from 1 to 255.

```
    function print1to255(){
            var num = 1;
            while (num <= 255) {
                console.log(num);
                num = num + 1;
        }
    }
```


### Print Sum 0-255

Print integers from 0 to 255, and the sum so far.

```
    function printSum1to255(){
        var sum = 0;
        for (var num = 0; num <= 255; num++){
            sum += num;
            console.log(`New number:`, num, `Sum:`, sum);
        }
    }
```

### Find Max

Print the largest element in a given array.

```
    function printArrayMax(arr){
        if (arr.length == 0){
            console.log(`Empty array, no max value.`);
            return;
        }
        var max = arr[0];
        for (var idx = 1; idx < arr.length; idx++){
            if (arr[idx] > max) {
                max = arr[idx];
            }
        }
        console.log(`Max value is:`, max);
    }
```

### Print Odds 1-255

Print all odd integers from 1 to 255.

```
    function printOdds1to255(){
        var num = 1;
        while (num <= 255){
            console.log(num);
            num = num + 2;
        }
    }
```

### Iterate Array

Print all values in a given array.

```
    function printArrayValues(arr){
        for (var index = 0;index < arr.length;index++){
            console.log(`array[`, index,`] is equal to`, arr[index]);
        }
    }
```

### Get Average

Analyze an array's values and print the average.

```
    function printArrayAverage(arr){
        if (arr.length == 0) {
            console.log(`Null arr, no average val`);
            return;
        }
        var sum = arr[0];
        for (var idx = 1; idx < arr.length; idx++) {
            sum += arr[idx];
        }
        console.log(`Average value is:`, sum / arr.length);
    }
```

<!--L|5-->
