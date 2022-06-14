var characterLength = 8;
var choiceArray = [];

//Arrays
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// ASSIGNMENT CODE ABOVE
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

//ASSIGNMENT CODE
function promptOptions() {
  var characterLength = prompt("How many characters would you like in your password between 8 - 128?");
  if (characterLength < 8 || characterLength > 128) {
    alert("You need to enter a number between 8 and 128. Please try again.");
  }
 
  var useLower = confirm("Would you like lowercase letters in your password?");
  if (useLower) {
    alert("You've selected to use lowercase letters in your password.");
  } else {
    alert("You have selected NOT to use lowercase letters in your password.");
  }

  var useUpper = confirm("Would you like uppercase letters in your password?");
  if (useUpper) {
    alert("You've selected to use uppercase letters in your password.");
  } else {
    alert("You have selected NOT to use uppercase letters in your password.");
  }

  var useSpecial = confirm("Would you like special characters in your password?");
  if (useSpecial) {
    alert("You've selected to use special characters in your password.");
  } else {
    alert("You have selected NOT to use special characters in your password");
  }

  var useNumbers = confirm("Would you like numbers in your password?");
  if (useNumbers) {
    alert("You've selected to use numbers in your password");
  } else {
    alert("You have selected NOT to use numbers in your password.");
  }
  
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomCharacters = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomCharacters];
  }
}