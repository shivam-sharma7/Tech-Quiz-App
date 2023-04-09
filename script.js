const quizData = [
   
    {

        question: 'which is best Programming language for beginner?',
        a: 'C/C++',
        b: 'Java',
        c: 'Python',
        d: 'Javascript',
        correct: 'c'

    },

    {

        question: 'What is best programming language in 2023?',
        a: 'C/C++',
        b: 'Java',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },

    {

        question: 'what is HTML?',
        a: 'A Programming language',
        b: 'API',
        c: 'Hypertext Markup Language',
        d: 'JSON object',
        correct: 'c'

    },

    {
      
        question: 'Which tech use to create a website?',
        a: 'Web Development',
        b: 'DevOps',
        c: 'Machine Learning',
        d: 'AndroidnDevelopment',
        correct: 'a'

    },

    {

        question: 'which is best fron-end framework in 2023?',
        b: 'Angular',
        a: 'React',
        c: 'Vue',
        d: `jQuery`,
        correct: 'b'
    },

     {

        question: 'Who is founder of Twitter?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'jack Dursey',
        d: 'Larry Page',
        correct: 'c'
     },

     {

        question: 'Who is founder of facebook?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'jack Dursey',
        d: 'Larry Page',
        correct: 'b'
     },

     {

        question: 'Who is founder of Google?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'jack Dursey',
        d: 'Larry Page',
        correct: 'd'
     },

     {

        question: 'Who is founder of Tesla?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'jack Dursey',
        d: 'Larry Page',
        correct: 'a'
     },

     {

        question: 'Who invented Java in?',
        a: 'James Gosling',
        b: 'Brendan Eich',
        c: 'jack Dursey',
        d: 'Larry Page',
        correct: 'a'
     }



];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectAns = () =>{

    answerEls.forEach((answerEl) =>{
      answerEl.checked = false;
    });
 
}

 
const loadQuiz = () => {

    deselectAns();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 
}

loadQuiz();

 
const getSelect = () =>{
       
    let answer = undefined;

    answerEls.forEach((answerEl) =>{
         
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });

    return answer;
};

 
submitBtn.addEventListener('click', () =>{
// check to see ans
const answer = getSelect();

if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button  onclick="location.reload()">Reload</button>`;
    }
}
});