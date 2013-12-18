"use strict";

var guesscounter = 0;
var paircounter = 0;
var compareArray = [];

// Konstruktorfunktion.
var MemoryGame = {
    
    
    // Initialisering av antalet memoryspel.
    init: function() {
            
        var mem1 = new MemoryBuild("Game1", 4);
        var mem2 = new MemoryBuild("Game2", 4);
        var mem3 = new MemoryBuild("Game3", 4);
        
        mem1.start();
        mem2.start();
        mem3.start();
    }
}
    
    
    
    
    // Memoryspel som startar när fönstret är färdigladdat.
    var MemoryBuild = function(memgame, rows) {
    
            this.start = function() {
            
            var main = document.querySelector("main");
            var div = document.createElement("div");
            div.className = memgame+"div";
            main.appendChild(div);
            
            // Storleksval
            var that = this;
            
            
            var h1 = document.createElement("h1");
            h1.className = memgame+"head";
            h1.innerHTML = memgame+ " OFF";
            div.appendChild(h1);
            
            var opdiv = document.createElement("div");
            var oplabel = document.createElement("label");
            var opselect = document.createElement("select");
            var opbutton = document.createElement("input");
            var opt1 = document.createElement("option");
            var opt2 = document.createElement("option");
            var opt3 = document.createElement("option");
            
            opdiv.className = memgame+"op";
            oplabel.innerHTML = "Välj storlek:";
            opselect.className = memgame+"opselect";
            opt1.value = "2";
            opt1.text = "2x4";
            opt2.value = "3";
            opt2.text = "3x4";
            opt3.value = "4";
            opt3.text = "4x4";
            opbutton.type = "button";
            opbutton.value = "Spela";
            
            opdiv.appendChild(oplabel);
            opdiv.appendChild(opselect);
            opdiv.appendChild(opt1);
            opdiv.appendChild(opt2);
            opdiv.appendChild(opt3);
            opdiv.appendChild(opbutton);
            main.appendChild(opdiv);
            
            opselect.appendChild(opt1);
            opselect.appendChild(opt2);
            opselect.appendChild(opt3);
            
            
                opbutton.onclick = function() {
    
                    var cols = document.querySelector("."+memgame+"opselect").value;
                    console.log(cols);
                    
                    if(cols > 0){
                        buildGame(memgame, cols, rows);
                    }
    
                };
            };
    };
    
    
    
    
    
    var buildGame = function(memgame, cols, rows){

         // Gömmer formuläret och spelet körs igång.
        document.querySelector("."+memgame+"op").remove();
        document.querySelector("."+memgame+"head").innerHTML = memgame+" ON!";
        
        var memoryArray = new RandomGenerator.getPictureArray(cols, rows);
        createMemGame(memoryArray, memgame, cols, rows);
        
        
    };




       var createMemGame = function(memoryArray, memgame, cols, rows) {
                                console.log(cols)
        console.log(rows)
        console.log(memoryArray)

        // Skapar en p-tag som låtsas vara räknare.
        var counter = document.createElement("p");
        counter.className = memgame+"counter";
        counter.innerHTML = "Antal rätta par: 0";
        var div = document.querySelector("."+memgame+"div");
        div.appendChild(counter);
        
                        console.log(memgame)

        
        // Skapar tabellen som memoryspelet kommer ligga i.
        var table = document.createElement(memgame+"table");
        table.className = memgame+"table";
        div.appendChild(table);
        
        var cellID = 0;
        
        // for-loop som skapar varje tr.
        for (var c = 0; c < cols; c += 1) {
            document.querySelector("."+memgame+"table");
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

                playMemory(memoryArray, anchor, img, cellID, memgame);
                
                cellID += 1;
            }
        }
    };
    
    
    
    
    var playMemory = function(memoryArray, anchor, img, cellID, memgame){
        
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
                        compareBricks(compareArray, memoryArray, anchor, img, cellID, memgame);
                    }, 1000);
                }
            }
            
            return false;
        }
    };




 // Jämförelsefunktion som genom olika if-satser bestämmer vad som skall göras.
    var compareBricks = function(compareArray, memoryArray, anchor, img, cellID, memgame) {
        
        // Räknare som håller koll på antalet gissningar.
            guesscounter += 1;
        
        // Om compareArrayens första index och andra index är lika. Fortsätt..
        if(compareArray[0].getElementsByTagName("img")[0].getAttribute("src") === compareArray[1].getElementsByTagName("img")[0].getAttribute("src")){
            
            // Ett rätt par!
            paircounter += 1;
            
            // Skapar en räknare som håller reda på antalet rätta rader.
            var pairs = document.querySelector("."+memgame+"counter");
            pairs.innerHTML = "Antal rätta par: "+paircounter;
            
            // Nollställer compareArrayen.
            compareArray = [];
            
            if(paircounter === memoryArray.length/2){
                    var table = document.querySelector()("main");
                    var winner = document.createElement("p");
                    winner.className = memgame+"winner";
                    winner.innerHTML = "Grattis, du vann och klarade det på " +guesscounter+ " försök!";
                    table.appendChild(winner);
                    
            setTimeout(function() {
                    document.getElementById("winner").innerHTML = "Uppdatera sidan för nytt spel.";
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