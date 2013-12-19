"use strict";

var guesscounter = 0;
var paircounter = 0;
var compareArray = [];
var memoryArray = [];


// Konstruktorfunktion.
var MemoryGame = {
    
    
    // Initialisering av antalet memoryspel.
    init: function () {
            
        var mem1 = new Game("game1", 4);
        var mem2 = new Game("game2", 4);

        mem1.build();
        mem2.build();
        
        
    },
        
        
    
};
    
    var buildGame = function(game, cols, rows){


         // Gömmer formuläret och spelet körs igång.
        document.querySelector("."+game).innerHTML = "Game ON!";
        document.querySelector("."+game+"form").remove();
        var gamediv = document.createElement("div");
        gamediv.className = game;
        
        
        memoryArray = new RandomGenerator.getPictureArray(cols, rows);
        createMemGame(game, cols, rows);
    }
    

       var createMemGame = function(game, cols, rows) {

        // Skapar en p-tag som låtsas vara räknare.
        var counter = document.createElement("p");
        counter.className = game+"counter";
        counter.innerHTML = "Antal rätta par: 0";
        var gamediv = document.querySelector("."+game);
        gamediv.appendChild(counter);
        
        // Skapar tabellen som memoryspelet kommer ligga i.
        var table = document.createElement("table");
        table.className = game+"table";
        gamediv.appendChild(table);
        
        var cellID = 0;
        
        // for-loop som skapar varje tr.
        for (var c = 0; c < cols; c += 1) {
            document.querySelector("."+game+"table");
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            // Nästlad for-loop som skapar varje td genom att anropa createCell.
            // Ett unikt cellID tilldelas varje td. I slutet anropas även playMemory.
            for (var r = 0; r < rows; r += 1) {
                
                var td = document.createElement("td");
                var anchor = document.createElement("a");
                var img = document.createElement("img");
                    
                anchor.setAttribute("href", "#");
                img.setAttribute("src", "pics/0.png");
                
                anchor.appendChild(img);
                td.appendChild(anchor);
                tr.appendChild(td);
                console.log(memoryArray)

                playMemory(game, anchor, img, cellID);
                
                cellID += 1;
            }
        }
    };
    
    
    
    
    var playMemory = function(game, anchor, img, cellID){

        // Gissningsfunktion (anonymfunktion) som anropas då man trycker på ett frågetecken.
        anchor.onclick = function() {

            // Om den tryckta bilden är ett frågetecken. Fortsätt..
            if(img.getAttribute("src") === "pics/0.png"){
            
                // Spara ner den tryckta bildens anchor till en compareArrey.
                compareArray.push(anchor);
                
                // Går compareArrayens lenght över 2 så vänds brickorna tillbaks. Annars fortsätt..
                if (compareArray.length === 1 || compareArray.length === 2){
                    
                        // Sätter den tryckta brickan till dessa hemliga bild.
                        img.setAttribute("src", "pics/" +memoryArray[cellID]+ ".png");
                }    
                
                // Om compareArreyen har sparat ner två brickor. 
                // Anropa compareBricks i en timerfunktion på en sekund.
                if(compareArray.length === 2){
                    setTimeout(function() {
                        compareBricks(game, anchor, img, cellID);
                    }, 1000);
                }
            }
            
            return false;
        }
    };




 // Jämförelsefunktion som genom olika if-satser bestämmer vad som skall göras.
    var compareBricks = function(game, cellID) {
        
        // Räknare som håller koll på antalet gissningar.
            guesscounter += 1;
        
        // Om compareArrayens första index och andra index är lika. Fortsätt..
        if(compareArray[0].getElementsByTagName("img")[0].getAttribute("src") === compareArray[1].getElementsByTagName("img")[0].getAttribute("src")){
            
            // Ett rätt par!
            paircounter += 1;
            
            // Skapar en räknare som håller reda på antalet rätta rader.
            var pairs = document.querySelector("."+game+"counter");
            pairs.innerHTML = "Antal rätta par: "+paircounter;
            
            // Nollställer compareArrayen.
            compareArray = [];
            
            if(paircounter === memoryArray.length/2){
                    var gamediv = document.querySelector("."+game+"div");
                    var winner = document.createElement("p");
                    winner.className = game+"winner";
                    winner.innerHTML = "Grattis, du vann och klarade det på " +guesscounter+ " försök!";
                    gamediv.appendChild(winner);
                    
            setTimeout(function() {
                    document.querySelector("."+game+"winner").innerHTML = "Uppdatera sidan för nytt spel.";
            }, 5000);
            
            }
            
        }
        
        // Annars vänd tillbaks brickorna till frågetecken och nollställ compareArrayen.
        else{
            
                compareArray[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                compareArray[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                compareArray = [];
        }
        
    };
    



window.onload = MemoryGame.init;