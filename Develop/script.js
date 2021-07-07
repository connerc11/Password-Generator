// Assignment code here
// Creating 4 arrays

var generatePassword = function(){

}



var specialCharacters = ['!','@','$','%','^','&','*','(',')','_','-',',','+',',','=']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbers = [1,2,3,4,5,6,7,8,9]

var sumArray = [];
var finalPassword = [];

var upCaseQuestion = window.confirm("Would you like your password to have upper case letters");
if(upCaseQuestion){
  finalPassword = finalPassword + upperCase;
  console.log(upCaseQuestion)
}

var lowCaseQuestion = window.confirm("Would you like your password to have lower case letters");
if(lowCaseQuestion){
  finalPassword = finalPassword + lowerCase;
  console.log(lowCaseQuestion)
}


var numQuestion = window.confirm("Would you like your password to have numbers");
if(numQuestion){
  finalPassword = finalPassword + numbers;
  console.log(numQuestion)
}


var specialCharacterQuestion = window.confirm("Would you like your password to have special characters");
if(specialCharacterQuestion){
  finalPassword = finalPassword + specialCharacters;
console.log(specialCharacters)
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
