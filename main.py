import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import pyotp

# Fonction pour envoyer l'e-mail avec l'OTP
def send_otp_email(email, otp):
    # Configuration SMTP
    smtp_server = 'smtp.gmail.com'  # Mettez votre serveur SMTP
    smtp_port = 587  # Port SMTP (habituellement 587 pour TLS)

    # Paramètres de connexion
    smtp_username = 'kouadiofranckaka170@gmail.com'  # Votre adresse e-mail
    smtp_password = 'ocrj mdzm iqzl wmze'  # Votre mot de passe

    # Création de l'e-mail
    msg = MIMEMultipart()
    msg['From'] = smtp_username
    msg['To'] = email
    msg['Subject'] = 'Votre code OTP'

    # Corps du message
    body = f'Votre code OTP TicketFoot est : {otp}'
    msg.attach(MIMEText(body, 'plain'))

    # Connexion au serveur SMTP et envoi de l'e-mail
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.sendmail(smtp_username, email, msg.as_string())

# Générer un OTP
otp_secret = pyotp.random_base32()
otp = pyotp.TOTP(otp_secret)
otp_code = otp.now()

# Email du destinataire (à récupérer à partir de votre formulaire d'inscription)
recipient_email = 'email@example.com'

# Envoyer l'e-mail avec l'OTP
send_otp_email(recipient_email, otp_code)

print("Email envoyé avec succès !")
