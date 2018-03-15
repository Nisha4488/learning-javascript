//Some for loop problems

function problem1() {
  var oneToTen = [];

  for ( var i=1; i<11; i++){
    oneToTen.push(i);
  }
  return oneToTen;
}
console.log(problem1(5));

// Write a for loop within this function that will create this array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


function problem2(){
  var TenToOne= [];
  for(var i=10; i>0; i--){
    TenToOne.push(i);
  }
  return TenToOne
}

console.log(problem2());


// Write a for loop within this function that will create this array: [1, 3, 5, 7, 9]
function problem3(){
  var OddNumbers = [];
  for(i=1;i<10;i+=2){

    OddNumbers.push(i);
  }
  return OddNumbers;
}
console.log(problem3());


// Write a for loop within this function that will create this array: [2, 4, 6, 8, 10]
function problem4(){
  var EvenArray =[];
  for(i=2;i<=10;i+=2){
    EvenArray.push(i);
  }
  return EvenArray;
}
console.log(problem4());

// Write a for loop within this function that will create this array: [3, 6, 9]

function problem5(){
  var MultipleThree =[];

    for(i=3; i<=9; i+=3){
      MultipleThree.push(i);


  }
  return MultipleThree;
}
console.log(problem5());


// Write a for loop within this function that will add only names that start with "J"
// to the 'jNamesArray'. Assume that all first names will start with a capital letter.

function problem6(arr){
  var jNamesArray =[];
  for(i=0;i<arr.length;i++) {
    if (arr[i][0] === "J") {
      jNamesArray.push(arr[i]);
    }
  }
    return jNamesArray;

}

console.log(problem6(["jbjuygu", "hbgbu", "Jhbjh", "Jiuhi"]));

// Write a for loop that adds all of the values in the array together

function problem7(arr){
  var SumTotal=0
  for(i=0;i<arr.length;i++){
    SumTotal+=arr[i];
  }
  return SumTotal;
}

console.log(problem7([1,6,8,10]));


// Write a for loop that replace each letter (UPPERCASE) in the alphabet from A to Z into the alphabetArray.

function problem8(){

  var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(i=0; i<alphabetArray.length;i++){
    alphabetArray[i] = alphabetArray[i].toUpperCase();
  }
  return alphabetArray;
}
console.log(problem8());



// Write a for loop that replace each letter (UPPERCASE) in the alphabet from Z to A into the alphabetArray.

function problem9() {
  var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var flippedAplphabet =[];
  for (i = alphabetArray.length - 1; i >= 0; i--) {
    flippedAplphabet.push(alphabetArray[i].toUpperCase());
  }
  return flippedAplphabet;
}

console.log(problem9());