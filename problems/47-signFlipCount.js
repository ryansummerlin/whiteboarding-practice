// Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the
// number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is
// neither positive nor negative.

function signFlipCount(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] > 0 && nums[i + 1] < 0) || (nums[i] < 0 && nums[i + 1] > 0)) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// This function operates in a pretty similar fashion to the last one. Time complexity O(n), don't think I can optimize further.

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3
