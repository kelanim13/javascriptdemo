/* while loops
++ (i + 1)
infinite loop; need to make it where condition is false, or else it will loop on forever */

document.write ("<br/>")

var i = 0;

while(i < 10) {
  document.write(i + "<br/>");
  i++;
}
//do while loop
do {
  document.write(i + "<br/>");
  i++;
} while(i <= 10)

/*for loops; functionally same as while loop; syntax is a lot simpler/cleaner(save space)
more convenient; easier to manage
(index variable, looping condition, line of code executed after loop iteration)*/
for(var i = 0; i < 10; i++){
  document.write(i + "<br/>");
}


var friends = ["Sarah", "Michael", "Alex", "Lauren", "Jennifer"];
  document.write(friends[3]);
  for(var i = 0; i < friends.length; i++){
    document.write(friends[i] + "<br/>");
  }
