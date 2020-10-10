// rotate 2d array aka matrix


const rotateMatrix = matrix => {

    if (matrix.length === 0 || matrix.length !== matrix[0].length) {
        return false;
    }

    let n = matrix.length;

    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        console.log(`Layer is - ${layer}`)
        console.log(`First is - ${first}`)
        console.log(`Last is - ${last}`)
        console.log(`============================`)
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i];

            // left -> top
            console.log(`LEFT -> TOP: ${matrix[last - offset][first]} -> ${matrix[first][i]}`)
            matrix[first][i] = matrix[last - offset][first];

            // bottom -> left
            console.log(`BOTTOM -> LEFT: ${matrix[last][last - offset]} -> ${matrix[last - offset][first]}`)
            matrix[last - offset][first] = matrix[last][last - offset]

            // right -> bottom
            console.log(`RIGHT -> BOTTOM: ${matrix[i][last]} -> ${matrix[last][last - offset]}`)
            matrix[last][last - offset] = matrix[i][last];

            // top -> right
            console.log(`TOP -> RIGHT: ${top} -> ${matrix[i][last]}`)
            matrix[i][last] = top; // right < - saved top
        }
    }
    console.log(matrix)
    return true;
}


// rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])

rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
])
