// Write a function peakFinder(array) that takes in an array of numbers. It should return an array
// containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors.
// If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the
// array has a length of at least 2.


function peakFinder(array) {
    let peaks = [];

    if (array[0] > array[1]) {
        peaks.push(0);
    }

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            peaks.push(i);
        }
    }

    if (array[array.length - 1] > array[array.length - 2]) {
        peaks.push(array.length - 1);
    }

    console.log(peaks);
    return peaks;
}

// This should be time complexity O(n). You have to loop through the whole array and check the values of the number
// on either side of the current value. I don't think I can optimize any


peakFinder([1, 2, 3, 2, 1]); // => [2]
peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]
