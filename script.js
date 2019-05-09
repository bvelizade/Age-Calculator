// var userName = prompt("what is your name?");
// var surName = prompt("What is your surname?");
// var age = prompt("How old are you?");
// console.log("Your full name is " + userName + " " + surName);
// console.log("You are " + age + " years old");

var age = prompt("What is your age?");
var days = age * 365.25
alert(age +" years is roughly " + days + " days");


// var age = 1
// if(age % 2 == 1) {
// console.log("Your age is odd");
// }

// else {
// 	console.log("Your age is even");
// } 


var age = 10
if (age/Math.sqrt(age) == Math.sqrt(age)) {
	console.log("Perfect Square");
}

else {
	console.log("Not a perfect square");
}