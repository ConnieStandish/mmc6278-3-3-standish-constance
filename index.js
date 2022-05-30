// Your code here

var questionsArr = [
    {
        question: 'Loops allow you to write and execute code multiple times without repeating yourself',
        answer: true
    },
    { 
        question: "An array is a list of data",
        answer: true
    },
    {
        question: "In an object functions become known as methods",
        answer: true
    },
    {
        question: "For loops is the most common loop",
        answer: true
    },
    {
        question: "It is best practice to declare all global variables and functions first",
        answer: true
    },
    {
        question: "Console.log is an example of an object and a method, because log is a method of console which is a window object.",
        answer: true
    },
]
// console.log(typeof questionsArr.length)
// questionsArr.forEach(element => console.log(element))

function runQuiz() {
    var numCorrect = 0

   for (var i = 0; i < questionsArr.length; i++) {
    // console.log(questionsArr[i].question)
    // console.log(questionsArr[i].answer)
    var response = confirm(questionsArr[i].question)
    var answer = questionsArr[i].answer
    if (response) {
        numCorrect++
    }
    if (response === true) {
        alert("Correct")
       } else {
        alert("Incorrect, the answer is " + answer)
       }
       
   }
   
   var score = Math.round((numCorrect / questionsArr.length) * 100)
//    Math.floor(score)
//    console.log(Math.round(score))
   alert(score + '%')

// console.log(score) 

// console.log(Math.floor(numCorrect/questionsArr.length * 100))
   
   
}
