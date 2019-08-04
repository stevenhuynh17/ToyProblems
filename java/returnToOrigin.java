class Solution {
    public boolean judgeCircle(String moves) {
        // Initialize origin
        int[] origin = new int[]{0,0};
        
        // Go through each direction
        for(int i=0; i<moves.length(); i++){
            char current = moves.charAt(i);
            
            // Add appropriate position value
            switch(current){
                case 'U':
                    origin[0] += 1;
                    break;
                case 'D':
                    origin[0] -= 1;
                    break;
                case 'R':
                    origin[1] += 1;
                    break;
                case 'L':
                    origin[1] -= 1;
                    break;
            }
        }
        
        // Check if origin is at origin
        if(origin[0] == 0 && origin[1] == 0) {
            return true;
        } else {
            return false;
        }
    }
}
