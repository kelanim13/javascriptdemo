var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
  var newMessage = document.createElement("li");
  //create element using js; created new html element
  newMessage.innerHTML = textbox.value;
  //in order to return text inside textbox
  messages.appendChild(newMessage);
  textbox.value = "";
});

alert ("This is an alert created by Kelani");
