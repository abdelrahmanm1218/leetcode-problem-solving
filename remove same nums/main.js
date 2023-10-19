var removeElement = function (nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};

let k = removeElement([0,1,2,2,3,0,4,2],2);
console.log(k);

let k2 = removeElement([3,2,2,3], 3);

console.log(k2);