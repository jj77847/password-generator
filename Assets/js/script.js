// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var allChars = numberChars + upperChars + lowerChars;
var randPasswordArray = Array(passwordLength);
randPasswordArray[0] = numberChars;
randPasswordArray[1] = upperChars;
randPasswordArray[2] = lowerChars;

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(passwordLength) {