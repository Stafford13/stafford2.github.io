function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {

var startingBet = Number(document.getElementById("startingBet").value);
var gameMoney = startingBet;
var firstD;
var secondD;
var dSum;
var maxWin = 0;
var rolls = 0;
var rollsAtMax = 0;

if (startingBet <= 0) {
  alert("Please enter a starting bet above 0.");
}
else {
    while (gameMoney > 0) {
      firstD = rollDice();
      secondD = rollDice();
      dSum = firstD + secondD;
      rolls++;
      if (dSum != 7) {
          gameMoney--;
          console.log("lost");
        }
        else {
          gameMoney += 4;
            if(gameMoney > maxWin){
              maxWin += (gameMoney-maxWin);
              rollsAtMax = rolls;
            }
            console.log("won");
        }
    }
}
document.getElementById("finished").style.display = "block";
document.getElementById("play").innerText = "Play Again";
document.getElementById("starting").innerText = startingBet;
document.getElementById("rollNumber").innerText = rolls;
document.getElementById("won").innerText = maxWin;
document.getElementById("rollsAtMax").innerText = rollsAtMax;
return false;
}

 /*game over display results: starting bet, total number of rolls before 'game money' = 0,
  highest amount won, roll count at highest amount won

  variable for how many rolls taken before money ran out
  variable for maximum amount of money held by player
  variable for how many rolls when user held the most money
*/
