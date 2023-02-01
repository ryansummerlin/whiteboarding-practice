// Write a function valueConcat(array, obj) that takes in an array and object
// The function should return a new array where each element is concatenated with
// it's corresponding value from the object.


function valueConcat(array, obj) {
    let concat = array.map(el => {
        if (obj[el]) {
            return el + obj[el];
        } else {
            return el;
        }
    });

    console.log(concat);
    return concat;
}

// This should be time complexity O(n) as you loop through all the values in the array. Checking
// to see if the object has a key for the current value of the array should be an O(1) operation,
// for a total time complexity of O(n).

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]
