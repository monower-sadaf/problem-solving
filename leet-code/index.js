//1. Two Sum
/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


/* const twoSum = (nums,target) => {
    let result = [];

    for(i=0; i <nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target){
                result.push(i,j);
            }
        }
    }

    return result;
};


console.log(twoSum([2,7,11,15],9)); */


/* 
9. Palindrome Number

Given an integer x, return true if x is a
palindrome
, and false otherwise.

*/


const isPalindrome = (num) => {
    let temp = 0;
    let target = num;
    
    if(num<0){
        return false;
    }
    while (num>0){
        let rem = num%10;
        temp = temp * 10 + rem;
        num = Math.floor(num/10);
    }

    return temp === target;
};

console.log(isPalindrome(121));