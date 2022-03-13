// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name with its value being 'Dane' 
// conditional statement , if the variable name is equal to Mary the console will log "Hi Mary". and if the variable name is not equal to mary than it will log "How do you do?"
//in this case the console will log "How do you do?" because the variable name does not equal mary it equals Dane
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//we create a variable named secret with an undefined value
// we create a variable named code with a value of 123.
//now we create an if statement that will declare the value of secret to 'super' 
//and will assign the new value of code to be its original value times 2 which is 246
//we now create a second if statement that will assign the value of secret to 'duper' if the value of code is greater than 250 
//which it is not, the value of code thanks to our first if statement is 246 so than means that the value of secret will be 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we create a variable named isStudent with a boolean value of True
// create another variable named age with a value of 34
//another variable named zip with a value of 55407
// conditional statement 
//p1: If the value of isStudent is equal to true AND the value of zip is greater than 80000 the console will log'You're a student on the West Coast!'
//p1: ELSE
//p2: If the value of  isStudent is equal to the boolean false OR the value of age is less than 30 the console will log 'What are your hobbies?'
//p2: ELSE
//p3 If the value of isStudent is equal to the boolean True the console will log "welcome to Prime". This is the case. and the console will Log "Welcome to Prime"
//p4 ELSE
//p4 Had the last else if statement not satisfied than the console would log 'How about the weather'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/


//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red'; 
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
} 
////////ANSWER BELOW//////////

- FIX colorOne to 'blue'  
- FIX colorTwo to 'red'
- FIX add line colorTwo = 'purple';
Working code would look like :

let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';




*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
///////////ANSWER BELOW/////////////
-Fix change  || to && as the instructions call for 'AND' NOT 'OR'
-Working code would look like:

let temp = 40;
const time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}


*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
///////////ANSWER BELOW///////////////////


-FIX (minAge <= age) to (age >= minAge) 
-FIX console.log('no entry'); to console.log('enter')
-the instructions dont say anything about an else statement so personally 
I would remove it as there could be an instance where you may not wont to log unless value is ===
 but to fix the else statement IF needed we would 
 -FIX console.log('enter); to console.log('no entry');

-Working code would look like:

let age = 21;
const minAge = 21;

if(age >= minAge) {
  console.log('enter');
}
OR if the else statement IS wanted we could write the code like this:

let age = 21;
const minAge = 21;

if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}

*/

