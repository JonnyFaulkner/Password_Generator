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
  var capitalConfirm = window.confirm("Would you like capital letters?");
  var numberConfirm = window.confirm("Would you like numbers?");
  var specialConfirm = window.confirm("Would you like special characters?");
  
  var lowercaseLetters = [{a:'a'},{b:'b'},{c:'c'},{d:'d'},{e:'e'},{f:'f'},{g:'g'},{h:'h'},{i:'i'},{j:'j'},{k:'k'},{l:'l'},{m:'m'},{n:'n'},{o:'o'},{p:'p'},{q:'q'},{r:'r'},{s:'s'},{t:'t'},{u:'u'},{v:'v'},{w:'w'},{x:'x'},{y:'y'},{z:'z'}];
  var uppercaseLetters = [{A:'A'},{B:'B'},{C:'C'},{D:'D'},{E:'E'},{F:'F'},{G:'G'},{H:'H'},{I:'I'},{J:'J'},{K:'K'},{L:'L'},{M:'M'},{N:'N'},{O:'O'},{P:'P'},{Q:'Q'},{R:'R'},{S:'S'},{T:'T'},{U:'U'},{V:'V'},{W:'W'},{X:'X'},{Y:'Y'},{Z:'Z'}];
  var specialCharacters = [" ","!",'"',"#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\ ","]","^","_","`","{","|","}","~"];
  var numbers = [{0:'0'},{1:'1'},{2:'2'},{3:'3'},{4:'4'},{5:'5'},{6:'6'},{7:'7'},{8:'8'},{9:'9'}];

  var characterTypeArr = [
    {1: lowercaseLetters},
    {2: uppercaseLetters},
    {3: specialCharacters},
    {4: numbers}
  ];
  
  if (capitalConfirm === true && numberConfirm === true && specialConfirm === true) {
    for (i = 0; i < passwordLength; i++) {
      var randomCharType = Math.floor(Math.random() * characterTypeArr.length)
      console.log(randomCharType, characterTypeArr[randomCharType])
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
