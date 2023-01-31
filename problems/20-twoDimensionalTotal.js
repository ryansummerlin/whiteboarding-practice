// Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:


function twoDimensionalTotal(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        array[i].forEach(el => sum += el);
    }

    console.log(sum);
    return sum;
}

// I think this is technically O(n^2) but I don't think I can optimize it any further. Basically, you need
// to grab the value of every number in the array and add it to the total, and even though it looks a bit clunky to
// use a nested for loop I don't think you can do it in a more time efficient way. Even if you use Array.flat to avoid going
// into a nested for loop you still have to run the sum calculation on the same number of values. Example: arr1 has two arrays
// with length 4 and 2 respectively. The outer for loop runs twice and the inner for loop runs four times for the first array
// and twice for the second so you do six calculations. If you flatten before, there's no nested loop but you still do six calculations.


const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
  ];

  twoDimensionalTotal(arr1);  // => 40

  const arr2 = [
    [2],
    [1, 9],
    [1, 1, 1]
  ]

  twoDimensionalTotal(arr2);  // => 15
