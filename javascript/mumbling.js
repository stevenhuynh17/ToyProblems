// MY SOLUTION
function accum(s) {
  // your code
  var letters = s.split('');
  var result = ''; 
  var count = 1;
  letters.forEach((letter) => {
    for(var i = 0; i < count; i++) {
      if(i === 0) {
        result += letter.toUpperCase(); 
      } else {
        result += letter.toLowerCase(); 
      }
    }
    result += '-'; 
    count++; 
  });
  return result.slice(0, -1);
}



// COMMUNITY SOLUTION
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}
// Mapping returns an array where in the function x represents each letter. 
// Capitalize only the first letter.
// Create a new array past the capitalized letter with lowercase anything afterwards
// Join each segment with the '-'