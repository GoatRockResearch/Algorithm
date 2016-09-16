
#   Algorithm: py Basic 13-02

#   Write a f(x) that prints ints 0-255 and sum thereof;

def printMax(numList):
    max = numList[0]
    for idx in range(1, len(numList)):
        if numList[idx] > max:
            max = numList[idx]
    return max
#   L|5
