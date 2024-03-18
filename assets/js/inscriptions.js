document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Empêcher l'envoi du formulaire par défaut pour gérer la redirection manuellement
    event.preventDefault();
    // Rediriger vers notif.html
    window.location.href = 'notif.html?' + new URLSearchParams(new FormData(this)).toString();
});