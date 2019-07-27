class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        // Morse code alphabet
        String[] alphabet = new String[]{".-","-...","-.-.","-..",".","..-.",
                                         "--.","....","..",".---","-.-",".-..",
                                         "--","-.","---",".--.","--.-",".-.",
                                         "...","-","..-","...-",".--","-..-",
                                         "-.--","--.."};
        // Map out all unique combined strings
        HashMap<String, Integer> map = new HashMap<>();
        
        // Iterate over input of words
        for(int i=0; i<words.length; i++) {
            // Separate into an individual word
            StringBuilder word = new StringBuilder(words[i]);
            
            StringBuilder morse = new StringBuilder();
            // Each word, form a transformation
            for(int j=0; j<word.length(); j++) {
                int letter = (int) word.charAt(j);
                String translate = alphabet[letter-97];
                
                morse.append(translate);
            }
            // Use the transfomration and catalog it in the hashmap
            map.put(morse.toString(), 0);
        }
        
        
        // Count how many keys there are and return it
        return map.size();
        
    }
    
    
}
