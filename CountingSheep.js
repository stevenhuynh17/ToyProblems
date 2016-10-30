// MY SOLUTION
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var count = 0; 
  arrayOfSheep.forEach((sheep) => {
    if(sheep === true) {
      count++;
    }
  })
  return count;
}


// COMMUNITY SOLUTION

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length; // I suppose the filter Boolean defaults to look for true
}