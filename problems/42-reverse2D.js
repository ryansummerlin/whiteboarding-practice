// Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

const reverse2DOld = function(array) {
    let reversed = '';
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = array[i].length - 1; j >= 0; j--) {
            reversed += array[i][j];
        }
    }

    console.log(reversed);
    return reversed;
}

// As it's currently written, this function comes out to O(n^2) time complexity. You have to loop through i arrays, and loop through j values in each
// nested array. In terms of optimization, I think you could potentially reverse each of the nested arrays and join them to avoid going into the weeds
// of each element inside the nested array but that assumes that the reverse and join functions are O(1) and not O(n). I'm not totally sure that's true,
// reverse seems to me like an O(n) complexity function but I'll go ahead and try to refactor it anyways.


const reverse2D = function(array) {
    let reversed = '';
    array.forEach(el => el = el.reverse());
    for (let i = array.length - 1; i >= 0; i--) {
        reversed += array[i].join('');
    }

    console.log(reversed);
    return reversed;
}


const arr1 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
  ];

  reverse2D(arr1) // => 'ihgfedcba'
  const arr2 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
  ];
  reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'
