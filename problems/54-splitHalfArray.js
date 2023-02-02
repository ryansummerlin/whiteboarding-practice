// Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of
// that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

const splitHalfArray = function(array) {
    let split = [];
    let midpoint = Math.round(array.length / 2);

    if (array.length % 2 === 0) {
        split.push(array.slice(0, midpoint));
    } else {
        split.push(array.slice(0, midpoint - 1));
    }

    split.push(array.slice(midpoint));

    console.log(split);
    return split;
}

splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
