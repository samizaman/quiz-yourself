const highscorelist = document.getElementById("highscorelist");
const highscore = JSON.parse(localStorage.getItem("highscore")) || [];

// map takes incoming arrray(highscore) and converts everything into seperate elements
highscorelist.innerHTML = highscore.map(score => {
    return `<li class="highscorelink">${score.name}-${score.score}</li>`;
  }).join("");
  