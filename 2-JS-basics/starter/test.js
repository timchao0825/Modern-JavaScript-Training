
/*
* variables and data types
*/

// var firstName = 'john';
// var lastName = "smith";
// var fullAge = true;
// var age = 28;
// console.log(firstName + ' ' + age);
// var job , isMarried;
// job = 'teacher';
// isMarried = false;
// ----------------------------------------------------------------------
/*
* basic operators
*/

// var yearJohn = 2018 - 28;
// var yearmark = 2018 - 33;
// var compareolder = yearJohn > yearmark;
// console.log(compareolder);
// console.log(typeof compareolder);
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);
// true
// ----------------------------------------------------------------------

// var markHeight = 1.69;//meters
// var markMass = 78;//kg
// var johnHeight = 1.92;//meters
// var johnMass = 92;//kg
// var bmiMark = markMass / (markHeight * markHeight);
// var bmiJohn = johnMass  / (johnHeight * johnHeight);
// var compareBMI = bmiMark > bmiJohn;
// console.log(compareBMI);

// var age = 22;
// var drink = age >= 18 ? 'bear' : 'juice';
// console.log(drink);
// ----------------------------------------------------------------------
/*
* truthy and falsy
*/

// falsy values: undefined , null , 0 , '' , NaN
// truthy values: NOT falsy values

// var height;
// height = 0;// is falsy
// // height || height == 0 is truthy
// if(height){
//   console.log('variable is defined');
// }else{
//   console.log('variable is not defined');
// }

// // javascript equality operators
// height = 23;
// if(height="23"){
//   console.log('the == operator does type coercion!');
// }
/*
23 == '23' >>>>> true
23 === '23' >>>>> false
*/

// code challenge 
// var johnTeamScore = (89 + 120 + 103) / 3;
// var mikeTeamScore = (116 + 94 + 123) / 3;

// var maryTeamScore = (97 + 134 + 105) / 3;

// console.log(johnTeamScore , mikeTeamScore , maryTeamScore);
// if(johnTeamScore > mikeTeamScore){
//   console.log('john team win average scrore is ' + johnTeamScore);
// }else{
//   console.log('mike team win average scrore is ' + mikeTeamScore);
// }

// if(johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore){
//   console.log('john team win average scrore is ' + johnTeamScore);
// }else if(mikeTeamScore > johnTeamScore  && mikeTeamScore > maryTeamScore){
//   console.log('mike team win average scrore is ' + mikeTeamScore);
// }else if(maryTeamScore > johnTeamScore  && maryTeamScore > mikeTeamScore){
//   console.log('mary team win average scrore is ' + maryTeamScore);
// }
 
// ----------------------------------------------------------------------
/*
* Function
*/

// function calcAge(birthyear){
//   return 2019 - birthyear;
// }
// var ageJohn = calcAge(1991);
// console.log(ageJohn);

// function yearsUntilRetirement(year,firstName){
//   var age = calcAge(year);
//   var retirement = 65 - age;
//   console.log(firstName + ' retire in ' + retirement + ' years. ');
// }
// yearsUntilRetirement(1991 , 'Tim')

// ----------------------------------------------------------------------
/*
* Function statements and expressions
*/

// Function declaration
// function whatDoYouDo(job , firstName){

// }

// function expression
// var whatDoYouDo = function(job , firstName){

// }

// ----------------------------------------------------------------------
/*
* Array
*/

// var names = ['John','Mark','Jane'];
// var years = new Array(1990 , 1969 , 1948);
// console.log(names);

// var newArray = ['john' , 'smith' , 1990 , 'teacher'];
// newArray.push('blue');
// newArray.unshift('Mr.');/* 把值塞入第一個值（最左邊） */
// console.log(newArray);
// newArray.pop(); 取出陣列值
// newArray.shift(); 第一個陣列值取出（最左邊）

// ----------------------------------------------------------------------
/*
* coding challenge 2
*/

// var totalBills = [124 , 48 , 268];
// var finalBills = new Array();
// var topsLenth = totalBills.length;

// function caculateTips (bill){
//   var percentage;
//   if( bill < 50){
//     percentage = 0.2;
//   }else if(bill >= 50 && bill < 200){
//     percentage = 0.15;
//   }else{
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// for (let index = 0; index < topsLenth; index++) {
//   var finalCount = totalBills[index] + caculateTips(totalBills[index]);
//   finalBills[index] = finalCount;
//   // if( totalBills[index] < 50){
//   //   var tipCount = totalBills[index] * 0.2;
//   //   var finalCount = totalBills[index] + tipCount;
//   //   finalBills[index] = finalCount;
//   // }else if( totalBills[index] >= 50 && totalBills[index] < 200 ){
//   //   var tipCount = totalBills[index] * 0.15;
//   //   var finalCount = totalBills[index] + tipCount;
//   //   finalBills[index] = finalCount;
//   // }else if(totalBills[index] > 200){
//   //   var tipCount = totalBills[index] * 0.1;
//   //   var finalCount = totalBills[index] + tipCount;
//   //   finalBills[index] = finalCount;
//   // }
// }

