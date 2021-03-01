document.write("<br/>")

var isMale = false;
var isTall = false;

/*&&=both have to be true
 ||=or; only one has to be true
 ! = not

 responding to variables

 */

if(isMale && isTall){
  document.write("You are a tall male");
  //document.write("you are either male or tall or both")
} else if (isMale && !isTall){
  document.write("You are a short male")
} else if (!isMale && isTall) {
  document.write("You are not male, but you are tall")
}
  else {
  //document.write("You are either not male or not tall or both")
  document.write("You are not tall and not male")
}


//more if statements w/comparisons
// == has same value, < less than, > greater than, <= less than or equal, >= greater than or equal, != not equal

document.write("<br/>")

function max(num1, num2, num3){
  if(num1 >= num2 && num1 >= num3){
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

document.write(max(30, 10, 5));

document.write("<br/>")

if("phrase" == "phrase"){
  document.write("true");
}

//switch statements (special type of if statement; used to compare one value to a bunch of differeent values)
//example

document.write("<br/>")

function getDayName(dayNum){
  var day;

  switch(dayNum){
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    //send error message
    default:
      day = "day doesn't exist, " + dayNum + " isn't a valid number"
  }
  return day;
}

document.write(getDayName(2));
