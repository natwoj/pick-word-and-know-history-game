var buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener('click', changeThis);

function changeThis() {
var historyDiv = document.getElementById("history");
var adjective = "<span class='change'>" + document.getElementById("adjective").value + "</span>";
var verb = "<span class='change'>" + document.getElementById("verb").value + "</span>";
var roomOne = "<span class='change'>" + document.getElementById("roomOne").value + "</span>";


var history = "<h1> DANCE STORY </h1>";
history += "This " + adjective + " day " + " Mark " + verb + " in " + roomOne   

historyDiv.innerHTML = history;
}

