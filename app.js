// тоглогчийн ээлжийг хадгалах
var activePlayer = 1;

//тоглогчийн оноог хадгалах
var scope = [0, 0];

//тоглогчийн ээлжийн оноог хадгалах
var roundScore = 0;

//шоог аль талаараа буусныг хадгалах
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
//window.document.querySelector( "#score-0").textContent = dice;

//document.querySelector( "#score-1").textContent = dice;

document.querySelector( " .dice ").style.display = " none" ;
document.querySelector( "#score-1").textContent = 0;
document.querySelector( "#score-0").textContent = 0;

document.querySelector( "#current-0").textContent = 0 ;
document.querySelector( "#current-1").textContent = 0 ;

document.querySelector( " .dice ").style.display = " none" ;

console.log( "Шоо :" + dice);