// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE
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

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

  // get criteria function
  const getCriteria = function () {
    const passwordLength = Number(
      prompt("Choose a password length between 8-128 characters", "")
    );

    //input is in the range
    if (passwordLength >= 8 && passwordLength <= 128) {
      const useLowercase = confirm("Would you like to include lower case?");

      const useUppercase = confirm("Would you like to use upper case?");

      const useNumeric = confirm("Would you like to include numbers?");

      const useSpecialCharacters = confirm(
        "Would you like to include special characters?"
      );

      // user has answered false/no
      if (
        !useUppercase &&
        !useLowercase &&
        !useNumeric &&
        !useSpecialCharacters
      ) {
        alert(
          "You need to include at least 1 criteria to be in your password!"
        );
        return;
      } else {
        // this sets the object 'criteria' for my output
        return {
          length: passwordLength,
          upper: useUppercase,
          lower: useLowercase,
          numbers: useNumeric,
          special: useSpecialCharacters,
        };
      }
    } else {
      alert("Password length must be between 8 and 128, Please try again!");
      return;
    }
  };

  // select random characters
  const getRandom = function (criteria) {
    // empty array
    const validValues = [];

    // given criteria add relevant choices
    if (criteria.lower) {
      validValues.push(lowerCase);
    }
    if (criteria.upper) {
      validValues.push(upperCase);
    }
    if (criteria.numbers) {
      validValues.push(numeric);
    }
    if (criteria.special) {
      validValues.push(specialChars);
    }

    // randomly generated numbers
    const randomChoiceIndex = Math.floor(Math.random() * validValues.length);
    const randomCharactersArray = validValues[randomChoiceIndex];
    const randomCharacterIndex = Math.floor(
      Math.random() * randomCharactersArray.length
    );
    const randomCharacter = randomCharactersArray[randomCharacterIndex];

    return randomCharacter;
  };

  // password generation
  const passwordGenerate = function (criteria) {
    // empty password string
    let myPassword = "";
    for (let i = 0; i < criteria.length; i++) {
      const randomCharacter = getRandom(criteria);
      myPassword += randomCharacter;
    }
    return myPassword;
  };

  // Start of my main function
  function generatePassword() {
    //main order of code
    const criteria = getCriteria();
    if (criteria) {
      const myPassword = passwordGenerate(criteria);

      return myPassword;
    } else {
      return "";
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
