class Solution {
    public int[] sortArrayByParity(int[] A) {
        // Initialize arraylist for dynamic use
        ArrayList even = new ArrayList();
        ArrayList odd = new ArrayList();
        
        
        // Differentiate between odd and even values
        for(int i=0; i<A.length; i++) {
            int current = A[i];
            if(current % 2 == 0) {
                even.add(current);
            } else {
                odd.add(current);
            }
        }
        
        // Add all odd values to the even 
        for(int i=0; i<odd.size(); i++) {
            even.add(odd.get(i));
        }
        
        // Convert ArrayList into array to have proper return type
        int[] answer = new int[even.size()];
        for(int i=0; i<answer.length; i++) {
            answer[i] = (int) even.get(i);
        }
        
        return answer;
    }
}
