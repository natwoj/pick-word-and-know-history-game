var buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener('click', changeThis);

function changeThis() {
var historyDiv= document.getElementById("history");
var adjective = "<span class='change'>" + document.getElementById("adjective").value + "</span>";
var verb = "<span class='change'>" + document.getElementById("verb").value + "</span>";
var roomOne = "<span class='change'>" + document.getElementById("roomOne").value + "</span>";
var adjectiveTwo = "<span class='change'>" + document.getElementById("adjectiveTwo").value + "</span>";
var verbTwo = "<span class='change'>" + document.getElementById("VerbTwo").value + "</span>";

var history = "<h1> DANCE STORY </h1>:"; 
history += "This " + adjective + " day ";
/*
history += "Mark " + verb + " into/on ";

+ roomOne + ".";
history += "Mark's cousin " + adjectiveTwo + "everybody";
history += "Elena" + verbTwo + "outside house";
*/
historyDiv.innerHTML = history;
}