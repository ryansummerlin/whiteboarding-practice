// Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

const maxValue = function(array) {
    if (array.length < 1) {
        return null;
    }

    let max = array[0];

    array.forEach(el => {
        if (el > max) {
            max = el;
        }
    });

    return max;
}

// This should be time complexity O(n) and space complexity O(1). I don't think there's
// any way to optimize further because you have to cycle through the entire array to compare
// each value to the current max.

console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43
