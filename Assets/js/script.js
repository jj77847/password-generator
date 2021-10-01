// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  prompt = "Please Choose a Password up to 8 characters and less than 120";

  // const lowercase = "abcdefghijklmnopqrstuvwxyz"
  // const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // const numeric = "1234567890"
  // const special = " !"#$%&'()*+,-./:;<=>?@[]^_`{|}~".\


// Created Arrays of Possible Character Choices
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Created function to ask user which options and made conditional statements to ensure minimum option requirements were met.
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var asknumeric = confirm("Do you want your password to include numbers?");
    var asklowerCase = confirm("Do you want your password to include lower case letters?");
    var askupperCase = confirm("Do you want your password to include upper case letters?");
    var askspecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      asknumeric: asknumeric,
      asklowerCase: asklowerCase,
      askupperCase: askupperCase,
      askspecial: askspecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!asknumeric)&&(!asklowerCase)&&(!askupperCase)&&(!askspecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";



  if (passwordOptions.asknumeric) {
    for (var i of numeric)
      possibleCombo.push(i);
  }
  if (passwordOptions.asklowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askupperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askspecial) {
    for (var i of special)
      possibleCombo.push(i);
  }


  console.log(possibleCombo);


  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);