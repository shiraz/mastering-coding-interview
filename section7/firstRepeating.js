/*
Return the first repeating character from an array.

Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
Return 2

Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
Return 1

Given an array = [1, 2, 3, 4, 5]
Return null
*/

function firstRecurringCharacter(arr) {
  if (!arr || arr.length === 1) {
    return null;
  }

  const charMap = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const charFromMap = charMap[current];
    if (charFromMap) {
      return current;
    } else {
      charMap[current] = 1;
    }
  }

  return null;
}

const testCase1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const testCaseOutput1 = firstRecurringCharacter(testCase1);
console.log('TEST CASE 1: ', testCaseOutput1);

const testCase2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const testCaseOutput2 = firstRecurringCharacter(testCase2);
console.log('TEST CASE 2: ', testCaseOutput2);

const testCase3 = [1, 2, 3, 4, 5];
const testCaseOutput3 = firstRecurringCharacter(testCase3);
console.log('TEST CASE 3: ', testCaseOutput3);

