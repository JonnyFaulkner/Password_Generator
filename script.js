// Assignment code here
var generatePassword = function(){
  var passwordLength = window.prompt("How many characters? Must be more than 8 and less than 128.");
    if (passwordLength < 8) {
      alert("Must be longer than 8 characters.");
      generatePassword()
    } else if (passwordLength > 128) {
      alert("Must be shorter than 128 characters.");
      generatePassword();
    };
  var lowerConfirm = window.confirm("Would you like lowercase letters");
  var capitalConfirm = window.confirm("Would you like capital letters?");
  var numberConfirm = window.confirm("Would you like numbers?");
  var specialConfirm = window.confirm("Would you like special characters?");
  
  var lowercaseLettersArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercaseLettersArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialCharactersArr = [" ","!",'"',"#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\ ","]","^","_","`","{","|","}","~"];
  var numbersArr = ['0','1','2','3','4','5','6','7','8','9'];
  
  var characterTypeArr = [
    lowercaseLettersArr,
    uppercaseLettersArr,
    specialCharactersArr,
    numbersArr
  ];

  var randomPass = []

  if (lowerConfirm === true && capitalConfirm === true && numberConfirm === true && specialConfirm === true) {
    for (i = 0; i < passwordLength; i++) {
      var randomCharType = characterTypeArr[Math.floor(Math.random() * characterTypeArr.length)];
      var randomCharacter = randomCharType[Math.floor(Math.random() * randomCharType.length)];
      console.log(randomCharacter)
    }
  } else if (lowerConfirm === true && capitalConfirm === false && numberConfirm === false && specialConfirm === false) {
    for (i = 0; i < passwordLength; i++){
      var randomLowercase = lowercaseLettersArr[Math.floor(Math.random() * lowercaseLettersArr.length)]
      console.log(randomLowercase)
    } 
  } else if (lowerConfirm === false && capitalConfirm === true && numberConfirm === false && specialConfirm === false) {
    for (i = 0; i < passwordLength; i++){
      var randomUppercase = uppercaseLettersArr[Math.floor(Math.random() * uppercaseLettersArr.length)]
      console.log(randomUppercase)
    }
  } else if (lowerConfirm === false && capitalConfirm === false && numberConfirm === true && specialConfirm === false) {
    for (i = 0; i < passwordLength; i++){
      var randomNumbers = numbersArr[Math.floor(Math.random() * numbersArr.length)]
      console.log(randomNumbers)
    } 
  } else if (lowerConfirm === false && capitalConfirm === false && numberConfirm === false && specialConfirm === true) {
    for (i = 0; i < passwordLength; i++){
      var randomSpecial = specialCharactersArr[Math.floor(Math.random() * specialCharactersArr.length)]
      console.log(randomSpecial)
    } 
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
