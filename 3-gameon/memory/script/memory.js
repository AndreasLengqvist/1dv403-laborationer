"use strict";

    var Memory = {
        
        guesscount: 0,      // Räknare som håller koll på antalet rätt och när spelet är slut.
        lastGuess: -1,       // Numret på senaste gissningen.
        picArray: [],       // Array som sparar ner 2 bilder/nummer och jämför dem.
        memoryArray: [],    // memory array som visar de framslumpade numren.
        rows: 4,            // Sätter antalet rader i memoryspelet.
        cols: 4,            // Sätter antalet kolumner i memoryspelet.
        clickCounter: 0,    // Räknare som håller koll på antalet klick.


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
                        Memory.memoryClick(link, pic, MemoryID);
                    };
                    
                    link.appendChild(pic);
                    td.appendChild(link);
                    return td;
        },
        
        
        // Funktionen som anropas när användaren klickar på en bild. Timer som visar de två unika bilderna användaren klickat på i 1 sekund för att sedan vända dem igen.
        // Klickar man fram samma bilder så vänds båda upp och räknaren ökas med 1 rätt.
        memoryClick: function (link, pic, MemoryID) {

            // Om bilden är ett frågetecken.
            if(pic.getAttribute("src") === "pics/0.png") {
                
                // Lägger till den tryckta a-taggen till en jämförelse-array.
                Memory.picArray.push(link);
                
                // Om jamförelse-arrayen är mindre än 3. Sätt den klickta bilden till dess hemliga värde.
                if(Memory.picArray.length === 1 || Memory.picArray.length === 2) {
                    pic.setAttribute("src", "pics/"+Memory.memoryArray[MemoryID]+".png");
                }
                
                // Om jämförelse-arrayen är 2. Anropar comparePics och sätter en timer på 1 sekund.
                if(Memory.picArray.length === 2){
                    
                    // Timer som resettar bilderna när de är fel.
                    setTimeout(function() {
                    Memory.comparePics();
                    }, 1000);
                }
            }
        
        },
    
        // Funktion som jämför de klickta bilderna.
        comparePics: function() {
            
            // Om den första klickta bilden är likadan som den nya klickta bilden. Plussa räknaren med ett och nollställ jämförelse-arrayen.
            if(Memory.picArray[0].getElementsByTagName("img")[0].getAttribute("src") === Memory.picArray[1].getElementsByTagName("img")[0].getAttribute("src"));
                Memory.guesscount += 1;
                Memory.picArray = [];
                
                if(Memory.guesscount === Memory.memoryArray.length/2) {
                    console.log("DU VANN!");
                    var div = document.querySelector(".memgame");
                    var winner = document.createElement("p");
                    winner.className = "winner";
                    winner.innerHTML = "Du vann!";
                    div.appendChild(winner);
                }
            
            // Nollställer de jämnförda bilderna till frågetecken-bilden igen och nollställer jämförelse-arrayen.
            else {
                Memory.picArray[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                Memory.picArray[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                Memory.picArray = [];
            }
    }

};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = Memory.init;