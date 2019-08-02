class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
        // Flip image
        for(int i=0; i<A.length; i++) {
            int[] current = A[i];
            int halfway = current.length/2;
            int length = current.length - 1;
            
            for(int j=0; j<halfway; j++) {
                int begin = current[j];
                int end = current[length];
                
                current[j] = end;
                current[length] = begin;
                length--;   
            }    
            // Invert image
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
