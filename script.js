// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseString = "abcdefghijklmnopqrstuvwxyz"
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbersString = "1234567890"
var specialcharString = "!@#$%^&*"

function generatePassword() {
  var passwordLength = window.prompt("What is the length of the password? it should be between 8 to 128 ");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid entry")
    return ""
  }

  var lowercase = window.confirm("Do you want to include lowercase?");
  var uppercase = window.confirm("Do you want to include uppercase?");
  var numeric = window.confirm("Do you want to include numeric?");
  var specialchar = window.confirm("Do you want to include Special character?");

  if (!lowercase && !uppercase && !numeric && !specialchar) {

    window.alert("You must selct one character type")
    return ""


  }
  var password = ""
  for (i = 0; i < passwordLength; i++) {



    if (lowercase === true && password.length < passwordLength) {
      var index = Math.floor(Math.random() * lowercaseString.length)
      password = password + lowercaseString[index]

    }
    if (uppercase === true && password.length < passwordLength) {
      var index = Math.floor(Math.random() * uppercaseString.length)
      password = password + uppercaseString[index]
    }
    if (numeric === true && password.length < passwordLength) {
      var index = Math.floor(Math.random() * numbersString.length)
      password = password + numbersString[index]
    }
    if (specialchar === true && password.length < passwordLength) {
      var index = Math.floor(Math.random() * specialcharString.length)
      password = password + specialcharString[index]

    }
  }
  return password

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
