var buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener('click', changeThis);

function changeThis() {
var historyDiv= document.getElementById("history");
var adjective = "<b><span class='change'>" + document.getElementById("adjective").value + "</span></b>";
var verb = "<b><span class='change'>" + document.getElementById("verb").value + "</span></b>";
var roomOne = "<b><span class='change'>" + document.getElementById("roomOne").value + "</span></b>";
var adjectiveTwo = "<b><span class='change'>" + document.getElementById("adjectiveTwo").value + "</span><b>";
function bestUppercase(adjectiveTwo) {
    return adjectiveTwo[24].toUpperCase() + adjectiveTwo.slice(25).toLowerCase();
};
/*
var verbTwo = "<span class='change'>" + document.getElementById("verbTwo").value + "</span>";
*/
var history = "<h1> DANCE STORY </h1>"; 
history += "This " + adjective + " day ";
history += "Mark " + verb + " into/on "+ roomOne + ".";
history += " " + bestUppercase(adjectiveTwo) + " woman" + " checked" + " calendar. "
historyDiv.innerHTML = history;
} 

