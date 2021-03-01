//user input
var name = window.prompt("What is your name?");
var age = window.prompt("How old are you?");


document.write("Hey " + name + "! How are you today? Do you like being " + age + "?");

var dog_name = window.prompt("What is your dog's name?");
var hobby = window.prompt("what does your dog like doing for fun?");

document.write("Wow! " + dog_name + " is a great name for a dog! " + " My dog also likes to " + hobby);
document.write("I have heard of " + dog_name + " as a dog name before. Dusty also likes to " + hobby);

document.write("<br/>")
//calculator
var num1 = window.prompt("enter a number");
var num2 = window.prompt("enter another number");

//convert string to integer (computer automatically converts into string); functions = parseInt, parseFloat
num1 = parseFloat(num1);
num2 = parseFloat(num2);

document.write(num1 + num2);

document.write("<br/>")
//var = new Array () same as var = []
var tv_shows = ["NCIS", "Law and Order:SVU", "Gilmore Girls", "Grey's Anatomy", 13, true];

//another way of writing arrays
var fruits = "oranges, peaches, mangos, lemons"
fruits = fruits.split(",")
document.write(fruits[1])

/*index arrays
properties variable.length */

tv_shows[0] = "CSI"
//modify values
document.write(tv_shows[0]);
