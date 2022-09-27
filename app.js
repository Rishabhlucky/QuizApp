const quizData = [
    {
        question: 'Which language runs in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd',
    },
    {
        question: 'What does CSS stand for?',
        a: 'Central Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVs Sailboats',
        correct: 'b',
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Markdown Language',
        c: 'Hyperloop Machine Language',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b',
    }
];


const quiz=document.getElementById('quiz');
const questionEle=document.getElementById('question');
const options = document.querySelectorAll(".answer");
const option1 = document.getElementById("a_answer");
const option2 = document.getElementById("b_answer");
const option3 = document.getElementById("c_answer");
const option4 = document.getElementById("d_answer");
const button = document.getElementById("btn");


let currentQuiz=0;
let score=0

function loadQuiz(){
    let currentQuizData=quizData[currentQuiz];

    questionEle.innerText=currentQuizData.question;
    option1.innerHTML=currentQuizData.a
    option2.innerHTML=currentQuizData.b
    option3.innerHTML=currentQuizData.c
    option4.innerHTML=currentQuizData.d

}
loadQuiz()


function deselectAnswer() {
    options.forEach((eachOption) => (eachOption.checked = false))
};


function getSelected() {
    let answer;
    options.forEach((selectedAnswer) => {
        if (selectedAnswer.checked) {
            answer = selectedAnswer.id
        }
    })
    return answer
}

button.addEventListener('click' ,()=>{
    deselectAnswer()
          let ans =getSelected();

        //   if(ans){
            if (ans == quizData[currentQuiz].correct) {
                score++;
            }
            currentQuiz++;
            loadQuiz()
        
        //   }
})






