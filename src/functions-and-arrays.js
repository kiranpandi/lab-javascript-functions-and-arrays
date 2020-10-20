// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2){
    if(num1 > num2){
      return num1
    }
    else if(num2 > num1){
      return num2
    }
    else{
      return num1
    }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  let lengthyWord = words[0];
  if(words.length == 0){
    return null
  }
  else if(words.length == 1){
    return words[0]
  }
  else{
  for(i=1;i<words.length;i++){
      if(words[i].length > lengthyWord.length){
        lengthyWord = words[i];
      }
  }
  return lengthyWord;
 }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  let sum = 0;
  if(numbers.length == 0){
    return 0
  }
    for(i=0;i<numbers.length;i++){
      sum = sum + numbers[i]
    }
    console.log(sum);
    return sum;
}

function add(mixedArr){
  let sum = 0;
    for(i=0;i<mixedArr.length;i++){
      if(typeof(mixedArr[i]) == 'boolean'){
        if(mixedArr[i] == true){
          sum=sum+1;
        }
        else{
          sum = sum + 0;
        }
      }
      else if(typeof(mixedArr[i]) == 'string'){
        sum = sum + mixedArr.length;
      }
      else if(typeof(mixedArr[i]) == 'number'){
        sum = sum + mixedArr[i];
      }
    }
    return sum;
}


// Progression #4: Calculate the average
let sum = netPrice(numbers);
let avg = sum/numbers.length;
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  let sum = netPrice(numbersAvg);
  return sum/numbersAvg.length;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  let sum = 0;
    for(i=0;i<wordsArr.length;i++){
      sum += wordsArr[i].length;
    }
    return sum/wordsArr.length;
}

// function avg(arr){
//   let sum = add(arr);
//   return sum/arr.length;
// }


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
  let newArray = wordsUnique.filter( (string,index) => {
    return wordsUnique.indexOf(string) === index;
  } )
  return newArray;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,searchWord){
  let flag =0;
  for(i=0;i<wordsFind.length;i++){
    if(searchWord === wordsFind[i]){
      flag = 1;
    }
  }
  if(flag == 1){
    return true;
  }
  else{
    return false;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount,searchWord){
  let count = 0;
  for(i=0;i<wordsCount.length;i++){
    if(searchWord === wordsCount[i]){
      count++;
    }
  }
  return count;
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
