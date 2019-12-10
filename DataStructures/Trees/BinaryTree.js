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

  // Function to insert nodes in level order 
  insertLevelOrder(arr, root, i) {
    // Base case for recursion 
    if (i < arr.length) {
      const temp = new Node(arr[i]);
      root = temp;

      // Insert left child 
      root.left = this.insertLevelOrder(arr, root.left, 2 * i + 1);

      // Insert right child 
      root.right = this.insertLevelOrder(arr, root.right, 2 * i + 2);
    }
    return root;
  }

  // Function to print tree odes in InOrder fashion 
  inOrder(root) {
    if (root != null) {
      this.inOrder(root.left);
      console.log(root.data + " ");
      this.inOrder(root.right);
    }
  }

  // Prints node on the same level
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