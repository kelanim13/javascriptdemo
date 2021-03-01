//changing inner HTML
//header = javascript object
var header = document.getElementById("header");
header.innerHTML = "K's new H1";

//access css attributes
header.style.color = "blue";
header.style.backgroundColor = "black";

//access any html attribues and modify them
var link = document.getElementById("link");
link.href = "https://amazon.com";
link.style = "color:orange;"
