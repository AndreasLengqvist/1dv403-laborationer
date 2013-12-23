"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};



    // Konstruktorn för Memoryspelet. Ärver grunden från MYMAK.Window.
    MYMAK.Memory = function(idname, picion, poscount, cols) {
    
        MYMAK.Window.call(this, idname, picion, poscount);
        
        
        this.cols = cols;
        this.guesscounter = 0;
        this.paircounter = 0;
        this.compareArray = [];
        this.memoryArray = [];
    };


    MYMAK.Memory.prototype = new MYMAK.Window();
    
    
        MYMAK.Memory.prototype.buildGame = function(){
            
        var gamediv = document.querySelector("#"+this.idname);

        var rows = 4;

        this.memoryArray = new RandomGenerator.getPictureArray(this.cols, rows);



            // Skapar en p-tag som låtsas vara räknare.
            var counter = document.createElement("p");
            counter.className = "counter";
            counter.id = this.idname+"counter";
            counter.innerHTML = "Antal rätta par: 0";
            gamediv.appendChild(counter);
            
            // Skapar tabellen som memoryspelet kommer ligga i.
            var table = document.createElement("table");
            table.className = "table";
            gamediv.appendChild(table);

            var cellID = 0;
            var that = this;
            // for-loop som skapar varje tr.
            for (var c = 0; c < this.cols; c += 1) {
                document.querySelector(".table");
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
                    
                    MYMAK.Memory.prototype.playMemory(this.idname, anchor, img, cellID, that);

                    cellID += 1;
                }
            }
        };

        
        
        // Spelar.
        MYMAK.Memory.prototype.playMemory = function(name, anchor, img, cellID, that){

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
                    // Efter en sekund, jämför den om brickorna är likadana eller inte i en comparefunktion.
                    if(that.compareArray.length === 2){
                        setTimeout(function() {
                            
                            
                             // Räknare som håller koll på antalet gissningar.
                 that.guesscounter += 1;
            
                // Om compareArrayens första index och andra index är lika. Fortsätt..
                if(that.compareArray[0].getElementsByTagName("img")[0].getAttribute("src") ===  that.compareArray[1].getElementsByTagName("img")[0].getAttribute("src")){
                    
                    // Ett rätt par!
                     that.paircounter += 1;

                    // Skapar en räknare som håller reda på antalet rätta rader.
                    var pairs = document.querySelector("#"+name+"counter");
                    pairs.innerHTML = "Antal rätta par: "+that.paircounter;
                    
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
                            
                            
                            
                        }, 1000);
                    }
                }
                
                return false;
            };
        };