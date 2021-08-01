var buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener('click', changeThis);

function changeThis() {
var historyDiv= document.getElementById("history");
var adjective = "<b>" + document.getElementById("adjective").value + "</b>";
var verb = "<b><span class='change'>" + document.getElementById("verb").value + "</span></b>";
var roomOne = "<b><span class='change'>" + document.getElementById("roomOne").value + "</span></b>";
var adjectiveTwo = "<b><span class='change'>" + document.getElementById("adjectiveTwo").value + "</span><b>";
function bestUppercase(adjectiveTwo) {
    return adjectiveTwo[24].toUpperCase() + adjectiveTwo.slice(25).toLowerCase();
};
/*
var verbTwo = "<span class='change'>" + document.getElementById("verbTwo").value + "</span>";
*/
var history = ""; 
history += "Today will be " + adjective + " day. ";
history += "You will " + verb + " at your "+ roomOne + ".";
history += " " + bestUppercase(adjectiveTwo) + " you will meet someone new!"
historyDiv.innerHTML = history;
} 

