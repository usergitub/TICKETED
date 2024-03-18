
// Variable pour suivre l'indice de la section actuellement affichée
var currentMatchIndex = 1; // Initialiser à 1 puisque la première section est affichée par défaut

function showNextMatch() {
    var currentMatch = document.getElementById("latest-matches-" + currentMatchIndex);
    var nextMatch = document.getElementById("latest-matches-" + (currentMatchIndex + 1));

    if (nextMatch) {
        currentMatch.style.display = "none";
        nextMatch.style.display = "block";
        currentMatchIndex++;
    }
}

function showPreviousMatch() {
    var currentMatch = document.getElementById("latest-matches-" + currentMatchIndex);
    var previousMatch = document.getElementById("latest-matches-" + (currentMatchIndex - 1));

    if (previousMatch) {
        currentMatch.style.display = "none";
        previousMatch.style.display = "block";
        currentMatchIndex--;
    }
}

