// Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num.
// It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

// CONSTRAINT: Use only while loops. No for loops.

const pairProduct = function(arr, num) {
    let i = 0;
    let j;
    let pairs = [];
    while (i < arr.length) {
        j = i + 1;
        while (j < arr.length) {
            if ((arr[i] * arr[j]) === num) {
                pairs.push([i, j]);
            }
            j++;
        }
        i++;
    }

    console.log(pairs);
    return pairs;
}



pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]
