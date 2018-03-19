// MY SOLUTION
function findOdd(A) {
  //happy coding!
  // Create a new object to put the array of values inside
  var obj = {}; 
  
  A.forEach((value) => {
    // For each value in the array, each number will be a key. 
    // If key already exists in the object, increment the count for its value. 
    if(!obj.hasOwnProperty(value)) {
      obj[value] = 1;
    } else {
      obj[value]++; 
    }
  });

  // Search through the values of the object to find any odd count and return that value. 
  for(value in obj) {
    if(obj[value] % 2 !== 0) {
      // The key is in string format and the problem request the value to be an integer. 
      return parseInt(value);
    }
  }
  // If nothing comes up, return 0. 
  return 0;
}

// COMMUNITY SOLUTION
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// The '^' operator cancels out every number once it occurs twice. 