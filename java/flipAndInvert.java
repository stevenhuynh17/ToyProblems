class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
        // Flip image
        for(int i=0; i<A.length; i++) {
            Integer[] current = Integer.valueOf(A[i]);
            System.out.println("BEFORE: " + Arrays.toString(current));
            Collections.reverse(Arrays.asList(current));
            System.out.println("AFTER: " + Arrays.toString(current));
        }
        System.out.println(Arrays.toString(A));
        
        
        // Invert image
        for(int i=0; i<A.length; i++) {
            int[] current = A[i];
            for(int j=0; j<current.length; j++) {
                if(current[j] == 1) {
                    current[j] = 0;
                } else if(current[j] == 0) {
                    current[j] = 1;
                }
            }
        }
        
        return A;
    }
}
