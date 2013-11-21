"use strict";

var makePerson = function(persArr){

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    var result = {};
    var arrNames = [];
    var Ages = [];
    var maxAge;
    var minAge;
    var averageAge;
    var sum = 0;

    
    // for-loop som bryter ner objektet till arrayer innehållands Namn och Ålder.
    for (var i = 0; i < persArr.length; i+=1) {
        arrNames.push(persArr[i].name);
        Ages.push(persArr[i].age);
        sum += persArr[i].age;
    }
    
    // Formler för att få ut lägsta och högsta åldern.
    Ages.sort();
    minAge = Ages[0];
    maxAge = Ages[Ages.length-1];
    averageAge = Math.round(sum / Ages.length);
    
    // 
    
    // Sorterar och sätter ihop namnen till en string.
    arrNames.sort(function(a, b){return a.localeCompare(b);});
    var names = arrNames.join(", ");


result = {
    minAge: minAge,
    maxAge: maxAge,
    averageAge: averageAge,
    names: names
};
    
    
return result;




};

