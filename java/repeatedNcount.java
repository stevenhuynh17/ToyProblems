class Solution {
    public int repeatedNTimes(int[] A) {
        // Initialize hashmap
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Find N by using length and dividing by 2
        int length = A.length / 2;
        
        // Go through each index and put them in a hashmap
        for(int i=0; i<A.length; i++) {
            int current = A[i];
            
            // Check if unique int exists yet and increment
            if(!map.containsKey(current)) {
                map.put(current, 1);
            } else {
                map.put(current, map.get(current)+1);
            }
            
            // If current int occurance equals N, return key
            if(length == map.get(current)) {
                return current;
            }
        }
        
        return 0;
    }
}
