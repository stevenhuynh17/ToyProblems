var nthFibonacci = function (n, sum, currNum, prevNum, index) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1; 
  }
  
  var sum = sum || 0; 
  var currNum = currNum || 1;
  var prevNum = prevNum || 0;
  var index = index || 1; 


  if (index === n) {
    return sum; 
  }

  sum = currNum + prevNum; 
  index++; 
  prevNum = currNum;  
  currNum = sum; 
  

  return nthFibonacci(n, sum, currNum, prevNum, index); 
  
  
};

console.log(nthFibonacci(0)); // 0
console.log(nthFibonacci(1)); // 1
console.log(nthFibonacci(2)); // 1
console.log(nthFibonacci(3)); // 2
console.log(nthFibonacci(4)); // 3
console.log(nthFibonacci(5)); // 5
console.log(nthFibonacci(10)); 
console.log(nthFibonacci(20)); 
