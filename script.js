
//declaring questions as objects into an array 
const quiz1 = [
    {
        question: "Javascript is an _____ language?",
        a: "Object-oriented",
        b: "Object-based",
        c: "Procedural",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Upon encountering empty statements, what does Javascript interpreter do?",
        a: "Throws an error",
        b: "Ignores the statements",
        c: "Gives a warning",
        d: "None of the above",
        correct: "b",
    }
    ,
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        correct: "a",
    }
    ,
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        a: "Both the datatype and the result of the expression are compared.",
        b: "Only the datatype of the expression is compared",
        c: "Only the value of the expression is compared",
        d: "None of the above",
        correct: "a",
    }
    ,
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        a: "is in",
        b: "exists",
        c: "in",
        d: "lies",
        correct: "c",
    }
    ,
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        a: "Clears all the cookies and cache",
        b: "Clears all the cookies from the cookie jar",
        c: "both A and B",
        d: "The contents are displayed by non JS-based browsers.",
        correct: "d",
    }
    ,
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:?",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        correct: "c",
    },
    {
        question: "What does the Javascript debugger statement do?",
        a: "It will debus all the errors in the program at runtime",
        b: "It acts as a breakpoint in the program",
        c: "It will debug error in the current statement if any.",
        d: "All of the above",
        correct: "b",
    },
    {
        question: "Which function is used to serialize an object into a JSON string in javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following are closures in Javascript?",
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All of the above",
        correct: "d",
    }
];


const quiz = document.getElementById('quiz')//getting quiz by ID
const answers1 = document.querySelectorAll('.answer')//returns all element decendants of node that match selector
const question = document.getElementById('quizQuestion')//question element in html h2 id 
const a_text = document.getElementById('a_text')// a
const b_text = document.getElementById('b_text')// b
const c_text = document.getElementById('c_text')// c
const d_text = document.getElementById('d_text')// d
const submitBtn = document.getElementById("submit")// assigning variable to submit button
let current = 0;
let score = 0;

quizLoader()//calling quizLoader which will use forEach function and unselectAnswers function to go through the objects in the array of objects 

function quizLoader(){
    unselectAnswers()
    const currentQuizData = quiz1[current]
    question.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
  
}
function unselectAnswers(){
    answers1.forEach(answer2 => answer2.checked = false)
}
function selector(){
    let answer 
    answers1.forEach(answer2 =>{
        if(answer2.checked){
          answer = answer2.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{ //listening for click on submit button
    const answer = selector() //answer will refer to getSelected()function that gets the answer for the question
    if(answer){
        if(answer === quiz1[current].correct){ //making sure users choice is matched with the correct element in the array of objects
            score++ //incrementing score for each correct answer
    }
    current++ //increasing per question asked 

    if(current < quiz1.length){ //if current quiz isnt equal to 10 which is # of questions it will continue to run loadQuiz() function which displays question and choices 
        quizLoader()
    } else{ //once it is 10 since 10 questions will change the element with quiz ids innerHTML to below
        quiz.innerHTML = `<h2> you answered ${score}/${quiz1.length} questions correctly <h2>
        <button onclick="location.reload()">Reload</button>`
    }
}
})