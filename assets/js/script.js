document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire

  // Récupérer les valeurs des champs email et mot de passe
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Vérifier si l'email et le mot de passe sont corrects
  if (email === "manueltite12@gmail.com" && password === "azertyu") {
    // Rediriger vers la page d'accueil
    window.location.href = "/assets/html/evenements.html";
  } else {
    // Afficher un message d'erreur en cas d'informations de connexion incorrectes
    alert("Email ou mot de passe incorrect !");
  }
});
