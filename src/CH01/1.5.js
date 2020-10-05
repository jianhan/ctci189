
/**
 * check string 1 and string 2 is either, one remove a character away, or one insert a character away, or one char replacement away.
 */
const checkOneEditAway = (str1, str2) => {

    if (Math.abs(str1.length - str2.length) >= 2) {
        return false;
    }

    if (str1.length === str2.length) {
        return oneReplaceAway(str1, str2)
    }

    if (str1.length - str2.length === 1) {
        return oneInsertOrRemoveAway(str2, str1)
    }

    if (str2.length - str1.length === 1) {
        return oneInsertOrRemoveAway(str1, str2)
    }
}

const removeCharByIndex = (str, index) => {
    const arr = str.split('')
    return [...(arr.slice(0, index)), ...(arr.slice(index + 1, arr.length))].join('');
}

/* insert one char into str1 to be the same as str2 . */
const oneInsertOrRemoveAway = (str1, str2) => {
    for (let i = 0; i < str2.length; i++) {
        if (removeCharByIndex(str2, i) === str1) {
            return true;
        }
    }

    return false;
}

const oneReplaceAway = (str1, str2) => {
    let numOfDiff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (numOfDiff >= 2) {
            return false;
        }
        if (str1[i] !== str2[i]) {
            numOfDiff++;
        }
    }

    return numOfDiff === 1;
}

console.log(oneReplaceAway('test', 'best'))

console.log(checkOneEditAway('tst', 'test'))