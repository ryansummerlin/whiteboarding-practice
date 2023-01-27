// Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

function printReverse(min, max) {
    let arr = [];
    max--;

    while (max > min) {
        arr.push(max);
        max--;
    }

    return arr;
}

// This is pretty similar to problems one and two. Time and space complexity O(n) with n being
// the distance between min and max. I don't think there's a way to optimize any further.

console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]
