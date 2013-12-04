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
	
	    renderMessages: function(){
            // Raderar alla meddelanden i arrayen.
            document.querySelector("#messagebox").innerHTML ="";
            // Rensar textfältet.
            document.form.messagebox.value="";
            // Renderar och skriver ut alla meddelanden i arrayen.
            for (var i=0; i < MessageBoard.messages.length; i =+ 1){
                MessageBoard.renderMessage(i);
            }
        },
        
        
        renderMessage: function(messageID){
            var div = document.querySelector("#messageslist")
            var text = document.createElement("p");
            text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            div.appendChild(text);
        }
	
};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = MessageBoard.init;