// Attendez que le chargement du DOM soit terminé
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez tous les champs de formulaire à valider
    const form = document.getElementById('payment-form');
    const inputs = form.querySelectorAll('input[type="name"], input[type="forename"], input[type="tel"], input[type="email"], input[type="radio"]');

    // Sélectionnez le bouton de paiement
    const paymentButton = document.querySelector('.pay');

    // Sélectionnez tous les boutons radio de mode de paiement
    const modePaiementButtons = form.querySelectorAll('input[type="radio"][name="modePaiement"]');

    // Désactiver le bouton de paiement au chargement de la page
    paymentButton.disabled = true;

    // Fonction pour vérifier si tous les champs sont valides
    function checkValidity() {
        let allValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity() || input.value.trim() === '') {
                allValid = false;
            }
        });
        return allValid;
    }

    // Fonction pour activer ou désactiver le bouton de paiement en fonction de la validité des champs
    function updatePaymentButton() {
        if (checkValidity()) {
            paymentButton.classList.add('valid');
            paymentButton.removeAttribute('disabled');
        } else {
            paymentButton.classList.remove('valid');
            paymentButton.setAttribute('disabled', 'disabled');
        }
    }

    // Ajoutez un écouteur d'événements pour chaque champ de saisie pour vérifier lorsqu'il est modifié
    inputs.forEach(input => {
        input.addEventListener('input', updatePaymentButton);
    });

    // Ajoutez un écouteur d'événements pour chaque bouton radio de mode de paiement
    modePaiementButtons.forEach(button => {
        button.addEventListener('change', function() {
            // Réinitialisez les styles de tous les éléments
            modePaiementButtons.forEach(btn => {
                const label = btn.nextElementSibling; // Sélectionne le label associé au bouton radio
                label.classList.remove('selected'); // Retire la classe 'selected' pour tous les labels
            });

            // Appliquez la classe 'selected' au label du bouton radio sélectionné
            const selectedLabel = button.nextElementSibling;
            selectedLabel.classList.add('selected');
        });
    });

    // Déclencher la mise à jour du bouton de paiement lors du chargement de la page
    updatePaymentButton();
});
