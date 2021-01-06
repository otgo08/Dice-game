// шооны зургийг үзүүлэх элементийг DOM-с хайж олоод үзүүлэх
var diceDom = document.querySelector( " .dice ");
//тоглоомны бүх газарт ашиглагдах глобал хувьсагчийг энд зарлая
var activePlayer = 0;
//тоглогчийн оноог хадгалах
var scores = [0, 0];
//тоглогчийн ээлжийн оноог хадгалах
var roundScore = 0;
//шоог аль талаараа буусныг хадгалах
var diceNumber = Math.floor(Math.random() * 6) + 1;

diceDom.style.display = "none" ;
function initGame(){
    // тоглогчийн ээлжийг хадгалах
activePlayer = 0;
//тоглогчийн оноог хадгалах
scores = [0, 0];
//тоглогчийн ээлжийн оноог хадгалах
roundScore = 0;
//шоог аль талаараа буусныг хадгалах
diceNumber = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
//window.document.querySelector( "#score-0").textContent = dice;
//document.querySelector( "#score-1").textContent = dice;
//програм эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = "0";
document.getElementById( "score-1").textContent = "0";
document.getElementById( "current-0").textContent = "0" ;
document.getElementById( "current-1").textContent = "0" ;
diceDom.style.display = "none" ;
document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
};
diceNumber = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
//window.document.querySelector( "#score-0").textContent = dice;
//document.querySelector( "#score-1").textContent = dice;
//програм эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = "0";
document.getElementById( "score-1").textContent = "0";
document.getElementById( "current-0").textContent = "0" ;
document.getElementById( "current-1").textContent = "0" ;
diceDom.style.display = "none" ;
//шоог шилэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
    //1-6 хүртэлх дотор санамсаргүй гаргаж ирнэ,
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны тоог веб дээр гаргаж ирнэ.
    diceDom.style.display = " block" ;
    // Буусан санамсаргүй тоонд харгалцах шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";
    // Буусан тоо нь 1 ээс ялгаагүй бол тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
        // 1-ээс ялгаатай тоо буулаа, Буусан тоог тоглогчид нэмж өгнө,
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        switchToNextPlayer();
   
    }
});

//HOLD Товчны эвент листинер
document.querySelector('.btn-hold').addEventListener('click', function() {
    //Уг тоглогчийн цуглуулсан оноог глабал оноо дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    //уг тоглогчийг хожсон эсэхийг (оноо нь 100-с их эсэх ) шалгах
    if (scores[activePlayer] >= 10) {
        //ялагч гэх нэрийг нь солино.
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
         //Тоглогчийн ээлжийг нь солино. 
         switchToNextPlayer();   
    } 
});
//Энэ функц нь тоглох ээлжийг дараагийн тоглогч руу шилжүүлддэг.
function switchToNextPlayer(){
// Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
roundScore = 0;
document.getElementById("current-" + activePlayer).textContent = 0;
// Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
activePlayer === 0  ? (activePlayer = 1) : (activePlayer = 0);

//Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
// Үгүй бол идэвхитэй тоглогч нь 0 болго.


//Улаан цэг шилжүүлнэ.
document.querySelector(".player-0-panel" ).classList.toggle("active");
document.querySelector(".player-1-panel" ).classList.toggle("active");
//Шоог түр алга болгох 
diceDom.style.display = "none" ;
}

//шинэ тоглоом эхлүүлэх товчны листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
