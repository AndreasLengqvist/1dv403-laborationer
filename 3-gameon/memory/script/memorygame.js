"use strict";


// Memoryspel som startar när fönstret är färdigladdat.
var Memory = {
    
    memoryArray: [],        // Array som har hand om de slumpade memorybrickorna.
    compareArray: [],       // Array som sparar ner och jämför de två gissade brickorna.
    paircounter: 0,         // Räknare som har hand om antalet rätta par.
    guesscounter: 0,        // Räknare som har hand om antalet gjorda gissningar.
    rows: 4,                // Inskrivning av antalet rader i spelet.
    cols: 2,                // Inskrivning av antalet kolumner i spelet.
    
    
    // Initieringsfunktion som skapar spelet när sidan laddats klart.
    init: function() {
        
        document.createElement("input");
        
        
        Memory.memoryArray = new RandomGenerator.getPictureArray(Memory.cols, Memory.rows);
        
        Memory.createMemGame();
        
    },
    
    // Createfunktion som skapar själva spelbrädet.
    createMemGame: function() {
        
        // Skapar tabellen som memoryspelet kommer ligga i.
        var wrapper = document.getElementById("main");
        var table = document.createElement("table");
        table.className = "memgame";
        wrapper.appendChild(table);
        
        var cellID = 0;
        
        // for-loop som skapar varje tr.
        for (var c = 0; c < Memory.cols; c += 1) {
            document.getElementById("memgame");
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            // Nästlad for-loop som skapar varje td genom att anropa createCell.
            // Ett unikt cellID tilldelas varje td. I slutet anropas även playMemory.
            for (var r = 0; r < Memory.rows; r += 1) {
                
                var td = document.createElement("td");
                var anchor = document.createElement("a");
                var img = document.createElement("img");
                    
                anchor.setAttribute("href", "#");
                img.setAttribute("src", "pics/0.png");
                
                anchor.appendChild(img);
                td.appendChild(anchor);
                tr.appendChild(td);

                Memory.playMemory(anchor, img, cellID);
                
                cellID += 1;
                

            }
        }
    },

    
    // Playfunktion som vänder, jämför och behandlar memoryspelet när en av brickorna trycks in.
    playMemory: function(anchor, img, cellID) {
        
        
        // Gissningsfunktion (anonymfunktion) som anropas då man trycker på ett frågetecken.
        anchor.onclick = function() {
                
                
            // Om den tryckta bilden är ett frågetecken. Fortsätt..
            if(img.getAttribute("src") === "pics/0.png"){
                
                // Spara ner den tryckta bildens anchor till en compareArrey.
                Memory.compareArray.push(anchor);
                
                // Går compareArrayens lenght över 2 så vänds brickorna tillbaks. Annars fortsätt..
                if (Memory.compareArray.length === 1 || Memory.compareArray.length === 2){
                    
                        // Sätter den tryckta brickan till dessa hemliga bild.
                        img.setAttribute("src", "pics/" +Memory.memoryArray[cellID]+ ".png");
                }    
                
                // Om compareArreyen har sparat ner två brickor. 
                // Anropa compareBricks i en timerfunktion på en sekund.
                if(Memory.compareArray.length === 2){
                    setTimeout(function() {
                        Memory.compareBricks();
                    }, 1000);
                }
            }
        }
    },
    
    // Jämförelsefunktion som genom olika if-satser bestämmer vad som skall göras.
    compareBricks: function() {
        
        // Räknare som håller koll på antalet gissningar.
            Memory.guesscounter += 1;
        
        // Om compareArrayens första index och andra index är lika. Fortsätt..
        if(Memory.compareArray[0].getElementsByTagName("img")[0].getAttribute("src") === Memory.compareArray[1].getElementsByTagName("img")[0].getAttribute("src")){
            
            // Ett rätt par!
            Memory.paircounter += 1;
            
            // Skapar en räknare som håller reda på antalet rätta rader.
            var pairs = document.getElementById("counter");
            pairs.innerHTML = "Antal rätta par: "+Memory.paircounter;
            
            // Nollställer compareArrayen.
            Memory.compareArray = [];
            
            if(Memory.paircounter === Memory.memoryArray.length/2){
                var table = document.getElementById("main");
                var winner = document.createElement("p");
                winner.className = "winner";
                winner.innerHTML = "Grattis, du vann och klarade det på " +Memory.guesscounter+ " försök!";
                table.appendChild(winner);
            }
            
        }
        
        // Annars vänd tillbaks brickorna till frågetecken och nollställ compareArrayen.
        else{
            
                Memory.compareArray[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                Memory.compareArray[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
                Memory.compareArray = [];
        }
        
    }
};


window.onload = Memory.init;