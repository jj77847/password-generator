// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created Arrays of Possible Character Choices
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const special = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Created function to ask user which options they wanted and generated answers
function questions() {
  const isValid = false;
  do {
    const length = prompt(
      "Choose password Length between 8 and 128 characters"
    );
    const askNumbers = confirm("Do you want your password to include Numbers?");
    const askLowerCase = confirm(
      "Do you want your password to include Lower case letters?"
    );
    const askUpperCase = confirm(
      "Do you want your password to include Upper case letters?"
    );
    const askSpecial = confirm(
      "Do you want your password to include Special characters?"
    );
    const responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial,
    };
    if (length < 8 || length > 128) alert("Choose number between 8 and 128");
    else if (!askNumbers && !askLowerCase && !askUpperCase && !askSpecial)
      alert("Must choose at least one type.");
    else isValid = true;
  } while (!isValid);
  return responses;
}

function generatePassword() {
  const passwordOptions = questions();
  const possibleCombo = [];
  const finalPassword = "";

  if (passwordOptions.askNumbers) {
    for (var i of numbers) possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase) possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase) possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special) possibleCombo.push(i);
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword +=
      possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  return finalPassword;
}

// Write password to the #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
