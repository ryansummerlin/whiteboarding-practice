// Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by
// returning a single 2D-array. Assume that both input arrays have the same length.

function zipArray(arr1, arr2) {
    let zipped = [];

    for (let i = 0; i < arr1.length; i++) {
        zipped.push([arr1[i], arr2[i]]);
    }

    console.log(zipped);
    return zipped;
}



const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