// console.log('totalBills is ' + totalBills);
// console.log('finalBills is ' + finalBills);



// ----------------------------------------------------------------------
/*
* object and properties
*/

// var object = {
//   firstName: 'john',
//   lastName:'smith',
//   birthyear : 1991,
//   family: ['jane' , 'mark','bob','emily'],
//   job:'teacher',
//   isMarried:false
// }
// console.log(object);
// console.log(object.firstName);

// var newObject = new Object();
// newObject.firstName = 'jane';
// newObject.birthyear = 1992;
// newObject['lastName'] = 'smith';
// console.log(newObject);


// ----------------------------------------------------------------------
/*
* object and methods
*/

// var object = {
//   firstName: 'john',
//   lastName:'smith',
//   birthyear : 1991,
//   family: ['jane' , 'mark','bob','emily'],
//   job:'teacher',
//   isMarried:false,
//   calcAge : function(){
//     return 2018 - this.birthyear;
//   }
// }
// console.log( object.calcAge() );
// console.log(object);
// console.log(object.firstName);

// ----------------------------------------------------------------------
/*
* conding challenge 4
*/

// BMI = mass / height^2 = mass / (height * height)
// var mark = {
//   fullname: 'mark miller',
//   mass : 78 ,
//   height: 1.75,
//   calcBmi :function(){
//     var bmi;
//     bmi = this.mass / (this.height * this.height);
//     return bmi;
//   },
// }
// var john = {
//   fullname: 'john smith',
//   mass : 85 ,
//   height: 1.81,
//   calcBmi :function(){
//     var bmi;
//     bmi = this.mass / (this.height * this.height);
//     return bmi;
//   },
// }
// if(john.calcBmi() > mark.calcBmi()){
//   console.log( john.fullname + ' Bmi is '+ john.calcBmi() +' biggher than '+mark.fullname+' Bmi '+ mark.calcBmi())
// }else if(john.calcBmi() < mark.calcBmi()){
//   console.log( mark.fullname + 'Bmi is '+ mark.calcBmi() +' biggher than '+john.fullname+' Bmi '+ john.calcBmi())
// }else{
//   console.log('their BMI are eqaul ');
// }

// ----------------------------------------------------------------------
/*
* Loop iteration
*/

// var names = ['John','Mark',1991 ,'Jane', 'true' , false];
// for (let i = 0; i < names.length; i++) {
//   if(typeof(names[i]) !== 'string'){
//     // continue;
//     // break;
//   }
//   console.log(names[i]);
// }

// ----------------------------------------------------------------------
/*
* code challenge 5
*/
function calcBill(bill){
  if(bill < 50){
    bill = bill + (bill * 0.2);
  }else if(bill < 200 && bill >= 50){
    bill = bill + (bill * 0.15);
  }else{
    bill = bill + (bill * 0.1);
  }
  return bill;
}
var originalBill = [124,48,268,180,42];
var finalBill = [];
for (let i = 0; i < originalBill.length; i++) {
  finalBill[i] = calcBill(originalBill[i]);
  console.log(finalBill[i]);
}

// var mark = {
//     bills:[124,48,268,180,42],
//     calcTips: function(){
//       this.tips = [];
//       this.finalBills = [];
//       for (let i = 0; i < this.bills.length; i++) {
//         var percentage;
//         var bill = this.bills[i];
//         if(bill < 50){
//           percentage = 0.2;
//         }else if(bill >= 50 && bill < 200){
//           percentage = 0.15;
//         }else{
//           percentage = 0.1;
//         }
//         this.tips[i] = bill * percentage;
//         this.finalBills[i] = bill + (bill * percentage);
//       }
//     }
// }
// mark.calcTips();
// console.log(mark);

// Extra
// function anothrCalcBill(bill){
//   if(bill > 300){
//     bill = bill + (bill * 0.25);
//   }else if(bill <= 300 && bill > 100){
//     bill = bill + (bill * 0.1);
//   }else{
//     bill = bill + (bill * 0.2);
//   }
//   return bill;
// }
// var anotherBill = [77 , 375 , 110 , 45];
// end session 2 course