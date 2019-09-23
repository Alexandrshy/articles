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
