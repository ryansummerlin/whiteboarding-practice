// Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments.
// It should return the index value of the target if it is present in the array or -1 if it is not present.

// CONSTRAINT: Do not use the indexOf or includes method

function myIndexOf(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            console.log(i);
            return i;
        }
    }

    console.log(-1);
    return -1;
}


// This is O(n) time complexity and O(1) space complexity. You have to loop through the
// entire array (or until you hit the target) but the number of values you keep in memory
// stays the same regardless of the length of the array. I don't think you can optimize this
// any further.



myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1
