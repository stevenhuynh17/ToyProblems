

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // Your code here.
  // Assign the first comparator  
// debugger;

var scanSwap = function() {
  for (var i = 0, j = 1; j < array.length; i++, j++) {
    var first = array[i]; 
    var second = array[j]; 
    var test = false; 

    if (first <= second) {
      continue; 
    } else if (first > second) {
      var temp = array[i]; 
      array[i] = array[j]; 
      array[j] = temp; 
      test = true; 
      break; 
    }
  }
  return test; 
}


for (var i = 0; i < array.length; i++) {
  if (scanSwap() === true) {
    i = 0; 
  }
}
  // Return the new mutated array
  return array; 
}


// var test = bubbleSort([-10, -10.1, 2, 4, 20, 299]); 
// console.log(test); 
