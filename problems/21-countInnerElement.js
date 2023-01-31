// Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a
// sub array that contains multiple elements. The number of elements contained in each sub array are not the
// same. You can assume each sub array contains at least one element. You should return an object that counts
// how many times each element in each sub array repeats.


function countInnerElement(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        arr[i].forEach(el => {
            if (count[el] === undefined) {
                count[el] = 1;
            } else {
                count[el]++;
            }
        });
    }

    console.log(count);
    return count;
}



const arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
  ]

  countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

  const arr2 = [
    ['a','b','c','d'],
    ['a','b'],
    ['a','c','d','a']
  ]

  countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}
