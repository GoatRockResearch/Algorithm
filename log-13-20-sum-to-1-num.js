
//  Algorithm: Basic 13-20

//  Implement a f(x) that sums a number until the sum is one digit;

//  Method A
    function sumToOneA(num) {
        if (num < 1) {
            return 0;
        }
        num = Math.floor(num);
        while (num >= 10) {
            while (num) {
                var digitSum;
                var onesDigit = num % 10;
                num -= onesDigit;
                num /= 10;
                digitSum += onesDigit;
            }
            num = digitSum;
        }
        return num;
        // console.log(num);
    }

//  Method B

    function sumToOneB(num) {
        if (num < 1) return 0;
        return (num - 1) % 9 + 1;
    }

//  L|5
