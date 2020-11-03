const quickSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }


    const pivot = arr.pop();
    const leftArr = [];
    const rightArr = []
    const newArray = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        if (arr[i] <= pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return newArray.concat(quickSort(leftArr), pivot, quickSort(rightArr));
}


console.log(quickSort([3, 2, 1, 0, 5]))