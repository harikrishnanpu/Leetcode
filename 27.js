const nums = [3,2,2,3];
const val = 3;


var removeElement = function(nums, val) {
    let j=0;

    for(let i=0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[j] = nums[i];
            j++;
        }
    }

    return j


};

console.log(removeElement(nums,val))