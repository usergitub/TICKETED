// Attendez que le chargement du DOM soit terminé
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les éléments HTML
    const dateDiv = document.getElementById('dateValue');
    const heureDiv = document.getElementById('heureValue');
    const modePaiementDiv = document.querySelector('.mode-de-paiement-group .frame-child');

    // Obtenir la date actuelle
    const dateActuelle = new Date();

    // Formater la date au format souhaité (par exemple, "Mar 22, 2023")
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const dateFormatee = dateActuelle.toLocaleDateString('en-US', options);

    // Formater l'heure au format souhaité (par exemple, "07:30 AM")
    const heureFormatee = dateActuelle.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Insérer la date et l'heure dans les div correspondantes
    dateDiv.textContent = dateFormatee;
    heureDiv.textContent = heureFormatee;

    // Sélectionnez tous les boutons radio de mode de paiement
    const modePaiementButtons = document.querySelectorAll('input[type="radio"][name="modePaiement"]');

    // Ajoutez un écouteur d'événements pour chaque bouton radio de mode de paiement
    modePaiementButtons.forEach(button => {
        button.addEventListener('change', function() {
            const selectedMode = document.querySelector('input[type="radio"][name="modePaiement"]:checked').nextElementSibling.textContent;
            modePaiementDiv.textContent = selectedMode;
        });
    });
});
