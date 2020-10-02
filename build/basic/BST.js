"use strict";
// resource : https://medium.com/confessions-of-a-bootcamp-grad/how-to-solve-leetcodes-convert-sorted-array-to-binary-search-tree-problem-with-javascript-a61e6d6d6c36
// resource : https://medium.com/confessions-of-a-bootcamp-grad/binary-search-trees-can-be-our-friends-753dba14d844
// divide and conquer algorithm
var util = require('util');
var Node = /** @class */ (function () {
    function Node(v) {
        this.value = v;
    }
    return Node;
}());
// binary search tree
var convertArrayToBST = function (arr) {
    console.log("BEFORE SORT ", arr);
    arr.sort(function (a, b) { return a - b; });
    if (arr.length === 3) {
        return arr3ToNode(arr);
    }
    if (arr.length === 2) {
        return arr2ToNode(arr);
    }
    if (arr.length === 1) {
        return { value: arr[0] };
    }
    var _a = splitArrayInHalf(arr), mid = _a.mid, leftArr = _a.leftArr, rightArr = _a.rightArr;
    console.log(arr, mid, leftArr, rightArr);
    var midNode = { value: mid };
    return combineMidNodeWithLeftAndRight(midNode, convertArrayToBST(leftArr), convertArrayToBST(rightArr));
};
var arr2ToNode = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    var rootNode = {
        value: arr[0]
    };
    var rightNode = {
        value: arr[1],
        parent: rootNode
    };
    rootNode.right = rightNode;
    return rootNode;
};
var arr3ToNode = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    var leftNode = {
        value: arr[0]
    };
    var rightNode = {
        value: arr[2]
    };
    var rootNode = {
        value: arr[1],
        left: leftNode,
        right: rightNode
    };
    leftNode.parent = rootNode;
    rightNode.parent = rootNode;
    return rootNode;
};
var combineMidNodeWithLeftAndRight = function (midNode, leftNode, rightNode) {
    midNode.left = leftNode;
    midNode.right = rightNode;
    return midNode;
};
var splitArrayInHalf = function (arr) {
    var midIndex = Math.floor((arr.length / 2));
    return {
        mid: arr[midIndex],
        leftArr: arr.slice(0, midIndex),
        rightArr: arr.slice(midIndex + 1, arr.length),
    };
};
var constructMiddleNode = function (arr) {
    var midIndex = Math.ceil((arr.length / 2));
    var midNode = {
        value: arr[midIndex]
    };
    return midNode;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(util.inspect(convertArrayToBST(arr), { showHidden: false, depth: null }));
// console.log(util.inspect(splitArrayInHalf(arr), { showHidden: false, depth: null }))
