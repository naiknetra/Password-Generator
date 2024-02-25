// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = window.prompt("What is the length of the password? it should be between 8 to 128 ");
  if (passwordLength < 8  || passwordLength > 128) {
    window.alert("Invalid entry")
    return""
  }

  var lowercase = window.confirm("Do you want to include lowercase?");
  var uppercase = window.confirm("Do you want to include uppercase?");
  var numeric = window.confirm("Do you want to include numeric?");
  var specialchar = window.confirm("Do you want to include Special character?");


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
