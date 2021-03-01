//password checker app; more loops
// ++ increment by 1

var password = "lorgil13";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while(response != password && !error){
  if(entryCount < entryLimit){
    response = window.prompt("Enter Password");
    entryCount ++;
  } else {
    error = true;
  }
}

if(error){
  alert("Too many entries")
} else {
  alert("You got it!");
}
