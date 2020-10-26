const bbs = (arr: number[]) => {
    let output = arr;
    for (let i = 0; i < output.length; i++) {
        for (let j = 0; j < output.length - 1; j++) {
            if (output[j] > output[j + 1]) {
                output = swap(output, j, j + 1)
            }
        }
    }

    return output;
}

const swap = (arr: number[], j: number, k: number) => [...arr.slice(0, j), arr[k], arr[j], ...arr.splice(k + 1)];


const test = [0, 1, 2, 3, 4, 5, 6, 7];
const test2 = [5, 4, 3, 2, 1, 0];

console.log(swap(test, 4, 5))
console.log(bbs(test2))