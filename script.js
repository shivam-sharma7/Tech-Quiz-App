const quizData = [
    {

        question: 'How old you are?',
        a: '18',
        b: '21',
        c: '20',
        d: '25',
        correct: 'c'
    },

    {

        question: 'which is best Programming language for beginner?',
        a: 'C/C++',
        b: 'Java',
        c: 'Python',
        d: 'Javascript',
        correct: 'c'

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

        question: 'What is best programming language in 2023?',
        a: 'C/C++',
        b: 'Java',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
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
     }
];

const questionE1 = document.getElementById('question');

 const a_text = document.getElementById('a_text');
 const b_text = document.getElementById('b_text');
 const c_text = document.getElementById('c_text');
 const d_text = document.getElementById('d_text');
 const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 
}

loadQuiz();

submitBtn.addEventListener('click', () =>{
    currentQuiz++;

    loadQuiz();

});