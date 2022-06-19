var characterLength = undefined;
var choiceArray = [];

//arrays for all possible password character options
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


//ASSIGNMENT CODE
function passwordLength() {
  choiceArray = [];
  //user enters a number between 8-128
  characterLength = parseInt(window.prompt("How many characters would you like in your password between 8 - 128?", ""));
  while (characterLength < 8 || characterLength > 128) {
    alert("You need to enter a number between 8 and 128. Please try again.");
    characterLength = parseInt(window.prompt("How many characters would you like in your password between 8 - 128?", ""));
  } 
  console.log(characterLength);
}

 function promptOptions() {
  //user decides if they would like to include lowercase
  var useLower = confirm("Would you like lowercase letters in your password?");
  if (useLower) {
    alert("You've selected to use lowercase letters in your password.");
    choiceArray = choiceArray.concat(lowerCase);
  } else {
    alert("You have selected NOT to use lowercase letters in your password.");
  }
  console.log("lowercase = " + useLower);

  //user decides if they would like to include uppercase
  var useUpper = confirm("Would you like uppercase letters in your password?");
  if (useUpper) {
    alert("You've selected to use uppercase letters in your password.");
    choiceArray = choiceArray.concat(upperCase);
  } else {
    alert("You have selected NOT to use uppercase letters in your password.");
  }
  console.log("uppercase = " + useUpper);

 //user decides if they would like to include special values
  var useSpecial = confirm("Would you like special characters in your password?");
  if (useSpecial) {
    alert("You've selected to use special characters in your password.");
    choiceArray = choiceArray.concat(specialCharacter);
  } else {
    alert("You have selected NOT to use special characters in your password");
  }
  console.log("special characters = " + useSpecial);

  //user decides if they would like to include numbers
  var useNumbers = confirm("Would you like numbers in your password?");
  if (useNumbers) {
    alert("You've selected to use numbers in your password");
    choiceArray = choiceArray.concat(numbers);
  } else {
    alert("You have selected NOT to use numbers in your password.");
  }
  console.log("numbers = " + useNumbers);

}

//generate password based on user input
function generatePassword() {

  //call functions to initiate prompts
passwordLength();
promptOptions();

  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    var randomCharacters = choiceArray[randomIndex];
    password = password + randomCharacters;
  }
  return password;
}
console.log(choiceArray);

// ASSIGNMENT CODE ABOVE

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
