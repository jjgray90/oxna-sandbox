let teamOneScore = 0;
let teamTwoScore = 0;
let isTeamOne = true;
let isGameStopped = false;

document
  .getElementById("teamOneBtn")
  .addEventListener("click", () => handleScoreClick(isTeamOne));

document
  .getElementById("teamTwoBtn")
  .addEventListener("click", () => handleScoreClick(!isTeamOne));

const handleScoreClick = (team) => {
  team === isTeamOne ? teamOneScore++ : teamTwoScore++;
  getScore();
};

const handleStopGame = () => {
  isGameStopped = true;

  if (isGameStopped) {
    alert(
      "Final Score - Team One " +
        teamOneScore +
        "-" +
        teamTwoScore +
        " Team Two"
    );
  }
};

const getScore = () => {
  document.getElementById("teamOneScore").innerHTML = teamOneScore;
  document.getElementById("teamTwoScore").innerHTML = teamTwoScore;
};

getScore();
