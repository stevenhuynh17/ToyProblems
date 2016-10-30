// MY SOLUTION
function sumArray(array) {
  if(array === null || array.length <= 2) {
    return 0;
  } else {
    console.log(array);
    array.sort((a, b) => {
      return a - b;
    });
    var sliced = array.slice(1, array.length - 1);
    return sliced.reduce((a, b) => {
      return a + b;
    });
  }
}


// COMMUNITY SOLUTION

sumArray = array => array ? array.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
// a function where if the array is valid, perform the function otherwise return 0