// Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

const lcm = function(num1, num2) {
    let mult = num1;
    let counter = num1;
    if (num2 < num1) {
        mult = num2;
        counter = num2;
    }

    let lcm;

    while(!lcm) {
        if (mult % num1 === 0 && mult % num2 === 0) {
            lcm = mult;
        }
        mult+= counter;
    }

    console.log(lcm);
    return lcm;
}

// This is an O(n) time complexity problem. I don't think you can make it O(1) but I think you
// could try to cut down on the number of iterations by having the multiple initially equal num1
// and increase by num1 each time. The lcm has to be a multiple of the smaller number so it makes
// sense to only test iterations where you increase by the amount of the smaller number


lcm(2, 3);  // => 6
lcm(6, 10);  // => 30
lcm(24, 26);  // => 312
