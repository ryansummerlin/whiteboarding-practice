// Write a function threeInARow(arr) that takes in an array of numbers and returns true if
// the array contains 3 of the same number consecutively. The function should return false otherwise.


const threeInARow = function(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            console.log(true);
            return true;
        }
    }

    console.log(false);
    return false;
}


threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
threeInARow([10, 9, 20, 33, 3, 3]);  // => false;
