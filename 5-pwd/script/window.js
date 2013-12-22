"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};
 
 
    // Baskonstruktorn för fönsterkonstruktionen. De olika fönstervarianterna ärver grunden i från denna.
    MYMAK.Window = function(name, idname, cols) {
    
        var that = this;
        this.name = name;
        this.idname = idname;
        this.cols = cols;
 
        that.guesscounter = 0;
        that.paircounter = 0;
        that.compareArray = [];
        that.memoryArray = [];

        that.buildwindow = function () {
            
            var body = document.querySelector("body");
            
            var windowdiv = document.createElement("div");
            var headdiv = document.createElement("div");
            var statusdiv = document.createElement("div");
            windowdiv.className = "windowdiv";
            windowdiv.id = that.idname;
            console.log(that.idname);
            headdiv.className = "headdiv";
            headdiv.id = "headdiv"+that.name;
            statusdiv.className = "statusdiv";
            statusdiv.id = "statusdiv"+that.name;

            // Headdivens konstruktion.
            var headlabel = document.createElement("label");
            var headimg = document.createElement("img");
            var headclose = document.createElement("input");
            var headminim = document.createElement("input");
            headimg.className = "headimg";
            headimg.id = "headimg"+that.name;
            headimg.src = "pics/dockmemoryicon.png";
            headlabel.className = "headlabel";
            headlabel.id = "headlabel"+that.name;
            headlabel.appendChild(document.createTextNode(that.name));
            headclose.type = "button";
            headclose.className = "headclose";
            headclose.id = "headclose"+that.name;
            headminim.type = "button";
            headminim.className = "headminim";
            headminim.id = "headminim"+that.name;

            headdiv.appendChild(headclose);
            headdiv.appendChild(headminim);            
            headdiv.appendChild(headlabel);
            headdiv.appendChild(headimg);

            windowdiv.appendChild(headdiv);
            windowdiv.appendChild(statusdiv);
            
            body.appendChild(windowdiv);
            


        that.buildGame = function(){

        var gamediv = document.querySelector("#"+that.idname);
        gamediv.id = that.idname;
        
        var rows = 4;
        
        that.memoryArray = new RandomGenerator.getPictureArray(cols, rows);
        createMemGame(that.idname, that.cols, rows);
        };
    
        // Skapar elementet.    
        var createMemGame = function(game, cols, rows) {
            
            // Skapar en p-tag som låtsas vara räknare.
            var counter = document.createElement("p");
            counter.className = "counter";
            counter.id = game+"counter";
            counter.innerHTML = "Antal rätta par: 0";
            var gamediv = document.querySelector("#"+game);
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
    
    
                    playMemory(name, anchor, img, cellID);
                    
                    cellID += 1;
                }
            }
        };
        
        
        
        // Spelar.
        var playMemory = function(name, anchor, img, cellID){
    
    
            // Gissningsfunktion (anonymfunktion) som anropas då man trycker på ett frågetecken.
            anchor.onclick = function() {
    
                // Om den tryckta bilden är ett frågetecken. Fortsätt..
                if(img.getAttribute("src") === "pics/0.png"){
                
                    // Spara ner den tryckta bildens anchor till en compareArrey.
                    that.compareArray.push(anchor);
                    // Går compareArrayens lenght över 2 så vänds brickorna tillbaks. Annars fortsätt..
                    if (that.compareArray.length === 1 || that.compareArray.length === 2){
                        
                            // Sätter den tryckta brickan till dessa hemliga bild.
                            img.setAttribute("src", "pics/" +that.memoryArray[cellID]+ ".png");
                    }    
                    
                    // Om compareArreyen har sparat ner två brickor. 
                    // Anropa compareBricks i en timerfunktion på en sekund.
                    if(that.compareArray.length === 2){
                        setTimeout(function() {
                            compareBricks(that.idname, anchor, img, cellID);
                        }, 1000);
                    }
                }
                
                return false;
            };
        };
    
    
    
    
        // Jämförelsefunktion som genom olika if-satser bestämmer vad som skall göras.
        var compareBricks = function(name) {
            console.log(name)
            // Räknare som håller koll på antalet gissningar.
                 that.guesscounter += 1;
            
                // Om compareArrayens första index och andra index är lika. Fortsätt..
                if( that.compareArray[0].getElementsByTagName("img")[0].getAttribute("src") ===  that.compareArray[1].getElementsByTagName("img")[0].getAttribute("src")){
                    
                    // Ett rätt par!
                     that.paircounter += 1;
                    
                    // Skapar en räknare som håller reda på antalet rätta rader.
                    var pairs = document.querySelector("#"+name+"counter");
                    pairs.innerHTML = "Antal rätta par: "+ that.paircounter;
                    
                    // Nollställer compareArrayen.
                     that.compareArray = [];
                    
                    if( that.paircounter ===  that.memoryArray.length/2){
                            var gamediv = document.querySelector("#"+name);
                            var winner = document.createElement("p");
                            winner.className = "winner";
                            winner.id = name+"winner";
                            winner.innerHTML = "Grattis, du vann och klarade det på " + that.guesscounter+ " försök!";
                            gamediv.appendChild(winner);
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


};













window.onload = MYMAK.Window();