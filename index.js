//#1 COUNTING SHEEP
function countSheep(num) {
  if(num === 0) {
    return 'All sheep jumped over the fence';
  }
  else {
    console.log(num + ': Another sheep jumps over the fence')
    countSheep(num - 1)
  }
}
countSheep(3)

//#2 Power Calculator
function powerCalc(base, exp) {
  if(exp < 0) {
    return 'exp should be >= 0'
  }
  if(exp === 0) {
    return 1;
  }
  else {
    return base * powerCalc(base, exp - 1)
  }
}

powerCalc(10, 2);

//#3 Reverse String
function reverseString(string) {
  if (string.length === 1)
  return string[0];

  const char = string[string.length - 1];

  return char + reverseString(string.substring(0, string.length-1));
  
}

console.log(reverseString('cromulent'))

//#4 nth Triangular Number
function triangularNumber(n) {
  if (n < 1)
  return 'n is Untriangularable';
  
  if (n === 1)
  return 1;
  
  return n + triangularNumber(n-1)
}

console.log(triangularNumber(5))