// Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

const oddRange = function(end) {
    let oddNums = [];

    for (let i = 1; i <= end; i += 2) {
        oddNums.push(i);
    }

    return oddNums;
}

// This is time and space complexity O(n). The for loop keeps going as long as end
// and the oddNums array needs n slots to store the odd values.

console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]
