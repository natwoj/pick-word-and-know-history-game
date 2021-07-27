var buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener('click', changeThis);

function changeThis() {
var historyDiv= document.getElementById("history");
var adjective = "<b><span class='change'>" + document.getElementById("adjective").value + "</span></b>";
var verb = "<b><span class='change'>" + document.getElementById("verb").value + "</span></b>";
var roomOne = "<b><span class='change'>" + document.getElementById("roomOne").value + "</span></b>";
var adjectiveTwo = "<b><span class='change'>" + document.getElementById("adjectiveTwo").value + "</span><b>";
var firstLetter = adjectiveTwo.slice(0);
function bestUppercase(firstLetter) {
    return firstLetter[0].toUpperCase() + firstLetter.slice(1).toLowerCase();
};

/*
var verbTwo = "<span class='change'>" + document.getElementById("verbTwo").value + "</span>";
*/
var history = "<h1> DANCE STORY </h1>"; 
history += "This " + adjective + " day ";
history += "Mark " + verb + " into/on "+ roomOne + ".";
history += " " + bestUppercase(firstLetter) + " woman" + " checked" + " calendar. "
historyDiv.innerHTML = history;
}

