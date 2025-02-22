// Respostas: itens corretos
var correctAnswers = {
    q1: 'c', 
    q2: 'd', 
    q3: 'd', 
    q4: 'c', 
    q5: 'c', 
    q6: 'a', 
    q7: 'b', 
    q8: 'e', 
    q9: 'b', 
    q10: 'c'
};

var score = 0;

function checkAnswer(selectedOption, correctAnswer, questionId) { //Feedback de respostas do usuário
    var feedbackElement = document.getElementById("feedback" + questionId);
    if (selectedOption.value === correctAnswer) {
        feedbackElement.textContent = "Resposta correta!";
        feedbackElement.className = "feedback correct";
        score++;
    } else {
        feedbackElement.textContent = "Resposta incorreta!";
        feedbackElement.className = "feedback incorrect";
    }
    feedbackElement.style.display = 'block';
}

function showScore() { //Score do usuário
    var totalQuestions = 10;
    var scoreText = "Você acertou " + score + " de " + totalQuestions + " perguntas.";
    document.getElementById("score").textContent = scoreText;

    // Desempenho do usuário
    // Gif do Psyduck se for menor que 6 (alteração valor de referência)
    if (score <= 6) {
        document.getElementById("gif").innerHTML = '<img src="https://media2.giphy.com/media/5Yl9ZjaQI3waUpEBVO/200w.gif?cid=6c09b952j27xjkalhjvuy9ob4gkcj422mcq17odchm5znsq9&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="Psyduck">';
    } else {
    // Gif do Pikachu se for maior que 6
        document.getElementById("gif").innerHTML = '<img src="https://media.tenor.com/zdt3S5hNnHAAAAAM/pikachu-snivee.gif">';
    }
}