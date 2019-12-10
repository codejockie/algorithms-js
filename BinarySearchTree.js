class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = new Node(data, null, null);
    if (!this.root) {
      this.root = node;
    } else {
      this.addNodeInPlace(this.root, data);
    }
  }

  addNodeInPlace(rootNode, data) {
    if (data > rootNode.data) {
      if (rootNode.right) {
        this.add(data);
      } else {
        rootNode.right = new Node(data, null, null);
      }
    } else if (data < rootNode.data) {
      if (rootNode.left) {
        this.add(data);
      } else {
        rootNode.right = new Node(data, null, null);
      }
    }
  }

  insert(data) {
    // if (data < this.data && this.left) {
    //   this.left.insert(data);
    // } else if (data < this.data) {
    //   this.left = new Node(data);
    // } else if (data > this.data && this.right) {
    //   this.right.insert(data);
    // } else if (data > this.data) {
    //   this.right = new Node(data);
    // }

    const node = new Node(data, null, null);
    var currentNode;

    if (!this.root) {
      this.root = node;
    } else {
      currentNode = this.root;
      while (currentNode) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log('Ignoring this value as the BST is supposed to be a tree containing UNIQUE values');
          break;
        }
      }
    }
    // if (!this.root) {
    //   this.root = node;
    // } else {
    //   let current = this.root;
    //   let parent;

    //   while (true) {
    //     parent = current;
    //     if (data < current.data) {
    //       current = current.left;
    //       if (!current) {
    //         parent.left = node;
    //         break;
    //       }
    //     } else {
    //       current = current.right;
    //       if (!current) {
    //         parent.right = node;
    //         break;
    //       }
    //     }
    //   }
    // }
  }

  inOrder(node) {
    if (!(node == null)) {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (!(node == null)) {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (!(node == null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
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
      console.log(`${node.show()} `);
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

module.exports = { BinarySearchTree , Node };