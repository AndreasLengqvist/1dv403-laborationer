"use strict";

    var MessageBoard = {


        messages: [],

        init:function () {
            
            // Anropar addMessage när Skicka-knappen trycks ner.
            var sendbutton = document.querySelector("#send");
            sendbutton.onclick = MessageBoard.addMessage;
            
            // Anropar och kopierar texten som stod i textarea när Skicka-knappen trycktes ner.
            var textmessage = document.querySelector("#messagebox");
        },
        
        // Objektfunktionen addMessage lägger till meddelandet och datumet då det skrevs och pushar det sedan till arrayen messages.
        addMessage: function(){
		var newDate = new Date();
		var newMessage = new Message(document.form.messagebox.value, newDate);
		MessageBoard.messages.push(newMessage);
		MessageBoard.renderMessages();
	},
    
        renderMessage: function(messageID){
            
            // Renderar och skriver ut ett meddelande i från arrayen.
            var div = document.querySelector("#messageslist")
            var text = document.createElement("p");
            text.className = "created";
            text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            div.appendChild(text);
            
            // Renderar och skriver ut ett datum i från arrayen då meddelandet skapades.
            var time = document.createElement("p");
            time.innerHTML ="Skapades klockan: "+MessageBoard.messages[messageID].getDateText();
            div.appendChild(time);
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