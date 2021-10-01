// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  prompt = "Please Choose a Password up to 8 characters and less than 120";

  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeric = "1234567890"
  const specialCharacters = " !"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

  confirm;
  confirm;
  confirm;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

