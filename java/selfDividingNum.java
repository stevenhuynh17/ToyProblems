class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        LinkedList result = new LinkedList();
        boolean status = true; 
        
        // Loop through from lower bound to higher bound
        for(int i=left; i<=right; i++) {
            int current = i;
            
            // Extract the digits of the number
            while(current > 0) {
                int digit = current % 10; 
                
                // If the digit can't divide the number, break and move on
                if(digit == 0 || i % digit != 0) {
                    status = false;
                    break;
                }
                current = current / 10;
            }
            if(status == false) {
                status = true;
                continue;
            } 
            result.add(i);    
        }
        
        // If all are divisible, add to result linkedlist        
        return result;
    }
}
