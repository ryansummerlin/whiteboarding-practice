// Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise.
// For an array to have symmetry, it should be the same forwards and backwards.

// TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

function hasSymmetry(array) {
    for (let i = 0; i < array.length / 2; i++) {
        if (!(array[i] === array[array.length - 1 - i])) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}


// This should have time complexity O(n) due to the for loop. However, I think keeping the max value of the for loop at array.length means
// you end up testing the symmetry twice. I think you can stop in the middle, and so using array.length / 2 might cut time complexity in half.

hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false
