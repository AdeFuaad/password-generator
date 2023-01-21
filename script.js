// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const numberChar = "0123456789";
const specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

function lengthError() {
  alert("Password length must be more than 8 but less than 128");
}

function charError() {
  alert("You must select atleast one of the characters to generate a password");
  return "Select at least one of the criterias";
}

function verifyInput() {

  let newPassword = ""; 

  let numbers = confirm("Do you want numbers in your password?");

  let lowerCase = confirm("Do you want lowercases in your password?");

  let upperCase = confirm("Do you want uppercases in your password?");

  let special = confirm("Do you want special characters in your password?");

  if (numbers === true) {
    newPassword += numberChar;
  }
  if (lowerCase === true) {
    newPassword += lowerCaseChar;
  }
  if (upperCase === true) {
    newPassword += upperCaseChar;
  }
  if (special === true) {
    newPassword += specialChar;
  }

  if (numbers === false && lowerCase === false && upperCase === false && special === false) {
    charError();
  } 
  else {
    return newPassword;
  }
}

function randomPassword () {

  let passwordLength = parseInt( prompt("Please enter the number of characters you want for you new password. \nIt must be more than 8 but less than 128.") );

  if (passwordLength < 8 || passwordLength > 128) {
    lengthError();
  } 
  else {
    let randomChar = verifyInput();
    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      let randomPassword = Math.floor( Math.random() * randomChar.length );
      generatedPassword += randomChar[randomPassword];
    } 

    return generatedPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = randomPassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
