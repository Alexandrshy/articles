# Data structures. Binary Search Tree in JavaScript (Part-2: Practice)

In the previous post [Binary Search Tree in JavaScript](https://dev.to/alexandrshy/data-structures-binary-search-tree-in-javascript-3om9) we wrote our own implementation in JavaScript with a basic interface. Now we'll try to expand it.

## Traversal

Unlike linear data structures (Array, Linked List, Stacks, etc.), which have only one logical way of traversing them, trees can be traversed in different ways. Ways for traversing the binary search tree:

- Inorder traversal
- Postorder traversal
- Preorder traversal

Let's focus on each in more detail.

### Inorder traversal

Tree traversal algorithm:

1. Traverse the left subtree
1. Visit the root of the tree
1. Traverse the right subtree

For example

For all examples, we'll use the binary tree from the previous part

![Binary Search Tree](https://thepracticaldev.s3.amazonaws.com/i/ybacgegn1ccjxh5d3xh7.jpg)

For this binary search tree, this method should return such an array `[6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]`.

```js
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
};
```

#### Algorithm

1. If root property is empty then return `null`
1. Create the variable `nodeList` to store the node value
1. Create the method `traverse`, this method takes a node as an argument
1. The `traverse` method is recursively called for all elements of the tree according to the algorithm that we announced earlier
1. And as a result, we return the `nodeList` variable

Check the result

```js
console.log(tree.inOrder()); // [6, 8, 11, 12, 13, 16, 24, 29, 37, 42, 55]
```

### Postorder traversal

Tree traversal algorithm:

1. Traverse the left subtree
1. Traverse the right subtree
1. Visit the root of the tree

For the previously used binary search tree, this method should return such an array `[6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]`.

```js
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
};
```

#### Algorithm

1. If root property is empty then return `null`
1. Create the variable `nodeList` to store the node value
1. Create the method `traverse`, this method takes a node as an argument
1. The `traverse` method is recursively called for all elements of the tree according to the algorithm that we announced earlier
1. And as a result, we return the `nodeList` variable

Check the result

```js
console.log(tree.postOrder()); // [6, 12, 11, 8, 16, 29, 24, 55, 42, 37, 13]
```

### Preorder traversal

Tree traversal algorithm:

1. Visit the root of the tree
1. Traverse the left subtree
1. Traverse the right subtree

For the previously used binary search tree, this method should return such an array `[13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]`.

```js
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
```

#### Algorithm

1. If root property is empty then return `null`
1. Create the variable `nodeList` to store the node value
1. Create the method `traverse`, this method takes a node as an argument
1. The `traverse` method is recursively called for all elements of the tree according to the algorithm that we announced earlier
1. And as a result, we return the `nodeList` variable

Check the result

```js
console.log(tree.preOrder()); // [13, 8, 6, 11, 12, 37, 24, 16, 29, 42, 55]
```

We have considered three ways to traversal a binary tree. The main idea of these three methods is visiting each node exactly once. As you can see, the implementation of these methods is very similar to each other and we visit each node only once.

## Finding maximum and minimum node values

Finding the maximum or minimum node in the binary search tree is a very common task.

Let's look at our tree again

![Binary Search Tree with maximum and minimum](https://thepracticaldev.s3.amazonaws.com/i/xb9u1gacmyytrjszjjgk.jpg)

For this binary search tree, the minimum value is 6 and the maximum value is 55. I think you already see the pattern 🙂

### Find maximum

Since in the binary search tree the value is already sorted to get the maximum value we need to get the value of the right child node.

```js
findMax() {
  if (this.root === null) return null;
  let current = this.root;
  if (!current) return null;
  while (current.right) {
    current = current.right;
  }
  return current.data;
};
```

#### Algorithm

1. If root property is empty then return `null`
1. Create the variable `current` here we'll store the current node
1. While the current node has the right child we need to update the value to `current`
1. Return the `current` value

Check the result for the tree that was considered earlier.

```js
console.log(tree.findMax()); // 55
```

### Find minimum

Now let's do the same for the left child node and we'll get the minimum value. It's really that simple 🙂

```js
findMin() {
  if (this.root === null) return null;
  let current = this.root;
  if (!current) return null;
  while (current.left) {
    current = current.left;
  }
  return current.data;
};
```

#### Algorithm

1. If root property is empty then return `null`
1. Create the variable `current` here we'll store the current node
1. While the current node has the left child we need to update the value to `current`
1. Return the `current` value

Check the result for the tree that was considered earlier.

```js
console.log(tree.findMin()); // 6
```

To practice, you can implement your own additional methods. I'll get to the practical part. I take all problems in [LeetCode](http://leetcode.com/) this is a great service for those who want to practice solving problems before interviews.

## Same Tree

### Problem

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

### Example 1

```
Input:     2         2
          / \       / \
         1   3     1   3

        [2,1,3],   [2,1,3]

Output: true
```

### Example 2

```
Input:     2       2
          /         \
         1           1

        [1,2],   [1,null,2]

Output: false
```

### Example 3

```
Input:     3         3
          / \       / \
         2   1     1   2

        [3,2,1],   [3,1,2]

Output: false
```

### Solution

The easiest strategy to solve this problem is to use recursion. We need to compare each node of two trees and if they are equal return `true`.

```js
/**
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @returns {boolean}
 **/
const isSameTree = (tree1, tree2) => {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;
  return (
    tree1.data === tree2.data &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  );
};
```

Congratulations, we solved the first problem 🙂

[Link to LeetCode](https://leetcode.com/problems/same-tree/) Note: the binary tree interface in our implementation and on the site is different
[Link to Jsfiddle](https://jsfiddle.net/alexandrshy/tb50p8h3/15/)
[Link to GitHub]()

## Merge Two Binary Trees

### Problem

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

### Example 1

```
Input:
	Tree 1           Tree 2
          1               2
         / \             / \
        3   2           1   3
       /                 \   \
      5                   4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
```

### Solution

...

```js
/**
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @returns {TreeNode}
 **/
const mergeTrees = (tree1, tree2) => {
  if (!tree1) return tree2;
  if (!tree2) return tree1;
  const root = new Node(tree1.data + tree2.data);
  root.left = mergeTrees(tree1 ? tree1.left : null, tree2 ? tree2.left : null);
  root.right = mergeTrees(
    tree1 ? tree1.right : null,
    tree2 ? tree2.right : null
  );
  return root;
};
```

Note: all the conditions of the tasks have been completed and LeetCode accepts this decision, but the merge result has a problem. When merge two trees breaks the logic of the right child node. If one tree contained the right child node and the other did not, after the merge, the right child node may become smaller than the parent node. As a practice, you can solve this problem 😉

[Link to LeetCode](https://leetcode.com/problems/merge-two-binary-trees/)
[Link to Jsfiddle](https://jsfiddle.net/alexandrshy/ke74fcsp/2/)
[Link to GitHub]()

## Diameter of Binary Tree

### Problem

### Example 1

### Solution

```js
```

[Link to LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/)
[Link to Jsfiddle]()
[Link to GitHub]()

// https://leetcode.com/problems/binary-tree-inorder-traversal/
// https://leetcode.com/problems/symmetric-tree/
// https://leetcode.com/problems/univalued-binary-tree/
// https://leetcode.com/problems/balanced-binary-tree/
