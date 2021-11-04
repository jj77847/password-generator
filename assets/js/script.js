// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // new secure password
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // prompt for the length of the password
  const passLength = prompt(
    "Please enter how many characters you would like your password to be. \nMust be between 8 - 128 characters."
  );

  const lengthConfirm = parseInt(passLength);

  // choose a length of at least 8 characters and no more than 128 characters
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Error. Choice is not valid. Please try again.");
    return;
  }

  const collectionOfValids = [];
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowerCase = "abcdefghiklmnopqrsttuvwxtz".split("");
  const number = "0123456789".split("");
  const special = "*&^%$#@!?><{}".split("");

  // we need a confirm to ask the user if they want to use lowercase
  const lowerCaseConfirm = confirm(
    "Do you want your password to include lowercase letters?"
  );
  if (lowerCaseConfirm) {
    for (let i = 0; i < lowerCase.length; i++) {
      collectionOfValids.push(lowerCase[i]);
    }
  }

  // we need a confirm to ask the user if they want to use uppercase
  const upperCaseConfirm = confirm(
    "Do you want your password to include uppercase letters?"
  );
  if (upperCaseConfirm) {
    for (let i = 0; i < upperCase.length; i++) {
      collectionOfValids.push(upperCase[i]);
    }
  }

  // we need a confirm to ask the user if they want to use numeric
  const numberConfirm = confirm("Do you want your password to include numbers");
  if (numberConfirm) {
    for (let i = 0; i < number.length; i++) {
      collectionOfValids.push(number[i]);
    }
  }

  // we need a confirm to ask the user if they want to use special characters
  const specialConfirm = confirm(
    "Do you want your password to include special characters?"
  );
  if (specialConfirm) {
    for (let i = 0; i < special.length; i++) {
      collectionOfValids.push(special[i]);
    }
  }

  // using the number from above and the 4 booleans, create password
  let randomPassword = "";
  for (let i = 0; i < lengthConfirm; i++) {
    collectionOfValids[Math.floor(Math.random() * collectionOfValids.length)];
    randomPassword +=
      collectionOfValids[Math.floor(Math.random() * collectionOfValids.length)];
  }

  return randomPassword;
}

generateBtn.addEventListener("click", writePassword);
