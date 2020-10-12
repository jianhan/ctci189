function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const zeroMatrix = matrix => {

    // create a tmp structure to store rows and columns data
    const length = matrix.length;
    const width = matrix[0].length;

    const zeroIndexes = [];

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] === 0) {
                zeroIndexes.push({ row: i, column: j })
            }
        }
    }

    let [columns, rows] = [[], []];
    for (let i = 0; i < zeroIndexes.length; i++) {
        columns.push(zeroIndexes[i].column)
        rows.push(zeroIndexes[i].row);
    }

    columns = columns.filter(onlyUnique);
    rows = rows.filter(onlyUnique);

    for (let i = 0; i < length; i++) {
        if (rows.includes(i)) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = 0;
            }
        }

        // for (let j = 0; j < width; j++) {
        //     if (matrix[i][j] === 0) {
        //         zeroIndexes.push({ row: i, column: j })
        //     }
        // }
    }
    return matrix;
}

const m = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 0],
    [11, 22, 0],
];

// 11, 22, 32
console.log(zeroMatrix(m))
