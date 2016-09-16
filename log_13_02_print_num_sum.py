from __future__ import print_function

#   Algorithm: py Basic 13-02

#   Write a f(x) that prints ints 0-255 and sum thereof;

def printNumSum():
    sum = 0
    for num in range(0,256):
        sum += num
        print ('Num: {} and the Sum: {}' .format(num, sum))
printNumSum()

#   L|5
