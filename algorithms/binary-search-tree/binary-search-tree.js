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

  toString() {
    return JSON.stringify(this.root);
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
console.log(JSON.parse(tree.toString()));
tree.search(13);
tree.search(37);
tree.search(42);
tree.remove(90);
tree.remove(12);
tree.remove(42);
tree.remove(37);
console.log(JSON.parse(tree.toString()));
