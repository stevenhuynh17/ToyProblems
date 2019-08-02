import java.util.HashMap;

class Solution {
    public int numJewelsInStones(String J, String S) {
        int count = 0;
        
        for(int i=0; i<J.length(); i++) {
            char letter = J.charAt(i);
            for(int j=0; j<S.length(); j++) {
                if(letter == S.charAt(j)){
                    count++;
                }
            }
        }
        
        return count;
    }
}
