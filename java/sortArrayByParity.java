class Solution {
    public int[] sortArrayByParity(int[] A) {
        // Initialize arrays
        int[] solution = new int[A.length];
        int[] odd = new int[A.length]; 
        
        // Keep track of current position of next available index
        int current_pos = 0;
        
        // Put all the evens and odds in their respective arrays
        for(int i=0; i<A.length; i++) {
            int current_val = A[i];
            
            if(current_val % 2 == 0) {
                solution[current_pos] = current_val;
                current_pos++;
            }
        }
        
        // Add all odd values to the even
        for(int i=0; i<A.length; i++) {
            int current_val = A[i];
            
            if(current_val % 2 != 0) {
                solution[current_pos] = current_val;
                current_pos++;
            }
        }
        return solution;
    }
}
