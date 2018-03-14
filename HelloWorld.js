// //Data Types
// console.log("Hello World");
// String
// console.log(3);
// Number
// console.log(true);
// Boolean
//
//
// //Defining Variable
// myvariable = "hello world";
// console.log(myvariable);
//
// //working with variable
// myname = 'Nisha';
// foodtype = 'apples';
// numbereaten = 3;
// numbertotal = 7;
// mystatement = myname + " ate " + numbereaten + " " + foodtype + ".";
// console.log(mystatement);
//
//
// myname = 'Asha';
// foodtype = 'pineapple';
// numbereaten = 9;
// numbertotal = 20;
// mystatement = myname + " ate " + numbereaten + " " + foodtype + "," + " leaving " + (numbertotal - numbereaten) + " " + foodtype + " leftover " + ".";
// console.log(mystatement);
//
//
// //Arrays and logic statements
// myArray = new Array("Nisha", "Asha", "Abha", "Bibha", "Punam");
// console.log(myArray);
//
//
// myname = 'Asha';
// foodtype = 'pineapple';
// numbereaten = 9;
// numbertotal = 20;
// myArray = new Array("Nisha", "Asha", "Abha", "Bibha", "Punam");
// for (i = 0; i < myArray.length; i++) {
//   console.log(myArray[i] + " ate " + " " + (numbertotal - i) + " " + foodtype + ".");
// }
//
// myname = 'Asha';
// foodtype = 'pineapple';
// numbereaten = 9;
// numbertotal = 20;
// myArray = new Array("Nisha", "Asha", "Abha", "Bibha", "Punam");
// for (i = 0; i < myArray.length; i++) {
//   if ((numbertotal - i) > 18) {
//     console.log(myArray[i] + " ate " + " " + (numbertotal - i) + " " + foodtype + ".");
//   }
//   else {
//     console.log(myArray[i] + " " + "didn't eat enough pinepples" + ".");
//   }
// }
//
//
// myArray = new Array("Lucy", "Nisha", true);
// console.log(myArray);
//
//
// myArray = new Array("Lucy", "Nisha", true);
// console.log(myArray[1]);
//
// myArray = new Array("Lucy", "Nisha", true);
// console.log(myArray.length);
//
// myArray = new Array("Lucy", "Nisha", true);
// myArray[1] = "Asha";
// console.log(myArray);
//
// myArray = new Array(5, "Nisha", true);
// console.log(myArray[0] + 5);
//
// //adds value to the end of array
// myArray = new Array(5, "Nisha", true);
// myArray.push("hello");
// console.log(myArray);
// //
// //
// // //automatically takes off array's last value despite whatever value you specify
// myArray = new Array(5, "Nisha", true);
// myArray.pop();
// console.log(myArray);
// //
// // //adds value to the start of array
// myArray = new Array(5, "Nisha", true);
// myArray.unshift("Lucy");
// console.log(myArray);
// // //
// // //automatically takes off array's first value despite whatever value you specify
// myArray = new Array(5, "Nisha", true);
// myArray.shift();
// console.log(myArray);
// //
// //
// myArray = new Array(5, "Nisha", true);
// myArray.unshift("front");
// myArray.push("back");
// console.log(myArray);
// //
// myArray = new Array(5, "Nisha", true);
// myArray.unshift("front");
// myArray.push("back");
// console.log(myArray.length);
//
// myArray = new Array(5, "Nisha", true);
// myArray.push("K3G");
// console.log(myArray[3]);
//
//
// myArray = new Array(5, "Nisha", true);
// myArray.push("K3G");
// console.log(myArray[myArray.length - 1]);
//
//
// var favorites = ["Stranger Things", "Game of Thrones", "Mr Robot"];
// favorites.push("Twilight");
// console.log(favorites[favorites.length - 3]);
//
//
// myArray = new Array(5, "Nisha", true);
// myArray[3] = "K3G";
// console.log(myArray);
//
//
// //to reverse array
// myArray = new Array(5, "Nisha", true);
// myArray.reverse();
// console.log(myArray);
//
// //
// myArray = new Array(5, "Nisha", true);
// temp = myArray[2];
// temp1 = myArray[0];
// myArray[0] = temp;
// myArray[2] = temp1;
// console.log(myArray);
//
//
// myArray = new Array(5, "Nisha", true);
// temp = myArray[myArray.length - 1];
// temp1 = myArray[0];
// myArray[0] = temp;
// myArray[myArray.length - 1] = temp1;
// console.log(myArray);
//
//
// myArray = new Array(5, "Nisha", true);
// console.log(myArray.length);
//
// //Understanding functions and making a guessing game
//
//
// perfectnumber = 12;
// function checkApples(numberofapples){
//   if(numberofapples===perfectnumber){
//     console.log("you ate perfect number of apples");
//   }
//   else if (numberofapples<perfectnumber){
//     console.log("you didn't eat perfect number of apples");
//   }
//   else if(numberofapples>perfectnumber){
//     console.log("you ate enough number of apples");
//   }
//   else
//     console.log("I don't know what are you talking about");
//
// }
//
// checkApples(18);
//
// function checkAge(age) {
//   if (age >= 13) {
//     console.log("valid user")
//   }
// }
//
// checkAge(13);
//
//
// function checkAge(age) {
//   if (age >= 13) {
//     console.log("valid user");
//   }
//   else {
//     console.log("invalid user");
//   }
// }
//
// checkAge(12);
//
//
// function isdouble(numone, numtwo) {
//   if (numone == 2 * numtwo) {
//     console.log("isdouble : true");
//   }
//   else {
//     console.log("isdouble : false");
//   }
// }
//
// isdouble(8, 2);
//
//
// function strSize(str) {
//   if (str.length > 10) {
//     console.log("long");
//   }
//   else if (str.length > 5) {
//     console.log("medium");
//   }
//   else {
//     console.log("short");
//   }
// }
//
// strSize("divya sinha");
//
//
// function sumOfMultiple(num) {
//   var startTime = new Date().getTime();
//   var sum = 0;
//   var addition = [];
//   for (i = 0; i < num; i++) {
//     if (i % 3 == 0) {
//       addition.push(i);
//     }
//   }
//
//   for (i = 0; i < num; i++) {
//     if (i % 5 == 0 && i % 3 != 0) {
//       addition.push(i);
//     }
//   }
//   for (i = 0; i < addition.length; i++) {
//     sum = sum + addition[i];
//   }
//   var endTime = new Date().getTime();
//   console.log('Total time taken ', endTime - startTime)
//
//   return sum;
// }
//
// //var result = sumOfMultiple(10);
// //console.log('Sum of Multiple for 10 is ', result);
//
//
// console.log('%s Sum of Multiple for 10 is  ', new Date(), sumOfMultiple(10));
// console.log('%s Sum of Multiple for 1000000 is  ', new Date(), sumOfMultiple(100000000));


function piggyTotal(quarters, dimes, nickels, pennies){
  quartersone = 25;
  dimesone = 15;
  nickelsone = 10;
  penniesone = 5;
quarterstotal = quartersone * quarters;
dimestotal = dimesone* dimes;
nickelstotal =  nickelsone*nickels;
penniestotal = penniesone*pennies;
return quarterstotal+ dimestotal +   nickelstotal + penniestotal;
}

console.log("$"+ piggyTotal(3, 4, 6, 1));

