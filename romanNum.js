function convertToRoman(num, romanNumber) {
  romanNumber = romanNumber || ''; 
  if(num >= 1000) {
    romanNumber += 'M';
    num -= 1000;
    return convertToRoman(num, romanNumber);
  } else if(num >= 500) {
    romanNumber += 'D';
    num -= 500;
    return convertToRoman(num, romanNumber);
  } else if(num >= 100) {
    romanNumber += 'C';
    num -= 100;
    return convertToRoman(num, romanNumber);
  } else if(num >= 50) {
    romanNumber += 'L';
    num -= 50;
    return convertToRoman(num, romanNumber);
  } else if(num >= 10) {
    romanNumber += 'X'; 
    num -= 10; 
    return convertToRoman(num, romanNumber);
  } else if(num >= 5) {
    romanNumber += 'V';
    num -= 5; 
    return convertToRoman(num, romanNumber);
  } else if(num > 0) {
    romanNumber += 'I';
    num -= 1; 
    return convertToRoman(num, romanNumber);
  }
  console.log('NUMBER REMAIN', num);
  console.log('ROMAN NUMBER', romanNumber);
  return romanNumber;
}

console.log(convertToRoman(500));



