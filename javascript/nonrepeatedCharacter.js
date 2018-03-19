var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  // Assemble an array of all letters only
  var letters = string.split(''); 
  // Assign each letter the number of times it appears in the string in a key:value format
  var catalog = {}; 

  for (var i = 0; i < letters.length; i++) {
  	
  	if (catalog.hasOwnProperty(letters[i])) {
  		catalog[letters[i]] = catalog[letters[i]] + 1; 
  	} else {
	  	catalog[letters[i]] = 1;
  	}
  }

  // Search through the catalog object for the first instance of value 1 and return the key. 
  for (var key in catalog) {
  	if (catalog[key] === 1) {
  		return key; 
  	}
  } 

};