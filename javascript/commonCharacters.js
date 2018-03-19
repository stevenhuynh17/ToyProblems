
var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  // Assign an empty object to count each unique letter the two strings have. 
  var obj = {}; 
  // Create an empty string to push common characters into. 
  var results = ''; 
  
  var array = [1, 2, 3]; 

  

  for (var j = 0; j < arguments.length; j++) {
    // Split the letters up into individual chars. 
    letters = arguments[j].split(''); 

    for (var i = 0; i < letters.length; i++) {
      if (!obj.hasOwnProperty(letters[i])) {
        obj[letters[i]] = 1; 
      } else if (obj.hasOwnProperty(letters[i])) {
        obj[letters[i]] += 1; 
      }
    }

  }; 
  
  // If there are more than 2 as a value for the key, push it into the results array. 
  for (var key in obj) {
  	if (obj[key] >= arguments.length) {
  		results += key; 
  	}
  }

  // Return results containing the common characters. 
  return results; 
};

// var test = commonCharacters('aceexivou', 'agihobu'); 
// console.log(test); 