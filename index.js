const mergeSort = require('./Sorting/MergeSort');
const bubbleSort = require('./Sorting/BubbleSort');
const { frequencyDigits } = require('./DigitOccurrence');
const insertionSort = require('./Sorting/InsertionSort');
const selectionSort = require('./Sorting/SelectionSort');
const { BinaryTree } = require('./DataStructures/Trees/BinaryTree');
const { BinarySearchTree } = require('./DataStructures/Trees/BinarySearchTree');

const array = [5, 10, 20, 1, 6];
const mergeSorted = mergeSort(array);
const bubbleSorted = bubbleSort(array);
const selectivelySorted = selectionSort(array);
const insertionSorted = insertionSort(array);

// console.log('mergeSorted', mergeSorted);
// console.log('bubbleSorted:', bubbleSorted);
// console.log('selectivelySorted:', selectivelySorted);
// console.log('insertionSorted:', insertionSorted);

console.log(frequencyDigits(35, 2));

// const bt = new BinarySearchTree();
// bt.insert(2);
// bt.insert(1);
// bt.insert(3);
// bt.insert(0);
// bt.insert(7);
// bt.insert(9);
// bt.insert(1);

// bt.inOrder(bt.root);
// bt.postOrder(bt.root);
// bt.preOrder(bt.root);
// bt.levelWidth(bt.root);

// console.log('-----------------------');

// Driver code for BinaryTree
// const t2 = new BinaryTree();
// const arr = [2, 1, 3, 0, 7, 9, 1];
// t2.root = t2.insertLevelOrder(arr, t2.root, 0);
// t2.inOrder(t2.root);
// t2.levelWidth(t2.root);

// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js
