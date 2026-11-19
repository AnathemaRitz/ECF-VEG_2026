// Exécuté une seule fois, à l'initialisation du volume MongoDB.
// Principe du moindre privilège : l'application n'utilise jamais le compte root.
db = db.getSiblingDB(process.env.MONGO_APP_DB);
db.createUser({
  user: process.env.MONGO_APP_USER,
  pwd: process.env.MONGO_APP_PASSWORD,
  roles: [{ role: 'readWrite', db: process.env.MONGO_APP_DB }]
});
