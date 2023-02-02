// Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

const countAdjacentSums = function(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// Time complexity O(n). You have to loop through each pair of adjacent numbers in the loop (so loop through the entire array basically). I don't think this
// can be optimized any further.

countAdjacentSums([1, 5, 1], 6) // => 2
countAdjacentSums([7, 2, 4, 6], 7) // => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3
