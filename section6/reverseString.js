function reverseString(str) {
    if (str === null || str === undefined) {
        return null;
    }

    const strLength = str.length;

    if (str.trim() === '' || strLength === 1 || typeof str !== 'string') {
        return str;
    }


    let reversedStr = '';
    for (let i = strLength - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}