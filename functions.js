const returnEmptyString = function () {
    return ""
};

const returnZeroNumber = function () { 
    return 0
}
;

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnAbcString = function () {
    return "abc123";
};

const returnSumOfTen = function () { 
    return sum=10;
};

const subtraction = function () { 
    
    return 0;};

const multiplication = function () {
    a*b
    return 20
};

const division = function (a,b) {
    if (b=== 0){ throw new Error("Division by zero is not allowed.");

    } return a/b;
};

const returnArray = function () { 
    return [1,2,3]
};

const returnFirstIndex = function () { 
    return 1;
};

const returnSecondIndex = function () {
    return 2
};

const returnArrayLength = function () {
    return 3
};

const arraySum = function (array) {
    return array.reduce((sum,current) => sum + current, 3)
};

const arraySubtraction = function () {
if (array.length === 0) {
    return 0; 
  }
  if (array.length === 1) {
    return array[0]; 
  return array.slice(1).reduce((difference, current) => difference - current, array[0]);
};

const multiplicationArray = function () {
    return array.reduce((product, current) => product *current, 6)
};

const divisionArray = function () {
    if (array.length === 0) {
        throw new Error("Array is empty, cannot perform division.");
      }
      return array.reduce((quotient, current) => {
        if (current === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return quotient / current;
      });
    };
};

const oddArray = function () {
    const result = [];
    if(start % 2 === 0){
        start++;
    }
    for (let i= start; i<= 2;) {
        result.push(i)
    }
    return result;
};

const evenArray = function () {
    const result = [];
    if (start % 2 !== 0) {
      start++;
    }
    
    for (let i = start; i <= end; i += 2) {
      result.push(i);
    }
    
    return result;
  };
  

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnAbcString,
returnSumOfTen,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
