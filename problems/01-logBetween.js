// Define a function logBetween(lowNum, highNum) that will return an array from lowNum to
// highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

function logBetween(lowNum, highNum) {
    let arr = [];

    while(lowNum <= highNum) {
        arr.push(lowNum);
        lowNum++;
    }

    return arr;
}

// This should be time complexity O(n), with n being the distance between lowNum and highNum.
// Space complexity is going to be O(n) as well, because you need to add each value to the array

// I don't think you can really optimize this any further. The space has to be O(n) to store all of
// the values, and I don't see a way to push the value to the array without using O(n) time complexity


console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]
