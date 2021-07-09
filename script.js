// Assignment Code
var generateBtn = document.querySelector ('#generate');

function generatePassword () {
  // user selections

  var uppercaseOption = [
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
    'Z',
  ];
  var lowercaseOption = [
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
    'z',
  ];
  var numberOption = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharOption = [
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '=',
    '+',
  ];

  // empty array for input and output
  var userOptions = [];
  var results = [];

  //-----------------------------------------------------------------
  var howMany = prompt (
    'How many characters do you want your password to be? Choose between 8 and 128?'
  );
  var numbers = confirm ('Do you want to include numbers??');
  var uppercase = confirm ('Do you want to include UPPERCASE letters?');
  var lowercase = confirm ('Do you want to include lowercase letters?');
  var special = confirm ('Would you like to include special?');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//added copy to clipboard feature
function copy () {
  var copyText = document.querySelector ('#password');
  copyText.select ();
  document.execCommand ('copy');
}

document.querySelector ('#copy').addEventListener ('click', copy);
