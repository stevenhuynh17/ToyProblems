class Solution {
    public boolean checkRecord(String s) {
        int late = 0;
        int absent = 0;
        
        for(int i=0; i<s.length(); i++){
            char current = s.charAt(i);
            if(current == 'A'){
                absent++;
                if(late > 2) {
                    return false;
                } else if(absent > 1) {
                    return false;
                } else {
                    late = 0;
                }
            } else if(current == 'P'){
                if(late > 2) {
                    return false;
                } else {
                    late = 0;
                }
            } else if(current == 'L'){
                late++;
                if(late > 2) {
                    return false;
                }
            }
            
        }

        return true;
    }
}
