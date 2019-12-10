// Tree Node 
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  ifNodeExists(node, key) {
    if (node == null)
      return false;

    if (node.data == key)
      return true;

    // then recur on left sutree / 
    const res1 = this.ifNodeExists(node.left, key);
    if (res1) return true; // node found, no need to look further 

    // node is not found in left, so recur on right subtree / 
    const res2 = this.ifNodeExists(node.right, key);

    return res2;
  }

  // Function to insert nodes in level order 
  insertLevelOrder(arr, root, i) {
    // Base case for recursion 
    if (i < arr.length) {
      const temp = new Node(arr[i]);
      root = temp;

      // insert left child 
      root.left = this.insertLevelOrder(arr, root.left, 2 * i + 1);

      // insert right child 
      root.right = this.insertLevelOrder(arr, root.right, 2 * i + 2);
    }
    return root;
  }

  // Function to print tree 
  // nodes in InOrder fashion 
  inOrder(root) {
    if (root != null) {
      this.inOrder(root.left);
      console.log(root.data + " ");
      this.inOrder(root.right);
    }
  }

  levelWidth(root) {
    if (!root) return;
    const queue = [];
    const nodes = [];
    queue.unshift(root);
    while (queue.length) {
      const node = queue.pop();
      nodes.push(node.data);
      console.log(`${node.data} `);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    console.log(nodes);
  }
}

module.exports = { BinaryTree, Node };