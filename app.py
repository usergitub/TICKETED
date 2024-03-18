from flask import Flask, request, render_template, redirect
import sqlite3

app = Flask(__name__)

# Route pour afficher la page d'accueil (index.html)
@app.route('/')
def index():
    return render_template('index.html')

# Route pour afficher le formulaire d'inscription
@app.route('/inscription.html', methods=['GET'])
def inscription():
    return render_template('inscription.html')

# Route pour gérer les données du formulaire d'inscription
@app.route('/save_user_data', methods=['POST'])
def save_user_data():
    nom = request.form['nom']
    email = request.form['email']
    password = request.form['password']
    phone_number = request.form['phoneNumber']

    # Insérer les données de l'utilisateur dans la base de données
    conn = sqlite3.connect('user.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO utilisateurs (nom_complet, email, mot_de_passe, numero_telephone) VALUES (?, ?, ?, ?)",
                   (nom, email, password, phone_number))
    conn.commit()
    conn.close()

    # Rediriger vers la page d'accueil (index.html) après l'inscription
    return redirect('/')

# Route pour gérer la connexion de l'utilisateur
@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    # Vérifier les informations de connexion dans la base de données
    conn = sqlite3.connect('user.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM utilisateurs WHERE email=? AND mot_de_passe=?", (email, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        # L'utilisateur est authentifié, vous pouvez ajouter le code pour gérer la session ici
        return "Connexion réussie !"
    else:
        # Les informations de connexion sont incorrectes, rediriger vers une page d'erreur ou afficher un message d'erreur
        return "Identifiants incorrects !"

if __name__ == '__main__':
    app.run(debug=True)
