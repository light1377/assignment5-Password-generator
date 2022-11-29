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

  
    // Function to prompt user for password options
  function getPasswordOptions() {

    if (passLength < 64 && passLength > 10){
        generatePassword();
      }
      else{
        alert("password length invalid");
      }
    var capital = confirm('Would you like your password to contain capital letters?');
  var loweCase = confirm('Would you like your password to contain lower case letters?');
  var number = confirm('Would you like your password to contain numbers?');
  var special = confirm('Would you like your password to contain special characters?');
  }

// create a variable that stores the choices we have based in user input
  var ChoiceArr = 
    // Function for getting a random element from an array
  function getRandom(arr) {
  if(capital = true){
    alert("will include capital letters");
var cap = getRandom(upperCasedCharacters)

console.log(cap);

  }

  }

  
  
  // Function to generate password with user input,
  passLength = parseInt(prompt("How long would you like your password to be? (10-64 characters)"))
  
  function generatePassword() {
  
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