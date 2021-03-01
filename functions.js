function sayHi(name, age){
  //var name = "Sarah";

  document.write("<h1>Hello " + name + "</h1>");
  alert("Are you sure?");
  document.write("<p>You are " + age + "</p>");

}

sayHi("Lorelai", 21);
sayHi("Meredith", 32);

function addition(num1, num2) {
  return num1 + num2;
}

var addedNumbers = addition(4, 100)
//create variable

document.write( addedNumbers );
