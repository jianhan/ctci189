const selection = arr => {
    let inputArr = arr;
    const output = [];
    while (inputArr.length > 0) {
        const [smallestIndex, smallest] = findSmallest(inputArr);
        inputArr = [...inputArr.slice(0, smallestIndex), ...inputArr.slice(smallestIndex + 1)]
        output.push(smallest)
    }


    return output;
}

const deleteByIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)]

const findSmallest = arr => {
    let smallest = Number.MAX_SAFE_INTEGER;
    let smallestIndex = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return [smallestIndex, smallest];
}

console.log(selection([100, 2, 55, 12, 8, 22, 3, 3, 33]));
// console.log(deleteByIndex([1, 2, 3], 2))