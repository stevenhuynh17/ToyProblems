// Pretty much uppercase each first word

// MY SOLUTION: 
String.prototype.toJadenCase = function () {
  var results = [];
  // Split the string into individual words
  var words = this.split(' ');
  for (var i = 0; i < words.length; i++) {
    // Split the word into each individual letter
    var letters = words[i].split('');
    // Select the first letter of each word and apply uppercase method
    letters[0] = letters[0].toUpperCase();
    // Push each modified word into the results array
    results.push(letters.join(''));
  }
  // Return the results array as one string
  return results.join(' ');
};

// BEST FOUND SOLUTION: 

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    // Returns a word where the first letter is combined with the rest of the sliced word.
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}