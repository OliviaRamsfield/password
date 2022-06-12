//window prompts length, lowercase, uppercase, numeric and special characters

//arrays for all prompts

//array randomization as criteria selected

//password alert


// ASSIGNMENT CODE GOES ABOVE
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
