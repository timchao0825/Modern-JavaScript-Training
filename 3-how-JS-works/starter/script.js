///////////////////////////////////////
// Lecture: Hoisting
// calcAge(1991);
// function  calcAge(year) {
//     console.log(2016 - year);
// }
// calcAge(1991);









///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }

// Hello!John


///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
var a = 123123;
var john = {
    name:'john',
    yearOfBirth: 1990,
    calcAge : function(){
        // console.log(this);
        console.log(2019 - this.yearOfBirth);
        // function innerFunction(){
        //     console.log(this);
        //     console.log(a);
        // }
        // innerFunction();
    }
}
john.calcAge();

var mike = {
    name:'john',
    yearOfBirth : 2000
}
mike.calcAge = john.calcAge;
mike.calcAge();





