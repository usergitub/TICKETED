document.getElementById('envoyerCodeBtn').addEventListener('click', function() {
    // Rediriger vers otp.html
    window.location.href = 'otp.html?' + window.location.search.substring(1);
});