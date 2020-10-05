/**
 * O(n)
 */
const simpleStringCompression = str => {
    const returnArr = [];
    let index = 0;
    while (index < str.length) {
        let [tmpChar, tmpIndex] = findConsecutiveByIndex(str, index)
        index = tmpIndex
        returnArr.push(tmpChar)

    }

    return returnArr.join('')
}

const findConsecutiveByIndex = (str, index) => {

    const char = str[index]
    let count = 0;
    while (str[index] == char) {
        index++;
        count++;
    }

    return [char + count, index];
}

// console.log(findConsecutiveByIndex('tesssstt', 6))
console.log(simpleStringCompression('tessssttxxxxxx'))
