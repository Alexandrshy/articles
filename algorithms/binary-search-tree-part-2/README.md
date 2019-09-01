### Maximum node method (Draft)

Finding the maximum or minimum node in the binary search tree is a very common task. Since in the binary search tree the value are already sorted to get the maximum value we need to get the value of the right node.

```js
findMax() {
  let current = this.root;
  if (!current) return null;
  while (current.right) {
    current = current.right;
  }
  return current.data;
};
```

#### Algorithm

1. If root property is empty then return null
1. Create the variable `current`, here the current node is stored
1. Whiel the current node has the right child update `current`
1. Return the value of the last right child

Check the result for the tree that was considered earlier.

```js
tree.findMax(); // 55
```

### Minimum node method

As you understand the method of finding the minimum value will be very similar to the method of finding the maximum value, only now we need to get the value of the left node.
