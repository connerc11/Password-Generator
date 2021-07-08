// Assignment code here
// Creating 4 arrays


var specialCharacters = ['!', '@', '$', '%', '^', '&', '*', '(', ')', '_', '-', ',', '+', ',', '=']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


var possCharacterarr = []

var passArra = []

//this is an empty array, in order to combine all the characters
var finalPassword = passArra

//this is a function tht is providing window questions 
function askQuestions() {
  //this is to confirm that they want upper case 
  var passLength = prompt("How many characters would you like?")
  if (passLength < 8 || passLength > 128) {
    alert("Please select a password between 8-128 characters!");
    return askQuestions();
  }
  var upCaseQuestion = window.confirm("Would you like your password to have upper case letters");
  if (upCaseQuestion) {
    possCharacterarr = possCharacterarr.concat(upperCase);
    console.log(possCharacterarr)
  }
  //this is to confirm if they want lower case 
  var lowCaseQuestion = window.confirm("Would you like your password to have lower case letters");
  if (lowCaseQuestion) {
    possCharacterarr = possCharacterarr.concat(lowerCase);
    console.log(possCharacterarr)
  }

  //this is to confirm if they want numbers
  var numQuestion = window.confirm("Would you like your password to have numbers");
  if (numQuestion) {
    possCharacterarr = possCharacterarr.concat(numbers);
    console.log(possCharacterarr)
  }

  //this is going to confirm they want special characters
  var specialCharacterQuestion = window.confirm("Would you like your password to have special characters");
  if (specialCharacterQuestion) {
    possCharacterarr = possCharacterarr.concat(specialCharacters);
    console.log(possCharacterarr)
  }
  //this is to make sure that the questions are followed properly
  if (specialCharacterQuestion === false && numQuestion === false && lowCaseQuestion === false && upCaseQuestion === false) {
    alert("Must select one character type!");
    return askQuestions();
  }
  

  var options = {
    passLength: passLength,
    possCharacterarr: possCharacterarr
  }

  return options;
}

//This will generate a random password based on the array
function generatePassword() {
  var options = askQuestions();
  for (var i = 0; i < options.passLength; i++){
    var index = Math.floor(Math.random() * options.possCharacterarr.length);
   var digit = options.possCharacterarr[index];
   console.log(passArra)
   passArra.push(digit)
  }
  return passArra.join("")
}


// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
