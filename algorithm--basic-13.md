# Algorithms: Basic 13

## Log 13-01

Write a function that returns an array with all the numbers from 1 to 255.

```
    function get_array() {
        var arr = [];
        for(var x = 1; x < 256; x++){
            arr.push(x);
        }
        return arr;
    }
```

## Log 13-02

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

## Log 13-03

Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. `1+3+5+...+4997+4999`).

```
    function sum_odd_5000() {
        var sum = 0;
        for(var x = 1; x < 5000; x++){
           if(x % 2 === 1){
               sum = sum + x;
           }
        }
        return sum;
    }
```

## Log 13-04

Write a function that returns the sum of all the values within an array (e.g. `[1,2,5]` returns `8`, `[-5,2,5,12]` returns `14`).

```
    function iterArr(arr) {
        var sum = 0;
        for(var x = 0; x < arr.length; x++){
            sum = sum + arr[x];
        }
        return sum;
    }
```

## Log 13-05

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

## Log 13-06

Given an array with multiple values, write a function that returns the average of the values in the array (e.g. for `[1,3,5,7,20]` average is `7.2`).

```

    function findAvg(arr) {
        var sum = 0;
        for(var x = 0; x < arr.length; x++){
            sum = sum + arr[x];
        }
        return sum / arr.length;
    }

```

## Log 13-07

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

## Log 13-08

Given value of Y, write a function that takes an array and returns the number of values that are greater than Y (e.g. if `arr = [1, 3, 5, 7]` and `Y = 3`, your function will return `2`).

```
    function greaterY(arr, Y) {
        var count = 0;
        for(var x = 0; x < arr.length; x++){
            if(arr[x] > Y){
                count++;
            }
        }
        return count;
    }
```

## Log 13-09

Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself (e.g. `[1,5,10,-2]` will become `[1,25,100,4]`).

```
    function squareVal(arr) {
        for(var x = 0; x < arr.length; x++){
            arr[x] = arr[x] * arr[x];
        }
        return arr;
    }
```

## Log 13-10

Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. `[1,5,10,-2]` will become `[1,5,10,0]`).

```
    function noNeg(arr) {
        for(var x = 0; x < arr.length; x++){
            if(arr[x] < 0){
                arr[x] = 0;
            }
        }
        return arr;
    }
```

## Log 13-11

Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array (e.g. `[1,5,10,-2]` will return `[10,-2,3.5]`).

```
    function maxMinAvg(arr) {
        var sum = arr[0];
        var max = arr[0];
        var min = arr[0];
        for(var x = 1; x < arr.length; x++){
            if(arr[x] > max){
                max = arr[x];
            }
            if(arr[x] < min){
                min = arr[x]
            }
            sum = sum + arr[x];
        }
        var avg = sum / arr.length;
        var arrnew = [max, min, avg];
        return arrnew;
    }
```

## Log 13-12

Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2 (e.g. `[1,5,10,-2]` will become `[-2,5,10,1]`).

```
    function swap(arr) {
        var temp = arr[0]; // temp = 1
        arr[0] = arr[arr.length - 1]; // arr[0] = -2
        arr[arr.length - 1] = temp; // arr[3] = -2
        return arr;
    }
```

## Log 13-13

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

<!---L|5-->
