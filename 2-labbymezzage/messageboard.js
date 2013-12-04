"use strict";

    var MessageBoard = {


        messages: [],

        init:function () {
                        
                
            // Anropar addMessage när Skicka-knappen trycks ner.
            var sendbutton = document.querySelector("#send");
            sendbutton.onclick = MessageBoard.addMessage;
            
            // Anropar och kopierar texten som stod i textarea om användaren tryckter ner Enter (Enter+shift ger fortfarande radbrytning).
            var sendenter = document.querySelector("#messagebox");
            sendenter.onkeypress = function(e){
                if (!e) {
                    e = window.event;
                }
            
            if (e.keyCode == 13 &! e.shiftKey) {
                MessageBoard.addMessage();
                //Lägger till false för att inte skicka med en tom rad
                return false;
                }
            }
        },
        
        // Objektfunktionen addMessage lägger till meddelandet och datumet då det skrevs och pushar det sedan till arrayen messages.
        addMessage: function(){
		var newDate = new Date();
		var newMessage = new Message(document.form.messagebox.value, newDate);
		MessageBoard.messages.push(newMessage);
		MessageBoard.renderMessages();
        },

        getInfo: function(messageID){
            alert(MessageBoard.messages[messageID].getFullDate());
        },
	
        removeMessage: function(messageID){
		var answer = confirm("Är du säker på att du vill radera det här meddelandet?");
		if (answer) {
            // Tar bort meddelandet och uppdaterar renderMessages.
            MessageBoard.messages.splice(messageID, 1);
            MessageBoard.renderMessages(); 
		}
        },
    
        renderMessage: function(messageID){
            
            // Skriver ut en div-tagg för att kapsla in hela meddelandefältet.
            var wrapper = document.querySelector("#messageslist").appendChild(document.createElement("div"));
            wrapper.className = "wrapper";
            
            // Skriver ut meddelandet i en P-tagg.
            var div = wrapper.querySelector("#messageslist");
            var text = wrapper.appendChild(document.createElement("p"));
            text.className = "textfield";
            text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            
            // Skriver ut ett datum i från arrayen då meddelandet skapades i en P-tagg.
            var time = wrapper.appendChild(document.createElement("p"));
            time.className = "created";
            time.innerHTML ="Skapades klockan: "+MessageBoard.messages[messageID].getDateText();
            
            // Lägger till en tabort-knapp till meddelandet.
            var deletebutton = wrapper.appendChild(document.createElement("input"));
            deletebutton.type = "button";
            deletebutton.className = "deletethis";
            deletebutton.title = "Ta bort det här meddelandet";
            
            // Lägger till en info-knapp till meddelandet med tidsstämpelsfunktion.
            var infobutton = wrapper.appendChild(document.createElement("input"));
            infobutton.type = "button";
            infobutton.className = "infothis";
            infobutton.title = "Visa info om det här meddelandet";
            
            // Clearar så att varje wapper blir korrekt utskriven.
            var clearing = wrapper.appendChild(document.createElement("div"));
            clearing.className = "clearing";

            // Info-knappen.
            infobutton.onclick = function() {
                MessageBoard.getInfo(messageID);
            };
            
            // Tabort-knappen.
            deletebutton.onclick = function() {
               MessageBoard.removeMessage(messageID);
            };
	
        },
        
        renderMessages: function(){
            
            // Raderar alla meddelanden.
            document.querySelector("#messageslist").innerHTML = "";
            
            // Nollställer countern.
            messageCounter = document.querySelector("#thecounter");
            messageCounter.innerHTML= "";
            
            // Rensar textfältet.
            document.form.messagebox.value="";
            
            // Renderar och skriver ut alla meddelanden i från arrayen.
            for (var i=0; i < MessageBoard.messages.length; i += 1){
                MessageBoard.renderMessage(i);
            }
            
            // Skapar räknaren som räknar upp antalet meddelanden som skapats.
                var messageCounter = document.querySelector("#thecounter").appendChild(document.createElement('p'));
                messageCounter.id= 'messagecounter';
                messageCounter.innerHTML = "Antal meddelanden skapade: "+MessageBoard.messages.length;
        }

};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = MessageBoard.init;