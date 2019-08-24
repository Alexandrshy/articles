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
      return searchTree(this.root);
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
        let replacemenParent = current;
        while (replacemenParent.right !== null) {
          replacemenParent = replacment;
          replacement = replacement.right;
        }
        current.data = replacemenParent.data;
        current.left = removeNode(current.left, replacemenParent.data);
      }
      return node;
    };
    this.root = removeNode(this.root, data);
  }

  toString() {
    return JSON.stringify(this.root);
  }
}
