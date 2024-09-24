/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }

    let queue=[root];
    let depth=0;

    while(queue.length>0){
        let levelSize=queue.length;

        for(let i=0;i<levelSize.length;i++){
            let currentNode=queue.shift();

            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }

        depth++;
    }

    return depth;
};