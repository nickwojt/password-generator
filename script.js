// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var specialArray = specialCharacters.split('');
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var lowerArray = lowerCase.split('');
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperArray = upperCase.split('');
  var numbers = "1234567890";
  var numberArray = numbers.split('');
  var arrays = [];
  var characterLength = parseInt(prompt("How many characters would you like your password to be? (Between 8-128)"));
  if (characterLength < 8 || characterLength > 128) {
    alert("Please select a value between 8 and 128.");
    return;
  }

  var specialAnswer = confirm("Click OK to include special characters in your password.");
  var lowerAnswer = confirm("Click OK to include lowercase characters in your password.");
  var upperAnswer = confirm("Click OK to include uppercase characters in your password.");
  var numberAnswer = confirm("Click OK to include numberic characters in your password.");
  
  if (specialAnswer) {
    arrays = arrays.concat(specialArray);
  }
  if (lowerAnswer) {
    arrays = arrays.concat(lowerArray);
  }
  if (upperAnswer) {
    arrays = arrays.concat(upperArray);
  }
  if (numberAnswer) {
    arrays = arrays.concat(numberArray);
  }

  var random = [];
  for (var i = 0; i < characterLength; i++){
    var values = arrays[i, Math.floor(Math.random() * arrays.length)];
    random.push(values);
    // console.log(arrays[i, Math.floor(Math.random() * arrays.length)]);

  }

  return(random.join(""));

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
