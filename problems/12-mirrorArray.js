// Write a function mirrorArray(array) that takes in an array as an argument and returns a
// new array "mirrored" as shown in the examples:


function mirrorArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        array.push(array[i]);
    }

    console.log(array);
    return array;
}

// This should be O(n) for both time and space complexity. You have to loop through the the length
// of the orignal array and create n new memory slots in the array where n is the original length of
// the array. I don't think you can optimize this any further.

mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
