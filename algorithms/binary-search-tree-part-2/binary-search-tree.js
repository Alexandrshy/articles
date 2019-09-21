class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /**
   * Adds some value to the tree
   * @param {number} data The value to add into the tree
   */
  add(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      const searchNode = function(current) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            return searchNode(current.left);
          }
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            return searchNode(current.right);
          }
        } else {
          return null;
        }
      };
      return searchNode(this.root);
    }
  }

  /**
   * Determines if a given value exists in the tree
   * @param {number} data The value to find
   */
  search(data) {
    const searchNode = function(current) {
      if (current === null) return false;
      if (data < current.data) return searchNode(current.left);
      if (data > current.data) return searchNode(current.right);
      return true;
    };
    return searchNode(this.root);
  }

  /**
   * Remove the value from the tree
   * @param {number} data The node to be removeed
   */
  remove(data) {
    const removeNode = function(current, data) {
      if (current === null) return null;
      if (data < current.data) {
        current.left = removeNode(current.left, data);
      } else if (data > current.data) {
        current.right = removeNode(current.right, data);
      } else {
        if (current.left === null && current.right === null) return null;
        if (current.left === null) return current.right;
        if (current.right === null) return current.left;
        let replacement = current.left;
        let replacementParent = current;
        while (replacementParent.right !== null) {
          replacementParent = replacement;
          replacement = replacement.right;
        }
        current.data = replacementParent.data;
        current.left = removeNode(current.left, replacementParent.data);
      }
      return current;
    };
    this.root = removeNode(this.root, data);
  }

  /**
   * Print binary search tree
   * @returns {string} binary search tree
   */
  toString() {
    return JSON.stringify(this.root);
  }

  /**
   * Array of tree node values
   * Algorithm:
   * - Traverse the left subtree
   * - Visit the root of the tree
   * - Traverse the right subtree
   *
   * @returns {Array<number>} tree node values
   */
  inOrder() {
    if (this.root === null) return null;
    const nodeList = [];
    const traverse = function(current) {
      if (current.left) traverse(current.left);
      nodeList.push(current.data);
      if (current.right) traverse(current.right);
    };
    traverse(this.root);
    return nodeList;
  }

  /**
   * Array of tree node values
   * Algorithm:
   * - Traverse the left subtree
   * - Traverse the right subtree
   * - Visit the root of the tree
   *
   * @returns {Array<number>} tree node values
   */
  postOrder() {
    if (this.root === null) return null;
    const nodeList = [];
    const traverse = function(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      nodeList.push(current.data);
    };
    traverse(this.root);
    return nodeList;
  }

  /**
   * Array of tree node values
   * Algorithm:
   * - Visit the root of the tree
   * - Traverse the left subtree
   * - Traverse the right subtree
   *
   * @returns {Array<number>} tree node values
   */
  preOrder() {
    if (this.root === null) return null;
    const nodeList = [];
    const traverse = function(current) {
      nodeList.push(current.data);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    };
    traverse(this.root);
    return nodeList;
  }

  /**
   * Find the maximum value
   * @returns {number} maximum value
   */
  findMax() {
    if (this.root === null) return null;
    let current = this.root;
    if (!current) return null;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * Find the minimum value
   * @returns {number} minimum value
   */
  findMin() {
    if (this.root === null) return null;
    let current = this.root;
    if (!current) return null;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }
}

const tree = new BST();
tree.add(13);
tree.add(8);
tree.add(6);
tree.add(11);
tree.add(12);
tree.add(37);
tree.add(24);
tree.add(42);
tree.add(16);
tree.add(29);
tree.add(55);
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.preOrder());
console.log(tree.findMax());
console.log(tree.findMin());
