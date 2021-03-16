// Assignment Code
var generateBtn = document.querySelector("#generate");

// Home work code starts here//

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var spChar = [' ','!','\"','#','$','%','&','\'','(',')','*','+','\,','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
// password criteria, from left to right: numbers, lower Case, upper Case, special character, 
var criteria = [true, true, true, true];
var critCheck = [true, true, true, true];

// a  randowm integar generater.
function randomInt (numbers){

  return Math.floor(Math.random()*numbers);

}

function randomChar(){
  return alphabet[randomInt(alphabet.length)];
}

function randomSpChar(){
  return spChar[randomInt(spChar.length)];
}

function initial(){
  for (let i = 0; i < criteria.length; i++) {
    criteria[i] = true;
    critCheck[i] = true;
  }
}



function generatePassword(){

  var passwordLength = 30;
  var password;

  initial();


  critCheck =[false, false, false, false]































  // if any critCheck is false, repeat process until all critChecks are true.
  while (!(critCheck[0]&&critCheck[1]&&critCheck[2]&&critCheck[3])) {

    password ="";

    for ( i = 0; i<passwordLength; i++){

      var char 

      do {

        char = randomInt(4);

      }while (!criteria[char]);
      
      switch (char) {
        case 0:
          password = password + String(randomInt(10));
          critCheck[0] = true;
          break;

        case 1:
          password = password + randomChar();
          critCheck[1] = true;
          break;

        case 2:
          password = password + randomChar().toUpperCase();
          critCheck[2] = true; 
          break;

        case 3:
          password = password + randomSpChar();
          critCheck[3] = true;
          break;

        default:
          console.log("unexpected error!");
          return;
          break;
      }

    }

  }

  
 /*
  console.log(alphabet.length);
  for (let i = 0; i < alphabet.length; i++) {
    console.log( alphabet[i]);
    
  }
  console.log(spChar.length);
  for (let i = 0; i < spChar.length; i++) {
    console.log(spChar[i]);
    
  }
  */
 console.log(password);
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
