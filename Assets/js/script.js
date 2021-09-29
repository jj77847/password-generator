// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// User Flow from notes.md

// Click on generate password button
// Presented with criteria
// Fill in the criteria
// Password should appear on the page
// Steps

// Declare a function generatePassword
// Declare const for lowercase abcdefghijklmnopqrstuvwxyz
// Declare const for uppercase ABCDEFGHIJKLMNOPQRSTUVWXYZ
// Declare const for numeric 1234567890
// Declare const for specialCharacters " !"#$%&'()*+,-./:;<=>?@[]^_`{|}~"