"use strict";





// Konstruktor funktion.
var Game = function(game, rows) {
    var that = this;
    that.game = game;
    that.rows = rows;
    
    that.guesscounter = 0;
    that.paircounter = 0;
    that.compareArray = [];
    that.memoryArray = [];
    
    // Lägg i init.
    this.build = function() {
         
            var that = this;
            // Storleksval
            var main = document.querySelector("main");
            
            var h1 = document.createElement("h1");
            h1.className = this.game;
            h1.innerHTML = "Game OFF";
            main.appendChild(h1);
            
            var opdiv = document.createElement("div");
            var opform = document.createElement("form");
            var oplabel = document.createElement("label");
            var opselect = document.createElement("select");
            var opbutton = document.createElement("input");
            var opt1 = document.createElement("option");
            var opt2 = document.createElement("option");
            var opt3 = document.createElement("option");
            
            opform.className = that.game+"form";
            opdiv.className = that.game+"div";
            oplabel.innerHTML = "Välj storlek:";
            opselect.className = that.game+"op";
            opt1.value = "2";
            opt1.text = "2x4";
            opt2.value = "3";
            opt2.text = "3x4";
            opt3.value = "4";
            opt3.text = "4x4";
            opbutton.type = "button";
            opbutton.value = "Spela";
            
            opform.appendChild(oplabel);
            opform.appendChild(opselect);
            opform.appendChild(opt1);
            opform.appendChild(opt2);
            opform.appendChild(opt3);
            opform.appendChild(opbutton);
            opdiv.appendChild(opform);
            main.appendChild(opdiv);
            
            opselect.appendChild(opt1);
            opselect.appendChild(opt2);
            opselect.appendChild(opt3);
            
            
                // onclick-funktion som läser ner antalet kolumner och anropar buildGame.
                opbutton.onclick = function() {
                    var cols = document.querySelector("."+that.game+"op").value;

                    if(cols > 0){
                        buildGame(that.game, cols, rows);
                    }
    
                };
            };
            
    
    // Bygger varje enskilt memoryspel.
    var buildGame = function(game, cols, rows){

         // Gömmer formuläret och spelet körs igång.
        document.querySelector("."+game).innerHTML = "Game ON!";
        document.querySelector("."+game+"form").remove();
        var gamediv = document.createElement("div");
        gamediv.className = game;
        
        that.memoryArray = new RandomGenerator.getPictureArray(cols, rows);
        createMemGame(game, cols, rows);
    };
    
    // Skapar elementet.    
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


                playMemory(game, anchor, img, cellID);
                
                cellID += 1;
            }
        }
    };
    
    
    
    // Spelar.
    var playMemory = function(game, anchor, img, cellID){


        // Gissningsfunktion (anonymfunktion) som anropas då man trycker på ett frågetecken.
        anchor.onclick = function() {
            console.log(that.memoryArray[cellID])


            // Om den tryckta bilden är ett frågetecken. Fortsätt..
            if(img.getAttribute("src") === "pics/0.png"){
            
                // Spara ner den tryckta bildens anchor till en compareArrey.
                that.compareArray.push(anchor);
                console.log(that.compareArray)
                // Går compareArrayens lenght över 2 så vänds brickorna tillbaks. Annars fortsätt..
                if (that.compareArray.length === 1 || that.compareArray.length === 2){
                    
                        // Sätter den tryckta brickan till dessa hemliga bild.
                        img.setAttribute("src", "pics/" +that.memoryArray[cellID]+ ".png");
                }    
                
                // Om compareArreyen har sparat ner två brickor. 
                // Anropa compareBricks i en timerfunktion på en sekund.
                if(that.compareArray.length === 2){
                    setTimeout(function() {
                        compareBricks(game, anchor, img, cellID);
                    }, 1000);
                }
            }
            
            return false;
        };
    };




 // Jämförelsefunktion som genom olika if-satser bestämmer vad som skall göras.
    var compareBricks = function(game) {
        
        // Räknare som håller koll på antalet gissningar.
            that.guesscounter += 1;
        
        // Om compareArrayens första index och andra index är lika. Fortsätt..
        if( that.compareArray[0].getElementsByTagName("img")[0].getAttribute("src") ===  that.compareArray[1].getElementsByTagName("img")[0].getAttribute("src")){
            
            // Ett rätt par!
             that.paircounter += 1;
            
            // Skapar en räknare som håller reda på antalet rätta rader.
            var pairs = document.querySelector("."+game+"counter");
            pairs.innerHTML = "Antal rätta par: "+ that.paircounter;
            
            // Nollställer compareArrayen.
             that.compareArray = [];
            
            if( that.paircounter ===  that.memoryArray.length/2){
                    var gamediv = document.querySelector("."+game+"div");
                    var winner = document.createElement("p");
                    winner.className = game+"winner";
                    winner.innerHTML = "Grattis, du vann och klarade det på " + that.guesscounter+ " försök!";
                    gamediv.appendChild(winner);
                    
            setTimeout(function() {
                    document.querySelector("."+game+"winner").innerHTML = "Uppdatera sidan för nytt spel.";
            }, 5000);
            
            }
            
        }
        
        // Annars vänd tillbaks brickorna till frågetecken och nollställ compareArrayen.
        else{
            
                 that.compareArray[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                 that.compareArray[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                 that.compareArray = [];
        }
        
    };
    

}