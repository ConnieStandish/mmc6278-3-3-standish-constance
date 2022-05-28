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
// console.log(questionsArr.length)
// questionsArr.forEach(element => console.log(element))

function runQuiz() {
   for (var i = 0; i < questionsArr.length; i++) {
    console.log(questionsArr[i].question)
    console.log(questionsArr[i].answer)
    var question = confirm(questionsArr[i].question)
    var answer = questionsArr[i].answer
   }  
   
}
