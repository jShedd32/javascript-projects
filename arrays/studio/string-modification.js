const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let defaultAnswer= str.slice(3) + str.slice(0,3);
console.log(defaultAnswer)
//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity = input.question("How many letters would you like to move?")
let answers =  str.slice(quantity) + str.slice(0,quantity)
console.log(answers);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (quantity < 0){
    console.log(`Due to the input being less than the string length the answer goes to the default: ${defaultAnswer}`);
} 
else if(quantity > str.length){
    console.log(`Due to the input being greater than the string length the answer goes to the default: ${defaultAnswer}`)
}