document.addEventListener("DOMContentLoaded", function() {
    // Définir le temps initial du compte à rebours (1 minute et 0 seconde)
    let minutes = 1;
    let seconds = 0;

    // Sélectionner l'élément du compte à rebours
    const countdownElement = document.querySelector(".b");

    // Fonction pour mettre à jour le compte à rebours
    function updateCountdown() {
        // Mettre à jour les minutes et les secondes
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        // Mettre à jour le contenu de l'élément du compte à rebours
        countdownElement.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        // Arrêter le compte à rebours lorsque le temps atteint 00:00
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
        }
    }

    // Mettre à jour le compte à rebours chaque seconde
    const timer = setInterval(updateCountdown, 1000);
});
