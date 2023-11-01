#Testing Code

## Getting Started & Run tests

1. install node modules

```bash
$ yarn install
```

2. To run unit tests

```bash
$ yarn test
```

3. To run unit tests for problem 1

```bash
$ yarn test:problem1
```

4. To run unit tests for problem 2

```bash
$ yarn test:problem2
```

## About Problem 1

### Solution explanation

I decided to address it with a hash table where I put all the existing integers in the range of 1 to numbers.length as keys and as value a boolean to indicate if the number is in the array or not. In the same loop, I also turned on the flag in the map of the number that was in the numbers\[i\] position. It allows me to avoid a second loop to turn on the numbers that exists in the array.
Then I did a loop of the mapOfNumbers keys to filter and parce into int the elements in the map that were turned off. I put those elements in the output array.

### Big O Notation

This algoritm has a Big O(n) - linear complexity

## About Problem 2

### Solution explanation

I had to create two nested loops because I needed to compare every element with all the other elements in the array. Given the premise that only one valid answer exists, I included break conditions to stop the loops when the couple of numbers were found

### Big O Notation

This algorithm has a Big O(n^2) - quadratic time-complexity.
