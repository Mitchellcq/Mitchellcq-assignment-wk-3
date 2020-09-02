// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var selectedCharacters = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

  //prompt for password length
  var passwordLength = prompt("Select a password length between 8 and 128");
        
      //logic to ensure correct length selected
    if (passwordLength >=8 && passwordLength <=128) {

        console.log(passwordLength);

          //prompts for selecting character type
        var LC = confirm("Use Lower case characters?");
        var UC = confirm("Use Upper case characters?");
        var N = confirm("Use Numeric characters?");
        var SC = confirm("Use Special characters?");

            //code to make sure a character is selected
          if (LC == true || UC == true || N == true || SC == true){

              if (LC == true) {
                selectedCharacters += lowerCasedCharacters;
              }

              if (UC == true) {
                selectedCharacters += upperCasedCharacters;
              }

              if (N == true) {
                selectedCharacters += numericCharacters;
              }

              if (SC == true) {
                selectedCharacters += specialCharacters;
              }
            
            console.log(selectedCharacters);

            generatePassword();

          }
        
          else {
            alert("Please select at least one character type");
          }
          
    } 
        
        //error message if incorrect values entered
    else {
      alert("Please enter a value between 8 and 128");
    }
}

  function generatePassword() {

    for (i = 0, i < passwordLength.length, i++){

      var j = Math.floor(Math.random() * selectedCharacters.length);
    
    password.innerHTML += selectedCharacters[j];

    }
    
  }

   
        

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
