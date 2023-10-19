var sortArrayByParity = function(nums) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2==0){
            arr.unshift(nums[i]);
        }else {
            arr.push(nums[i]);
        }
    }
    return arr;
};


let x = sortArrayByParity([3,1,2,4,0,5,7,6,8,10]);
console.log(x);

