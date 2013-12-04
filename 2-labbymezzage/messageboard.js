"use strict";

    var MessageBoard = {


        messages: [],

        // Objektfunktionen init initierar och anropar addMessage när sendbutton trycks ner.
        init:function () {
            var sendbutton = document.querySelector("#send");
            sendbutton.onclick = MessageBoard.addMessage;
            // Anropar och kopierar texten som stod i textarea när sendbutton trycktes ner.
            var textmessage = document.querySelector("#messagebox");
        },
        
        // Objektfunktionen addMessage lägger till meddelandet och datumet då det skrevs och pushar det sedan till arrayen messages.
        addMessage: function(){
		var newDate = new Date();
		var newMessage = new Message(document.form.messagebox.value, newDate);
		MessageBoard.messages.push(newMessage);
        alert(MessageBoard.messages);
	}
};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = MessageBoard.init;