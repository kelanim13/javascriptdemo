//NESTED LOOPS and 2D ARRAYS

//2D array = each element inside of an array is itself an array
var numberGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0]
];

/*access elements in arrays = specify row (horizontal) and column (vertical)
numberGrid[1] -> accessing specific row in 2D array */

document.write(numberGrid[1][1]);

document.write("<br/>")
for(var i = 0; i < numberGrid.length; i++){
  for(var j = 0; j < numberGrid[i].length; j++ ){
    document.write(numberGrid[i][j]);
  }
  document.write("<br/>");
}

//nested loop = loop inside of a loop
document.write("<br/>")
for(var i = 0; i < 4; i++){
  for(var j = 0; j < 3; j++ ){
    //document.write("i= " + i + ", j= " + j + "<br/>");
  }
}
//each time go through one iteration of top loop; go through every iteration of bottom loop



//for each loop = special type of for loop used w/arrays and javascript; loop through elements inside array (a lot simpler and cleaner; easier to visualize)
var tv_shows = ["CSI", "Law and Order SVU", "Gilmore Girls", "NCIS", "Criminal Minds"];
var books = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 300
  },
  {
    title: "Hunger Games",
    author: "Suzanne Collins",
    pages: 200
  }
]

books.forEach(function(book){
  document.write(book.author + "<br/>")
  document.write(book.title + "<br><br>")
});


//can call function pretty much anything (loop through array); but usually called element since that's what it is
tv_shows.forEach(function(tv_shows){
  document.write(tv_shows + "<br/>")
});

//regular for loop
for(var i = 0; i < tv_shows.length; i++){
  document.write(tv_shows[i] + "<br/>")
}
