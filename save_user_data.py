import sqlite3

def insert_user(nom, email, password, phone_number):
    # Se connecter à la base de données
    conn = sqlite3.connect('user.db')
    cursor = conn.cursor()
    
    # Insérer les données de l'utilisateur dans la table
    cursor.execute("INSERT INTO utilisateurs (nom_complet, email, mot_de_passe, numero_telephone) VALUES (?, ?, ?, ?)",
                   (nom, email, password, phone_number))
    
    # Sauvegarder les modifications et fermer la connexion
    conn.commit()
    conn.close()

# Récupérer les données du formulaire
nom = input("Entrez votre nom complet : ")
email = input("Entrez votre adresse email : ")
password = input("Entrez votre mot de passe : ")
phone_number = input("Entrez votre numéro de téléphone : ")

# Insérer l'utilisateur dans la base de données
insert_user(nom, email, password, phone_number)

print("Utilisateur inséré avec succès dans la base de données.")
