function diamond(n){
  if(n === null || n <= 2) {
    return null;
  }
  var diamond = "";  
  
  while(n > 0) {
    diamond += "\n";
    for(var i = n; i > 0; i--) {
      diamond += "*";
    }
    diamond += "\n";
    n -= 2;
  }
  return diamond;
}

console.log(diamond(3));
