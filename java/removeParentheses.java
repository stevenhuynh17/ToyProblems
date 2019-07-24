class Solution {
    public String removeOuterParentheses(String S) {
        String[] pieces = S.split("");
        String answer = "";
        int begin = 0;
        int end = 0;
        int count = 0;
        
        
        for(int i=0; i<pieces.length; i++) {
            String current = pieces[i];
            if(current.equals("(")) {
                if(count == 0) {
                    begin = i+1;
                }
                count++;
            }
            
            if(current.equals(")")) {
                count--;
                if(count == 0) {
                    end = i;
                    answer += S.substring(begin, end);
                }
            }
        }
        
        // System.out.println(S.substring(2,4));
        return answer;
    }
}
