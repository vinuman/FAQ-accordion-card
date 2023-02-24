const questions = document.querySelectorAll('.qna .question');

questions.forEach(question =>{
    question.addEventListener('click', ()=>{
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.classList.toggle('show'); 
    })
})

