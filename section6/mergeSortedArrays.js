function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    
    if (arr1Length === 0) {
        return arr2;
    }
    
    if (arr2Length === 0) {
        return arr1;
    }
    
    const mergedArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArr.push(arr1Item);
            i++;
            arr1Item = arr1[i];
        } else {
            mergedArr.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }
    }
    return mergedArr;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
const arr3 = [1, 3, 4, 5];
const arr4 = [2, 4, 6, 8]; 
const arr5 = [10, 20];
const arr6 = [2, 4, 6, 8]; 
const output = mergeSortedArrays(arr1, arr2);
console.info("Output", output);
const output2 = mergeSortedArrays(arr3, arr4);
console.info("Output", output2);
const output3 = mergeSortedArrays(arr5, arr6);
console.info("Output", output3);