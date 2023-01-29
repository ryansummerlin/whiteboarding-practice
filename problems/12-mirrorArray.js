// Write a function mirrorArray(array) that takes in an array as an argument and returns a
// new array "mirrored" as shown in the examples:


function mirrorArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        array.push(array[i]);
    }

    console.log(array);
    return array;
}

mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
