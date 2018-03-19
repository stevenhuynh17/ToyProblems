// MY SOLUTION
function longest(s1, s2) {
  // your code
  
  // Create an empty object to get unique characters
  var unique = {};
  // Results array to sort before finalizing answer
  var result = []; 
  
  // Cycle through all the arguments just in case there are more than 2 strings
  for(string in arguments) {
    // Create an array of individual letters
    var letters = arguments[string].split('');
    // Put each letter into the object
    letters.forEach((letter) => {
      unique[letter] = letter; 
    });
  }
  
  // Push each key from the object into the result array
  for(key in unique) {
    result.push(key);
  }
  // Sort the result array before combining it all into one string. 
  return result.sort().join(''); 
}

// COMMUNITY SOLUTION: 
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
