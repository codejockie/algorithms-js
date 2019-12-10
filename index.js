const mergeSort = require('./MergeSort');
const bubbleSort = require('./BubbleSort');
const insertionSort = require('./InsertionSort');
const selectionSort = require('./SelectionSort');
const { BinaryTree } = require('./BinaryTree');
const { BinarySearchTree } = require('./BinarySearchTree');

const array = [5, 10, 20, 1, 6];
const mergeSorted = mergeSort(array);
const bubbleSorted = bubbleSort(array);
const selectivelySorted = selectionSort(array);
const insertionSorted = insertionSort(array);

// console.log('mergeSorted', mergeSorted);
// console.log('bubbleSorted:', bubbleSorted);
// console.log('selectivelySorted:', selectivelySorted);
console.log('insertionSorted:', insertionSorted);

/* const bt = new BinarySearchTree();
bt.insert(2);
bt.insert(1);
bt.insert(3);
bt.insert(0);
bt.insert(7);
bt.insert(9);
bt.insert(1); */

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
// t2.ifNodeExists(t2, 1);
