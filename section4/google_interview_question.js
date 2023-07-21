/*
Step 1: Write key points:
In the array, check whether a pair of numbers when added together 
equal to the sum value.
[1, 2, 3, 9] , Sum = 8
[1, 2, 4, 4], Sum = 8

Step 2:
Inputs => array and sum
Outputs => true or false

Step3: 
Assume that the arrays are ordered.
Assume that the items in the ararys are always integers.
Assume that items can be negative numbers.
Assume some elements can be repeated in the array.
You cannot reuse the same number in the same index for the sum.
*/

function tupleArraySumCheck(arr, sum) {
    if (!arr || !sum) {
        return false;
    }
    
    // Not a good approach as the time complexity is BigO = O(n^2).
    /*
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                const currentSum = arr[i] + arr[j];
                if (currentSum === sum) {
                    return true;
                }
            }
        }
    }*/
    
    // Time complexity O(n) which is better than O(n^2).
    // Space complexity O(n).
    const complementsArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (complementsArr.includes(arr[i])) {
            return true;
        }
        complementsArr.push(sum - arr[i]);
    }
    
    return false;
}

const arr1 = [1, 2, 4, 4];
const arr2 = [1, 2, 3, 9];
const sum = 8;

const test = tupleArraySumCheck(arr1, sum);
const test2 = tupleArraySumCheck(arr2, sum);
console.log(test);
console.log(test2);