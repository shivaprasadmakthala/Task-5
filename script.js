//a. print odd numbers in an array
// Anonymous function 

// let arr = [1,2,3,4,5,6,7,8,9];
// let odds = [];

// let OddNumber = function(arr) {
// for(let  i=0; i<arr.length; i++){
//     if(arr[i]%2 !==0){            //if array of i divided by 2 gives remainder not equal to zero then it is said to be odd number
//         odds.push(arr[i]);
//     }
// }
//  console.log(odds);
// }
// OddNumber(arr); //output: [ 1, 3, 5, 7, 9 ]

// IIFE 

// let arr = [1,2,3,4,5,6,7,8,9];
// let odds = [];

// (function(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2 !==0){
//             odds.push(arr[i]);
//         }
//     } console.log(odds);
// })(arr); // output: [ 1, 3, 5, 7, 9 ]

// Arrow function 

// let arr = [1,2,3,4,5,6,7,8,9];
// let odds = [];

// let OddNumber = (arr) => {
//     for(let  i=0; i<arr.length; i++){
//         if(arr[i]%2 !==0){
//             odds.push(arr[i]);
//         }
//     }
//      console.log(odds);
//     }
//     OddNumber(arr);  //output => [ 1, 3, 5, 7, 9 ]


// b. Convert all the strings to title caps in a string array 
// anonymous function
// let titleCase = function(str){
//     str = str.toLowerCase().split(' ');
//     for(let i=0; i<str.length; i++){
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
// console.log(titleCase("heLlo woRLd")); // output: Hello World

//IIFE 
// (function(str){
//     str = str.toLowerCase().split(' ');
//     for(let i=0; i<str.length; i++){
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     console.log(str.join(' '));
// })("heLlo woRLd"); //output : Hello World

//Arrow Function
// let titleCase = (str) => {
//     str = str.toLowerCase().split(' ');
//     for(let i=0; i<str.length; i++){
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
// console.log(titleCase("heLlo woRLd")); // output=> Hello World

// c. Sum of all numbers in an array
//anonymous function 
// let arr = [2,5,8,10,12,5];
// let add = function(value){
//     let sum = 0;
//     value.forEach(function(number){
//         sum += number;
//     })
//     return sum;
// }
// console.log(add(arr)); // output: 42

//IIFE
// let arr = [2,5,8,10,12,5];
// (function(value){
//     let sum = 0;
//     value.forEach(function(number){
//         sum += number;
//     })
//     console.log(sum);
// })(arr); // output: 42

//arrow function 
// let arr = [2,5,8,10,12,5];
// let add = (value) => {
//     let sum = 0;
//     value.forEach(function(number){
//         sum += number;
//     })
//     return sum;
// }
// console.log(add(arr)); // output=> 42

// d. Return all the prime numbers in an array
//anonymous function
// let array = [2,3,5,7,9,11,23,29,35,53,67,70];
// let isPrime = function(num){
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num % i === 0){
//             return false;
//         }
//     } 
//     return num>1;
// }
// console.log(array.filter(isPrime)); // output: [2, 3, 5, 7, 11, 23, 29, 53, 67]

//arrow function
// let array = [2,3,5,7,9,11,23,29,35,53,67,70];
// let isPrime = (num) => {
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num % i === 0){
//             return false;
//         }
//     } 
//     return num>1;
// }
// console.log(array.filter(isPrime)); //output=> [2, 3, 5, 7, 11, 23, 29, 53, 67]

// e. Return all the palindromes in an array

// var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip', 'peep', 'deed'];
// let isPalindrome = function (input) {
// var arr = [];
// var str = input.slice(0);
// var pal = str.toString().split("").reverse().join("").split(",");//converting every element into string by<.toString> and by reverse,join,split into reverse spelled word
// for (let i = 0; i < input.length; i++) {
//   for (let k = 0; k < pal.length; k++) {
//     if (input[i] == pal[k]) {  //comparing each string with reverse spelled string
//       arr.push(input[i])
//     }
//   }
// }
// return arr;
// }
// console.log(isPalindrome(words)); // output: [ 'racecar', 'pineenip', 'peep', 'deed' ] 

//IIFE
// var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip', 'peep', 'deed'];
// (function (input) {
// var arr = [];
// var str = input.slice(0);
// var pal = str.toString().split("").reverse().join("").split(",");
// for (let i = 0; i < input.length; i++) {
//   for (let k = 0; k < pal.length; k++) {
//     if (input[i] == pal[k]) {  
//       arr.push(input[i])
//     }
//   }
// }
// console.log(arr);
// })(words);  // output: [ 'racecar', 'pineenip', 'peep', 'deed' ]

//arrow function
// var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip', 'peep', 'deed'];
// let isPalindrome = (input) => {
// var arr = [];
// var str = input.slice(0);
// var pal = str.toString().split("").reverse().join("").split(",");
// for (let i = 0; i < input.length; i++) {
//   for (let k = 0; k < pal.length; k++) {
//     if (input[i] == pal[k]) {  
//       arr.push(input[i])
//     }
//   }
// }
// return arr;
// }
// console.log(isPalindrome(words));  //output=> [ 'racecar', 'pineenip', 'peep', 'deed' ]

//f. Return median of two sorted arrays of the same size 

//anonymous function
// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let isMedian = function(arr1, arr2){
//     let totalArray = [...arr1,...arr2].sort((a,b) => a-b); //adding the two arrays and sorting them in ascending order
//     let median = Math.floor(totalArray.length)/2; // //since we are indicating middle index,to convert decimel into whole no. we use <.floor>
//     let result = (totalArray[median]+totalArray[median-1])/2; adding two middle nos of totalArray and dividing by 2 which gives median 
//     return result;
// }
// console.log(isMedian(num1, num2)); // output: 3.5

//IIFE 
// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// (function(arr1, arr2){
//     let totalArray = [...arr1,...arr2].sort((a,b) => a-b);
//     let median = Math.floor(totalArray.length)/2;
//     let result = (totalArray[median]+totalArray[median-1])/2;
//     console.log(result);
// })(num1, num2); // output: 3.5


//g. Remove duplicates from an array
//anonymous function 

// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
 
// let removeDuplicates = function(str){
//     let sortArray = [...new Set(str)]; // <Set> is used to sort many times occuring elements by uniqueness
//     console.log(sortArray);
// }
// removeDuplicates(arr); //output : [ 'apple', 'mango', 'orange' ]

//IIFE
// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// (function(str){
//     let sortArray = [...new Set(str)]; 
//         console.log(sortArray);
    
// })(arr); // output: ['apple', 'mango', 'orange']


//h. Rotate an array by K times
//anonymous function

// let nums = [1, 2, 3, 4, 5];
// let k = 3;
// let rotateArray = function(nums, k){
//     for(let i=0; i<k; i++){
//         nums.unshift(nums.pop());
//     }
//     return nums;
// }
// console.log(rotateArray(nums, k)); // output: [3, 4, 5, 1, 2]

// IIFE 
let nums = [1, 2, 3, 4, 5];
let k = 3;
(function(nums,k){
    for(let i=0; i<k; i++){
                nums.unshift(nums.pop());
            }
            console.log(nums);
})(nums, k);   // output => [ 3, 4, 5, 1, 2 ]


 






