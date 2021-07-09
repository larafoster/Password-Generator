// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
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

  // empty arrays for collecting user inputs and results/password
  var userOptions = [];
  var results = [];

  //-----------------------------------------------------------------
  var howMany = prompt(
    'How many characters do you want your password to be? Choose between 8 and 128?'
  );
//I added a prompt in case they enter a number outside the scope. But it only runs once so not really working the way I wanted it to.
      if(howMany <8 || howMany > 128){
        prompt("Please enter a number between 8 and 128.");
    }

  var uppercase = confirm('Do you want to include UPPERCASE letters?');
  var lowercase = confirm('Do you want to include lowercase letters?');
  var numbers = confirm('Do you want to include numbers??');
  var special = confirm('Would you like to include special?');

  // password generation conditions. if user confirms the selection, that type is added to the results/password with concat 

  if (uppercase) {
    results = results.concat(uppercaseOption);
  }

  if (lowercase) {
    results = results.concat(lowercaseOption);
  }
  if (numbers) {
    results = results.concat(numberOption);
  }

  if (special) {
    results = results.concat(specialCharOption);
  } 

  //for loop instructs the computer to read the "howMany" input and make the results not exceed the length specified by user. 
  for (var i = 0; i < howMany; i++) {
    userOptions.push(results[Math.floor(Math.random() * results.length)]);
  }
  //use .join to get rid of the commas between each character
  return userOptions.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//added copy to clipboard feature
function copy() {
  var copyText = document.querySelector('#password');
  copyText.select();
  document.execCommand('copy');
}

document.querySelector('#copy').addEventListener('click', copy);
