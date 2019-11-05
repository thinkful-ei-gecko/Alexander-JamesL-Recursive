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

//#5 String Splitter

function stringSplitter(string, splitter) {
  
  let splitIndex = string.indexOf(splitter)
  
  if (splitIndex === -1)
  return [string]
  
  return [string.slice(0, splitIndex)]
    .concat(stringSplitter(string.slice(splitIndex + splitter.length), splitter));
}


console.log(stringSplitter('02/20/2020', '/'))

//#6 fibonacci

function fibonacci(n) {
  if (n <= 0)
  return 0;
  if (n <= 2)
  return 1;
  
  return fibonacci(n-1) + fibonacci(n-2)
  }
  
console.log(fibonacci(7))

//#7 FACTORIAL
function factorial(num) {
  if(num === 1){
    return 1
  }
  return num * factorial(num-1)
}

console.log(factorial(5))

//#8-#9 Maze
function wayOut(maze, posX, posY, path) {
  //make sure maze path is within array bounds
  if (posY < 0) {
    return;
  }
  if (posX < 0) {
    return;
  }
  if (posY === maze.length) {
    return;
  }
  if (posX === maze[posY].length) {
    return;
  }
  if(maze[posY][posX] === '*'){
    return;
  }
  if(maze[posY][posX] === 'e'){
    console.log('Found a way out', path);
    return;
  }
  maze[posY][posX] = '*'

  wayOut(maze, posX + 1, posY, [...path, 'R']);
  wayOut(maze, posX - 1, posY, [...path, 'L']);
  wayOut(maze, posX, posY + 1, [...path, 'D']);
  wayOut(maze, posX, posY -1, [...path, 'U']);

  maze[posY][posX] = ' ';
}

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
]

console.log(wayOut(maze, 0, 0, []))

//#10 ANAGRAMS
function anagram(pref, str) {
  if(str.length <= 1) {
    console.log(`Anagram is ${pref}${str}`)
  }
  else {
    for(let i=0; i<str.length; i++){
      let currChar = str.substring(i, i+1)
      let prevChar = str.substring(0, i)
      let afterChars = str.substring(i+1)
      anagrams(pref + currChar, prevChar+afterChars)
    }
  }
}
console.log(anagram(' ', 'dogs'))

//#11 ORGANIZING CHART
function orgChart(chart, depth) {
  let indent = ' '.repeat(depth * 4)
  Object.keys(chart).forEach(key => {
    orgChart(chart[key], depth + 1)
  })
}

let organization = {
  "Zuckerberg": {        
      "Schroepfer": {
          "Bosworth": {
              "Steve":{},
              "Kyle":{},
              "Andra":{}
          },
          "Zhao": {
              "Richie":{},
              "Sofia":{},
              "Jen":{}
          },
          "Badros": {
              "John":{},
              "Mike":{},
              "Pat":{}
          },
          "Parikh": {
              "Zach":{},
              "Ryan":{},
              "Tes":{}
          }
      },
      "Schrage": {
          "VanDyck": {
              "Sabrina":{},
              "Michelle":{},
              "Josh":{}
          },
          "Swain": {
              "Blanch":{},
              "Tom":{},
              "Joe":{}
          },
          "Frankovsky": {
              "Jasee":{},
              "Brian":{},
              "Margaret":{}
          }
      },
      "Sandberg": {
          "Goler": {
              "Eddie":{},
              "Julie":{},
              "Annie":{}
          },
          "Hernandez": {
              "Rowi":{},
              "Inga":{},
              "Morgan":{}
          },
          "Moissinac": {
              "Amy":{},
              "Chuck":{},
              "Vinni":{}
          },
          "Kelley": {
              "Eric":{},
              "Ana":{},
              "Wes":{}
          }
}}};
    
console.log(orgChart(organization, 0));

//#12 BINARY
function binaryRep(n) {
  if(n<=0){
    return ''
  }
  let bin = n % 2
  return binaryRep(Math.floor(n/2)) + bin
}