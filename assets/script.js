// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

//Get user input of password length and parse into integer from string
let passwordLength = parseInt()

//Containers to store user options and add them in one container in the end

let lowercaseOption

let uppercaseOption

let numericOption

let specialCharOption

//Add the characters using user options
let passwordCharacters = []

// Function to prompt user for password options
function getPasswordOptions() {

  passwordLength = prompt('Choose the size of Password between 8 to 128 characters: ')

  if (isNaN(passwordLength)) { 
    alert('Input only numbers. ' + 'Reload & try again!')
    reload()
  } else if (passwordLength < 8 || passwordLength > 128) { 
    alert('Password length should be between 8 to 128 characters. ' + 'Reload & try again!')
    reload()
  } else {
    alert('Choose from below character types: Lowercase, Uppercase, Numeric or Special Characters')
  }

  lowercaseOption = confirm('Do you wish to include lowercase in your password?')

  if (lowercaseOption) {
    passwordCharacters += lowerCasedCharacters
  }

  uppercaseOption = confirm('Do you wish to include uppercase in your password?')

  if (uppercaseOption) {
    passwordCharacters += upperCasedCharacters
  }

  numericOption = confirm('Do you wish to include numbers in your password?')

  if (numericOption) {
    passwordCharacters += numericCharacters
  }

  specialCharOption = confirm('Do you wish to include special characters in your password?')

  if (specialCharOption) {
    passwordCharacters += specialCharacters
  }
  
  if (passwordCharacters == 0) {
    alert('Alteast one character types have to be chosen. ' + 'Refresh & try again!')
  }

}

getPasswordOptions()

//Removing "," in passwordCharacters

let cleanPasswordChars = passwordCharacters.replace(/\,/g, '');

// Function for getting a random element from an array
function getRandom(length) {

  let result = ' ';
  const passLength = cleanPasswordChars.length;
  for (i = 0; i < length; i++ ) {
      result += cleanPasswordChars.charAt(Math.floor(Math.random() * passLength));
  }

  return result;

}

getRandom(passwordLength)


// Function to generate password with user input
function generatePassword() {

  let password = getRandom(passwordLength)

  return password

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);