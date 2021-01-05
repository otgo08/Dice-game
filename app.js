// тоглогчийн ээлжийг хадгалах
var activePlayer = 1;

//тоглогчийн оноог хадгалах
var scope = [0, 0];

//тоглогчийн ээлжийн оноог хадгалах
var roundScore = 0;

//шоог аль талаараа буусныг хадгалах
var diceNumber = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
//window.document.querySelector( "#score-0").textContent = dice;

//document.querySelector( "#score-1").textContent = dice;
//програм эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = "0";
document.getElementById( "score-1").textContent = "0";
document.getElementById( "current-0").textContent = "0" ;
document.getElementById( "current-1").textContent = "0" ;
var diceDom = document.querySelector( " .dice ")
diceDom.style.display = " none" ;
document.querySelector(".btn-roll").addEventListener("click", function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = " block" ;
    diceDom.src = "dice-" + diceNumber + ".png"
    

    
});

function shooShid(){s
    alert      
}