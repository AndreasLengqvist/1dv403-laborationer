"use strict";

    var Memory = {
        
        guesscount: 0,      // Räknare som håller koll på antalet rätt och när spelet är slut.
        picArray: [],       // Array som sparar ner 2 bilder/nummer och jämför dem.
        memoryArray: [],    // memory array som visar de framslumpade numren.


        init:function () {
            Memory.memoryArray = RandomGenerator.getPictureArray(4, 4);
            
            Memory.createTable();
        },
        
        
        // Skapar en wrapper för att kapsla in memoryspelet.
        createTable: function() {
                var main = document.getElementById("main");   
                var table = document.createElement("table");        //Skapar en tabell
                table.className = "memtable"
                main.appendChild(table);                            //Lägger tabellen i theGame
                var MessageID = 0;
                

            for (var c = 0; c < Memory.memoryArray.length/c; c+=1) {              //For loop som skapar raderna
                var trTag = document.createElement("tr");       //Skapar tr taggar
                trTag.className = "tr";                         //Ger tr taggarna ett klassnamn
                table.appendChild(trTag);                       //Lägger in tr taggarna i tabellen
                
                for(var r = 0; r < Memory.memoryArray.length/r; r+=1){            //Forloop som skapar kolumnerna
                    var tdTag = document.createElement("td");   //Skapar td taggar
                    tdTag.className = "td";                     //Ger td taggarna ett klassnamn
                    trTag.appendChild(tdTag);                   //Lägger in td taggarna i tr taggarna
                    
                var pic = document.createElement("img");      //Skapar en img tagg
                    pic.setAttribute("src", "pics/0.png");    //Länkar in en bild i img taggen
    				pic.className = "image";                  //Ger img taggen ett klassnamn
    				
    			var link = document.createElement("a");         //Skapar en a tagg
                    link.setAttribute("href", "#");             //Gör a taggen till en länk
                    
                    tdTag.appendChild(link);                    //Lägger a taggen i td taggen
                    link.appendChild(pic);                    //Lägger bilden i a taggen som gör bilden till en länk
                    Memory.memoryClick(link, pic, MessageID);//Ropar på metoden turnImages som ska vända bilderna när man klickar på dom
                    
                    MessageID += 1;                             //Plussar på i så att alla bilder kommer att finnas med istället för att alla brickor innehåller samma
                }
        }
        
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
            if(Memory.picArray[0].getElementsByTagName("img")[0].getAttribute("src") === Memory.picArray[1].getElementsByTagName("img")[0].getAttribute("src")){
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
    }

};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = Memory.init;