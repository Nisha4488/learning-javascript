


//Arrays

 var firstArr = [5];
console.log(firstArr);

 var firstArr = [5, "john", true];
 console.log(firstArr);

// //Make an array with your pets name and your name and a boolean.
var firstArr = ["Lucy", "john", true];

var myArr = ["Lucy" , "Nisha", true, "hello"];
console.log(myArr);
//
// //just print your name from array
//
 var myArr = ["Lucy" , "Nisha", true, "hello"];
 console.log(myArr[1]);
// //
var firstArr = [5, "john", true, "hello"];
firstArr[0] =7;
console.log(firstArr);
//
//
//
// //write me  a function called addToFirst that takes an array and adds 5 to the first item in the array

 arr1 = [3,4,5,6];
function addToFirst(arr){
arr[0] = arr[0]+5;
   return arr;
 }
 console.log(addToFirst(arr1));



var test = [4,8];

function addToFirst(arr) {
  arr[0]+=5;
  return arr;
}
var newArr =addToFirst(test);
console.log(newArr);



//name of Arr.push(value);
var arr = [4,8];
arr.push(13);
console.log(arr);

// //to take off last elenents of the array
//
// //
var arr = [4,8];
arr.pop();
console.log(arr);

// //
// // //to add elements to starting
var arr = [4,8];
arr.unshift(13);
console.log(arr);

// //
// // //to take off elemts from starting
// // arr.shift();
//
//
// //add the front to the front and back to the back of array.
// // function addToEnds(front, back, arr)
// //
var test =[4,8];
function addToEnds(arr) {
  arr.unshift("front");
  arr.push("back");
  return(arr);
}
var newArr = addToEnds(test);
console.log(newArr);
//
//
//
// //to check number of elements in array
var arr =[4,8, 'austin'];
console.log(arr.length);

var arr =[4,8, 'austin', 8, "this is string"];
console.log(arr[arr.length - 1]);


// //Add your favorite movie to the end of this array and then print your favorite movie. Do this without just adding it/ hard coding
//
var favorites = ["Stranger Things", "Game of Thrones", "Mr Robot"];
favorites.push("Twilight");
console.log(favorites[favorites.length - 1]);

// //favorites.length - 1 always gives you the index of the last item
//
//
