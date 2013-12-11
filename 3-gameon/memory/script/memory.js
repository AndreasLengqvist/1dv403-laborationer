"use strict";

    var Memory = {
        
        guesscount: 0,      // Räknare som håller koll på antalet rätt och när spelet är slut.
        lastGuess: -1,       // Numret på senaste gissningen.
        picArray: [],       // Array som sparar ner 2 bilder/nummer och jämför dem.
        memoryArray: [],    // memory array som visar de framslumpade numren.
        rows: 4,            // Sätter antalet rader i memoryspelet.
        cols: 4,            // Sätter antalet kolumner i memoryspelet.


        init:function () {
            var memory1 = new RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
            Memory.memoryArray = memory1;
            
            Memory.createTable();
        },
        
        
        // Skapar en wrapper för att kapsla in memoryspelet.
        createTable: function() {
            var wrapper = document.querySelector("#main");
            var div = document.createElement("div");
            div.className = "memgame";
            wrapper.appendChild(div);


            // Skapar en tabell.
            document.querySelector(".memgame");
            var table = document.createElement("table");
            table.className = "memtable";
            div.appendChild(table);


            var MemoryID = 0;

            // Skapar tabelceller som fungerar som memorybrickor med en bild i varje cell.
            for (var r = 0; r < Memory.rows; r += 1) {
                var tr = document.createElement("tr");
                table.appendChild(tr);
                
                for (var c = 0; c < Memory.cols; c += 1) {
                    tr.appendChild(Memory.createMemorybrick(MemoryID));
                    MemoryID += 1;
                }
            }
        },
        
        
        // Skapar och bygger upp varje unik cell. Anropas från for-loopen som skapar td-cellen.
        createMemorybrick: function(MemoryID) {
                    var td = document.createElement("td");
                    var link = document.createElement("a");
                    var pic = document.createElement("img");
                    
                    link.setAttribute("href", "#");
                    pic.setAttribute("src", "pics/0.png");
                    pic.setAttribute("id", MemoryID);
                    
                    // onclick-funktion som anropar memoryClick som visar den unika bilden.
                    link.onclick = function() {
                        Memory.memoryClick(MemoryID);
                    };
                    
                    link.appendChild(pic);
                    td.appendChild(link);
                    return td;
        },
        
        
        // Funktionen som anropas när användaren klickar på en bild. Timer som visar de två unika bilderna användaren klickat på i 1 sekund för att sedan vända dem igen.
        // Klickar man fram samma bilder så vänds båda upp och räknaren ökas med 1 rätt.
        memoryClick: function (MemoryID) {
        var mempic = document.getElementById(MemoryID);
        var lastpic = document.getElementById(Memory.lastGuess);
        mempic.setAttribute("src", "pics/"+this.memoryArray[MemoryID]+".png");

            console.log("Guesses:"+Memory.guesscount);

            
            
            // Om räknaren går upp till samma som spelets brickor är spelet slut och man har vunnit.
           if(Memory.guesscount == (Memory.memoryArray.length/2)){
                console.log("DU VANN!");
                var div = document.querySelector(".memgame");
                var winner = document.createElement("p");
                winner.className = "winner";
                winner.innerHTML = "Du vann!";
                div.appendChild(winner);
            }

            // Om sista gissningen är högre än 1 (alltså om en gissning är gjord).
            if(this.memoryArray[Memory.lastGuess] > 0){
                
                // Om gissningen är fel.
                if(this.memoryArray[Memory.lastGuess] != Memory.memoryArray[MemoryID]){
                    console.log("Fel gissat!");
                        
                        // Timer som resettar bilderna när de är fel.
                        setTimeout(function() {
                        mempic.setAttribute("src", "pics/0.png");
                        lastpic.setAttribute("src", "pics/0.png");
                        }, 1000);
                    
                }
                
                // Om gissningen är rätt.
                if(this.memoryArray[Memory.lastGuess] == Memory.memoryArray[MemoryID]){
                    console.log("Rätt gissat!");
                    Memory.guesscount += 1;
                }
                
                Memory.lastGuess = -1;
            }
            
            else {
            Memory.lastGuess = MemoryID;
            }
            
        // Om räknaren går upp till samma som spelets brickor är spelet slut och man har vunnit.
           if(Memory.guesscount == (Memory.memoryArray.length/2)){
                console.log("DU VANN!");
                var div = document.querySelector(".memgame");
                var winner = document.createElement("p");
                winner.className = "winner";
                winner.innerHTML = "Du vann!";
                div.appendChild(winner);
            }
            
            // Skapar en räknare som håller koll på hur man rätt man har.
            if (Memory.guesscount > 0){
                document.querySelector(".counter").innerHTML = +Memory.guesscount;
            }
            
        }
 
};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = Memory.init;