// Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should
// return an array of all the pairs of indices, whose elements sum to a multiple of three.

const divisibleByThreePairSum = function(array) {
    let pairs = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                pairs.push([i, j]);
            }
        }
    }

    console.log(pairs);
    return pairs;
}

// I think this is time complexity O(n^2) because of the nested for loop. I don't think you can optimize
// any further because you have to loop through the all possible pairs of numbers in the array.

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]]
