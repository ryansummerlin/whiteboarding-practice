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


console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]
