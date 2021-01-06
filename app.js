// тоглогчийн ээлжийг хадгалах
var activePlayer = 0;

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
var diceDom = document.querySelector( " .dice ");
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
        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        document.getElementById("current-" + activePlayer).textContent = 0;
        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
        //Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
        // Үгүй бол идэвхитэй тоглогч нь 0 болго.
        roundScore = 0;
       activePlayer === 0  ? (activePlayer = 1) : (activePlayer = 0);
       //Улаан цэг шилжүүлнэ.
       document.querySelector(".player-0-panel" ).classList.toggle("active");
       document.querySelector(".player-1-panel" ).classList.toggle("active");
       //Шоог түр алга болгох 
       diceDom.style.display = "none" ;

       

       roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = 0;
       // if(activePlayer === 0){
        //    activePlayer = 1;
       // } else {
       //     activePlayer = 0
        //}
    }
});
