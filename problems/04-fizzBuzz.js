// Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is
// divisible by either 3 or 5, but not both.

// First question would be if the max is inclusive or exclusive. For this problem I'm going to treat it as exclusive
// based on the example given.

const fizzBuzz = function(max) {
    let fizz = [];

    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            fizz.push(i);
        }
    }

    return fizz;
}

// Time complexity O(n), space complexity O(n). I don't think I can optimize this any more. You have to cycle through
// all numbers below max and store everything in an array.


console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]
