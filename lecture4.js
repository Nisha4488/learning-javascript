//{}--denotes block of code
function checkAge(age){
  if(age>=13){
    console.log("valid user")
  }
// }
//
// checkAge(13);


//

function checkName(String){
  if(String == "Nisha"){
    console.log("You're in");
  }
}

checkName("Nisha");



function checkAge(age){
   if(age>=13){
     console.log("valid user");
   }
   else
   {
     console.log("user too young");
   }
 }

checkAge(13);


function checkName(String){
  if(String == "Nisha"){
    console.log("You're in");
  }
  else
  {
    console.log("you're not in");
  }
}

checkName("Asha");

function checkAge(age){

if (age>=65){
  console.log("senior special");
}

 else  if(age>=13){
     console.log("valid user");
}
else{
   console.log("user too young");
}
}
// //
// // checkAge(13);


//update this function so that it returns the string instead of console.loging it


function checkAge(age){
//
// if (age>=65){
//   return("senior special");
// }
//
//  else  if(age>=13){
//      return("valid user");
// }
// else{
//    return("user too young");
// }
// }
//  var result = checkAge(10);
//   console.log()


  //if


  function isDouble(numOne, numTwo){
  if(numTwo == 2*numOne){
    return "true";
  }
  else
  {
    return "Not equal";
  }
  }

  var result = isDouble(4,2);
  console.log(result);


  function isDouble(numOne, numTwo){
    var doubledNum = numOne*2;
  }
    if(numTwo == 2*numOne){
      return "true";
    }
    else
    {
      return "Not equal";
    }
  }

//   var result = isDouble(4,2);
//   console.log(result);




  //

function strSize(str){
  if(str.length>10)
  {
    return "long";
  }
  else if(str.length>5){
    return "medium";
  }
  else
  {
    return "short";
  }
}

var result = strSize("Nisha");
console.log(result);


//recreate a calculator. the function


function calculator(operation, numOne, numTwo){
  if (operation === "add"){
    return numOne + numTwo;
}
else if (operation === "subtract")
{
  return numOne - numTwo;
}

else if (operation ==="multiply"){
    return numOne * numTwo;
  }
  else{
  return numOne/numTwo;
  }
}

var result =calculator("add", 2, 3);
console.log(result);


//

function evenSquare(num){

  if (num % 2 == 0){
    return num * num;
  }
  else
    return num *2;
}

var result = evenSquare(3);
console.log(result);


//evenSquare(50)


function getlargest(arr){

  if (arr[0].length>arr[1].length){
      return arr[0];
    }
    else
      return arr[1];
}

getlargest('john', 'kevin');



function checkEnds(arr){
  if ((arr[0] && arr[arr.length-1]) > 10)
  {
    return "Both large";
  }
  else if ((arr[0] >10 && arr[arr.length-1]) < = 10)){
    return "Front Large"
  }
    else if ((arr[0] < = 10 && arr[arr.length-1]) > 10)){
    return " Back Large"
  }
  else
  {
    return "Neither Large";
  }
}

checkEnds(3,4,13);


function example(num){
  if(num >5 || num == 2){

  }
}






