// Write a function twoDiff(array), given an array of numbers, return a 2-D array, where each of the sub array are indices
// of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

// NOTE: The pairs are unique. HINT: Account for negative difference too!

const twoDiff = function(array) {
    let pairs = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Math.abs(array[i] - array[j]) === 2) {
                pairs.push([i, j]);
            }
        }
    }

    console.log(pairs);
    return pairs;
}




twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
twoDiff([])  // => []
