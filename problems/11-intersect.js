// Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array
// containing the elements common to both arr1 and arr2.

// Right off the bat this one seems like it's going to be an O(n^2) complexity problem. You're going to
// have to loop through the entire second array for each element of the first away. I think you can make the
// code a bit more elegant by using the array.includes function, but you run into the same complexity problems
// assuming array.includes is O(n). I'm going to use array.includes because I think it makes the function easier to read

const intersect = function(arr1, arr2) {
    let intersect = [];

    arr1.forEach(el => {
        if (arr2.includes(el)) {
            intersect.push(el);
        }
    });

    console.log(intersect);
    return intersect;
}

// Time complexity is O(n^2) and I don't see a better way to optimize it. Space complexity is O(n).
// Worst case scenario is all the the values intersect and space complexity is O(n).


intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []
