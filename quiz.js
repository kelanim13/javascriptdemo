//quiz; create array of quesiton objects

var questions = [
  {
    prompt: "how many seasons are there of Gilmore Girls?\n(a) 4\n(b) 6\n(c) 7",
    answer: "c"
  },
  {
    prompt: "What are the names of the two main characters\n(a) Emily and Richard\n(b) Lorelai and Rory\n(c) Logan and Dean",
    answer: "b"
  },
  {
    prompt: "Who are the actresses that play the main characters?\n(a) Lauren Graham and Alexis Bledel \n(b) Jennifer Anniston and Shailene Woodley \n(c) Ginnifer Goodwin and Sophia Bush",
    answer: "a"
  },
  {   prompt: "What is the name of the small town they live in?\n(a) Oak Creek \n(b) Stars Hollow \n(c) Pine Hollow",
      answer: "b"
  },
  {   prompt: "Who is Sookie's produce guy?\n(a) Jared \n(b) Luke \n(c) Jackson",
      answer: "c"
  },
  {   prompt: "How old was Lorelai when she had Rory?\n(a) 17 \n(b) 18\n(c) 16",
      answer: "c"
  },
  {   prompt: "Which school does Rory decide to go to?\n(a) Princeton \n(b) Yale \n(c) Harvard",
      answer: "b"
  },

  ]

var score = 0;

for(var i=0; i < questions.length; i++){
  var response = window.prompt(questions[i].prompt)
  if(response == questions[i].answer){
    score ++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

alert("you got " + score + "/" + questions.length)
