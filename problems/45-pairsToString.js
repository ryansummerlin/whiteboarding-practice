// Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

function pairsToString(arr) {
    let str = '';
    arr.forEach(el => str += el[0].repeat(el[1]));

    console.log(str);
    return str;
}

// This should be time complexity O(n) - assuming that str.repeat is an O(1) time complexity function. You need to loop through each of the
// nested arrays and add the letter/character to the final string so I don't think this can be optimized any further.

const array1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
  ];
  pairsToString(array1);  // => 'aaabcc'

  const array2 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
  ];
  pairsToString(array2);  // => 'food!'
