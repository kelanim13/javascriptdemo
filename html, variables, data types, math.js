document.write("Javascript Tutorial");
document.write("<hr/>");
document.write("<h2 style='color:blue;'><i>Javascript rules!</i></h2>");

alert("the file is working");

/*variables + data types
value stored inside container*/
var phrase = "To or not to be that is the question"; //string
var age = 23; //number
var gpa = 3.9;
var isMale = false; //boolean
var flaws = null; //variable has no value
var description = undefined; //variable doesn't have value yet; haven't given variable a value;

//document.write(phrase);
//change value of variable (modify)
//phrase = "horses";
//document.write(phrase);

var phrase = "Strings are cool "
var text = "are cool";
document.write(phrase.length);
document.write("</br>")
document.write(phrase);
document.write("</br>")
document.write(phrase.toUpperCase());
document.write(phrase.toLowerCase());
//document.write(phrase.charAt(0)); //parameters; index of strings
//document.write(phrase.indexOf("r")); index of letter indicated
//document.write(phrase.lastIndexOf("z"));
//document.write(phrase.substring(phrase.indexOf("a"), phrase.length)); //take section of string (parameters) and print it out
document.write(phrase.endsWith("l"));
document.write(phrase.includes("puppy"));


document.write("</br>")
//concatinate
document.write(phrase + " " + text);

var dog = "dogs are great house pets!"

document.write ("<br/>")
document.write(dog)
document.write(dog.toUpperCase());

document.write ("<br/>")
//numbers

var number = 6
document.write (number * (2 + 7)); //order of operations
document.write ("<br/>")
document.write (3 % 2);
document.write ("<br/>")
document.write (3 * 2);
document.write ("<br/>")
//document.write (Math.abs(number));
document.write ("<br/>")
document.write (Math.max(number, 4)); //max and min
document.write ("<br/>")
document.write (Math.round(number));
document.write ("<br/>")
document.write (Math.pow(number, 3));
document.write ("<br/>")
document.write (Math.sqrt(36));
document.write ("<br/>")
document.write (Math.round(Math.random() * 10)); //like rolling a ten sided die # between 0-10


//document (html document)
