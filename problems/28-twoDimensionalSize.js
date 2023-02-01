// Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function
// should return the total number of elements in the 2D-array.


function twoDimensionalSize(array) {
    let size = 0;
    array.forEach(el => size += el.length);

    console.log(size);
    return size;
}

// This should be time complexity O(n). You have to loop through all of the array elements
// but grabbing the length of each array should be an O(1) operation. I don't think there's any way
// to optimize this further.



const arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
twoDimensionalSize(arr1);  // => 9

const arr2 = [
['a'],
['b', 'c', 'd', 'e']
];
twoDimensionalSize(arr2);  // => 5
