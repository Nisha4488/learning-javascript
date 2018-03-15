//some problems using conditional statements


// Write a function called 'higherNumber' that takes two numbers and returns the higher number

function higherNumber(arr){
  if(arr[0]>arr[1]){
    return arr[0];
  }
  else
  {
    return arr[1];
  }
}

console.log(higherNumber([3,4]));

/* Write an function "inRelationToThree" that takes one parameter
 - If the number is greater than 3, return "greater than three".
 - If the number is less than or equal to 3 and greater than or equal to 0, return "greater than zero and less than or equal to three"
  -If it is anything else, return "is less than zero".


*/

function inRelationToThree(num){
  if(num>3){
    return "greater than three";
  }
  else if (num<=3 && num >=0){
    return "greater than zero and less than or equal to three";
  }
  else
  {
    return "is less than zero";
  }
}
console.log(inRelationToThree(45));

// Write a function called "fizzBuzz" which pushes the integers from 1 to 15 into an array that will be returned when it is done. For multiples of three push "Fizz" instead of the number and for the multiples of five push "Buzz". For numbers which are multiples of both three and five push "FizzBuzz".
function fizzBuzz(){
  var NewArr = [];
  for(i=3;i<16;i++) {
  if(i%3==0 &&i%5==0){
      NewArr.push('FizzBuzz')
    }
    else if (i % 3 == 0) {
      NewArr.push('Fizz');
    }
    else if(i%5==0){
      NewArr.push('Buzz');
    }

  }
  return NewArr;
}
console.log(fizzBuzz());


// Write a function called "sleepings", it should accept one parameter, an integer called "hours". Write a conditional statement inside of the function. If the number of hours is greater than or equal to 8, return "Enough". If it is less than that, return "Not Enough".

function sleepings(hours){
  if(hours>=8){
    return "Enough";
  }
  else {
    return "Not Enough"
  }
}
console.log(sleepings(6));