/*objects - storing name value pairs; key value pairs
define different values and give names to diff values; defining unique key with given value
can't have two of the same attributes (can't be repeated)

this = refers to current object
can use functions inside of objects
*/

var person = {
  name: "Lorelai",
  age: 32,
  isMale: false,
  occupation: "dragonfly inn owner",
  printName: function(){
    document.write("<h1>" + this.isMale + "<h1/>")
  }
};

person.printName();

//update individual parts of object (access specific attribute inside object)
//person.name = "Meredith"

document.write("<br/>")
//document.write(person);
document.write("<br/>")
document.write(person.name);
document.write("<br/>")
document.write(person.age);

document.write("<br/>")
var phrase = "strings are cool"; //string is also an object
document.write(phrase.length);






/* booleans, strings, numbers used to represent complex data type (ex. actors, movies)
model real world entities using objects */

var myShow = {
  title: "Gilmore Girls",
  releaseYear: "2000",
  duration: 44.0,
// object(s) inside of actors array; can access each actor individually
  actors: [
    {
      name: "Lauren Graham",
      birthday: new Date("March 16 1967"), //special objects (eg. date)
      hometown: "Honolulu, Hawaii",
    },

    {
      name: "Alexis Bledel",
      birthday: new Date("September 16 1981"),
      hometown: "Houston, Texas"
    },
  ]
}

document.write("<br/>")
document.write(myShow.actors[0].name);

var myShow1 = {
  title: "Grey's Anatomy",
  releaseYear: "2005",
  duration: 41.0,

  actors: [
    {
      name: "Ellen Pompeo",
      birthday: new Date ("Novemver 10, 1969"),
      hometown: "Everett, Massachusetts"
    },

    {
      name: "Chandra Wilson",
      birthday: new Date ("August 27, 1969"),
      hometown: "Houston, Texas"
    },

    {
      name: "James Pickens Jr.",
      birthday: new Date ("October 26, 1954"),
      hometown: "Cleveland, Ohio"
    },

  ]
}

document.write("<br/>")
document.write(myShow1.actors[0].hometown)
