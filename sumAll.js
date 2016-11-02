
function sumAll(arr) {
  if(arr.length > 2) {
    return 0; 
  }
  var sum = 0; 
  var max = Math.max(...arr); 
  var min = Math.min(...arr); 
  
  for(min; min <= max; min++) {
    sum += min;
  }
  
  return sum; 
  
}

sumAll([1, 4]);