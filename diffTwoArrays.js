function diffArray(arr1, arr2) {
  var setA = new Set(arr1),
      setC = new Set(arr2);
  
  var comboA = setA.difference(setC),
      comboB = setC.difference(setA);
  
  return [...comboA, ...comboB];
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);