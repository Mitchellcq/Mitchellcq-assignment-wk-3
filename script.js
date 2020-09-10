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

var charRange = document.getElementById("charRange");
var charNum = document.getElementById("charNum");
var generate = document.getElementById("generate");
var upperEle = document.getElementById("IncludeUpper");
var numberEle = document.getElementById("IncludeNumber");
var symbolEle = document.getElementById("IncludeSymbol");
var passwordEle = document.getElementById("password");

charRange.addEventListener('input', syncCharAmount);
charNum.addEventListener('input', syncCharAmount);

generate.addEventListener('click', e => {
  e.preventDefault();
  var charAmount = charNum.value;
  var uppers = upperEle.checked;
  var numbers = numberEle.checked;
  var symbols = symbolEle.checked;

  var password = generatePassword(charAmount, uppers, numbers, symbols);
  passwordEle.textContent = password;
});

function generatePassword(charAmount, uppers, numbers, symbols) {
   var charCodes = lowerCasedCharacters;
  if (uppers == true) charCodes = charCodes + upperCasedCharacters;
  if (numbers == true) charCodes = charCodes + numericCharacters;
  if (symbols == true) charCodes = charCodes + specialCharacters;

  var passwordChars =[];
  for (var i =0; i < charAmount; i++) {
    var character = charCodes[Math.floor(Math.random()* charCodes.length)];
    passwordChars.push(character);
  }
  return passwordChars.join('');

}

function syncCharAmount(event){
  var value = event.target.value;
  charNum.value = value;
  charRange.value = value;
}

