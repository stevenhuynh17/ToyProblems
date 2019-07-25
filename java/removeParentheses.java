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

// IMPROVED
class Solution {
    public String removeOuterParentheses(String S) {
        StringBuilder solution = new StringBuilder("");
        // System.out.println(S.length());
        int count = 0;
        
        for(int i=0; i<S.length(); i++) {
            char piece = S.charAt(i);
            if(piece == '(') {
                if(count != 0) {   
                    solution.append(piece);
                } 
                count++;
            }
            
            if(piece == ')') {
                count--;
                if(count != 0) {
                    solution.append(piece);
                }
            }
        }
        
        return solution.toString();
    }
}
