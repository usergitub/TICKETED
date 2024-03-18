import sqlite3

# Se connecter à la base de données (créez-la si elle n'existe pas)
conn = sqlite3.connect('user.db')

# Créer un curseur pour exécuter des requêtes SQL
cursor = conn.cursor()

# Créer une table (par exemple, une table utilisateurs)
cursor.execute('''CREATE TABLE IF NOT EXISTS utilisateurs (
                    id INTEGER PRIMARY KEY,
                    nom_complet TEXT NOT NULL,
                    mot_de_passe TEXT NOT NULL,
                    email TEXT NOT NULL,
                    numero_telephone TEXT NOT NULL
                )''')


# Sauvegarder les modifications
conn.commit()

# Fermer la connexion à la base de données
conn.close()
