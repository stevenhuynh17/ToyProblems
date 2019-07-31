class Solution {
    public int[] sortedSquares(int[] A) {
        // Make each int square
        for(int i=0; i<A.length; i++) {
            A[i] *= A[i];
        }
       
        // Sort the input array in ascending order
        Arrays.sort(A);
        return A;
    }
}
