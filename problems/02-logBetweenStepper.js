// Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters.
// The function should return an array of numbers between min and max at step intervals.

function logBetweenStepper(min, max, step) {
    let arr = [];

    while (min <= max) {
        arr.push(min);
        min += step;
    }

    return arr;
}

// This should be time and space complexity O(n). You loop through the length of the distance between
// min and max (divided by step) and need a variable in the array to store each value. I don't think this
// can be optimized any further.


console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]
