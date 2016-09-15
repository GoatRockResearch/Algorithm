
#   Algorithm: py Basic 13-02

#   Write a f(x) that prints ints 0-255 and sum thereof;

def printNumSum():
    sum = 0
    for x in range(0,256):
        sum += x
        print "Num: {} and the Sum: {}".format(x, sum)

#   L|5
