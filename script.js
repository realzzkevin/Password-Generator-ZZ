// Assignment Code
var generateBtn = document.querySelector("#generate");

// Home work code starts here//


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var spChar = [' ','!','\"','#','$','%','&','\'','(',')','*','+','\,','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

// password criteria, from left to right: numbers, lower Case, upper Case, special character, 
var criteria = [true, true, true, true];
// critChenck will be set to opposite of criteria. 
var critCheck = [true, true, true, true];

// a randowm integer generater.
function randomInt (numbers){

  return Math.floor(Math.random()*numbers);

}

// choose a random lower case character.
function randomChar(){
  return alphabet[randomInt(alphabet.length)];
}

// pick a random special character.
function randomSpChar(){
  return spChar[randomInt(spChar.length)];
}


function initial(){
  for (let i = 0; i < criteria.length; i++) {
    criteria[i] = true;
    critCheck[i] = false;
  }
}



function generatePassword(){

  var passwordLength;
  var password;

  initial();

  do {

    var repeat = true;
    //take user input, conver it to integer.
    var temp = parseInt( window.prompt("Please enter the lenght of your password, 8 ~ 128."));
    
    // Accept password length if its in the correct length. Otherwise, repeat process.
    if (8<=temp&&temp<=128){
      passwordLength = temp;
      repeat = false;

    }else {
      window.alert("Please enter a integer btweeen 8 to 128.")
    }

  } while(repeat);


  do {
      
    var repeat = true;
    // set criterias from user input.
    criteria[0] = window.confirm("Include numbers?");
    criteria[1] = window.confirm("Include lower case characters?");
    criteria[2] = window.confirm("Include upper case characters?");
    criteria[3] = window.confirm("Include special characters?");

    // user must choose  a least one criteria. Otherwise, repeat process.
    if (criteria[0]||criteria[1]||criteria[2]||criteria[3]) {

      repeat = false;
      //  set critCheck status to the opposite of criteria status.
      for (let i = 0; i < 4; i++) {
        critCheck[i] = !criteria[i];
          
      }

    }else {
      window.alert("please choose a least one criteria.");
    }


  } while (repeat);



  // if any critCheck is false, repeat process until all critChecks are true.
  while (!(critCheck[0]&&critCheck[1]&&critCheck[2]&&critCheck[3])) {

    password ="";

    for ( i = 0; i<passwordLength; i++){

      var char 

      //pick a random integer from 0 to 3. check if the correspond criteria has been chosen,
      //if not, choose a different interger.
      do {

        char = randomInt(4);

      }while (!criteria[char]);
      
      
      switch (char) {
        // case 0: pick a random integer from 0 to 9. 
        case 0:
          password = password + String(randomInt(10));
          critCheck[0] = true;
          break;

        //case 1: pick a random lower case character.
        case 1:
          password = password + randomChar();
          critCheck[1] = true;
          break;

        //case 2: pick a random upper case character.
        case 2:
          password = password + randomChar().toUpperCase();
          critCheck[2] = true; 
          break;

        //case 3: pick a random special character.
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
