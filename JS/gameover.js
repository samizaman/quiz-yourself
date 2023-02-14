const usernametext = document.getElementById("username");
const savescorebutton = document.getElementById("savescorebutton");
const latestscore = localStorage.getItem("latestscore");
const finalscore = document.getElementById("finalscore");

//array of highscores on local storage // getting what is in local storage or an empty array
const highscore = JSON.parse(localStorage.getItem("highscore")) || [];
const MAXHIGHSCORE = 5;

//updating to latest score
finalscore.innerText = latestscore;

usernametext.addEventListener("keyup", () => {
  // if nothing is typed in input field for username then the button saved is set to disabled
  savescorebutton.disabled = !usernametext.value;
});

savehighscore = (e) => {
  console.log("saved");
  // forms by default have the action post
  e.preventDefault();

  //score object created when user click on save button with the name inputted
  const score = {
    score: latestscore,
    name: usernametext.value,
  };
  highscore.push(score);

  //built-in js function for sort
  highscore.sort((a, b) => {
    //if "b" score higher than "a" score then put "b" before "a"
    return b.score - a.score;
  });
  //cutting of everything after index 5
  highscore.splice(5);

  //updating local storage highscores
  localStorage.setItem('highscore', JSON.stringify(highscore))

  //redirecting back to menu after score has been saved
  window.location.assign("/")


  console.log(highscore);
};
