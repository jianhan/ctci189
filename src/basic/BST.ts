// resource : https://medium.com/confessions-of-a-bootcamp-grad/how-to-solve-leetcodes-convert-sorted-array-to-binary-search-tree-problem-with-javascript-a61e6d6d6c36
// resource : https://medium.com/confessions-of-a-bootcamp-grad/binary-search-trees-can-be-our-friends-753dba14d844
// divide and conquer algorithm
const util = require('util')

type TNode = {
    value: number;
    parent?: Node;
    left?: Node;
    right?: Node;
}

class Node implements TNode {

    value: number;
    parent?: Node;
    left?: Node;
    right?: Node;

    constructor(v: number) {
        this.value = v;
    }
}

// binary search tree
const convertArrayToBST = (arr: number[]): Node => {
    console.log("BEFORE SORT ", arr)
    arr.sort((a, b) => a - b)

    if (arr.length === 3) {
        return arr3ToNode(arr)
    }

    if (arr.length === 2) {
        return arr2ToNode(arr)
    }

    if (arr.length === 1) {
        return { value: arr[0] };
    }

    const { mid, leftArr, rightArr } = splitArrayInHalf(arr);
    console.log(arr, mid, leftArr, rightArr)
    const midNode: Node = { value: mid }
    return combineMidNodeWithLeftAndRight(midNode, convertArrayToBST(leftArr), convertArrayToBST(rightArr));
}

const arr2ToNode = (arr: number[]): Node => {
    arr.sort((a, b) => a - b);
    const rootNode: Node = {
        value: arr[0]
    }

    const rightNode: Node = {
        value: arr[1],
        parent: rootNode
    }

    rootNode.right = rightNode;

    return rootNode;
}

const arr3ToNode = (arr: number[]): Node => {
    arr.sort((a, b) => a - b);


    const leftNode: Node = {
        value: arr[0]
    }

    const rightNode: Node = {
        value: arr[2]
    }
    const rootNode: Node = {
        value: arr[1],
        left: leftNode,
        right: rightNode
    }

    leftNode.parent = rootNode;
    rightNode.parent = rootNode;

    return rootNode;

}

const combineMidNodeWithLeftAndRight = (midNode: Node, leftNode: Node, rightNode: Node): Node => {
    midNode.left = leftNode;
    midNode.right = rightNode;
    return midNode;
}

const splitArrayInHalf = (arr: number[]): { mid: number, leftArr: number[], rightArr: number[] } => {
    const midIndex = Math.floor((arr.length / 2));

    return {
        mid: arr[midIndex],
        leftArr: arr.slice(0, midIndex),
        rightArr: arr.slice(midIndex + 1, arr.length),
    }
}

const constructMiddleNode = (arr: number[]): Node => {
    const midIndex = Math.ceil((arr.length / 2));
    const midNode: Node = {
        value: arr[midIndex]
    }
    return midNode;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(util.inspect(convertArrayToBST(arr), { showHidden: false, depth: null }))
// console.log(util.inspect(splitArrayInHalf(arr), { showHidden: false, depth: null }))

