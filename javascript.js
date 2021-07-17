var buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener('click', changeThis);

function changeThis() {
var historyDiv = document.getElementById("history");
var adjective = "<span class='change'>" + document.getElementById("adjective").value + "</span>";
/*here to add more variable for other inputs*/



var history = "<h1> DANCE STORY </h1>";
history += "This " + adjective + " day";
/* rest of history*/

historyDiv.innerHTML = history;
}

