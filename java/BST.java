/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int rangeSumBST(TreeNode root, int L, int R) {
        int sum = 0;
        if(root.left != null) {
            int value = rangeSumBST(root.left, L, R);
            sum += value;  
        } 
        if(root.right != null) {
            int value = rangeSumBST(root.right, L, R);
            sum += value;
        }         
        if(root.val >= L && root.val <= R) {
            sum += root.val;
        }
        return sum;
    }
}
