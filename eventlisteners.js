/*moniter what's happening on page; respond to user based on what they do
"on" needed for actual html file; not for js file
w3schools DOM events*/

function handleClick(element){
  alert("Clicked");
  element.innerHTML = "Clicked"
  element.style="background-color:white;"
}

//responsive image

var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
  this.style = "box-shadow: 2px 2px 2px orange";
  this.width = "500"
});

var image = document.getElementById("image");
image.addEventListener("mouseout", function(){
  this.style = "";
  this.width = "200"
});

var image = document.getElementById("image");
image.addEventListener("mouseout", function(){

});
