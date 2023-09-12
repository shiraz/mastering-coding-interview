/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums, target) {
    const complements = {};

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;
        if (complements[current]) {
            return [complement, current];
        } else {
            complements[complement] = true;
        }
    }

    return [];
}



const inputNums1 = [2,7,11,15];
const inputTarget1 = 9;
const output1 = twoSum(inputNums1, inputTarget1);
console.log(`Output: ${output1}`);

const inputNums2 = [3,2,4];
const inputTarget2 = 6;
const output2 = twoSum(inputNums2, inputTarget2);
console.log(`Output: ${output2}`);

const inputNums3 = [3,3];
const inputTarget3 = 6;
const output3 = twoSum(inputNums3, inputTarget3);
console.log(`Output: ${output3}`);

