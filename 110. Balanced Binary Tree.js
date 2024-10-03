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
 * @return {boolean}
 */
var isBalanced = function(root) {
    getHeight=(node)=>{
        if(node===null){
            return 0;
        }

        let leftHeight=getHeight(node.left);
        if(leftHeight === -1) return -1;

        let rightHeight=getHeight(node.right);
        if(rightHeight===-1) return -1;

        if(Math.abs(leftHeight-rightHeight)>1){
            return -1;
        }

        return 1+Math.max(leftHeight,rightHeight);

    }

    return getHeight(root) !== -1;
};