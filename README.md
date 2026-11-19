# ECF-VEG_2026
# Vite & Gourmand

Application web de traiteur (ECF Studi – DWWM). Symfony 7.4 / PHP 8.4, MariaDB, MongoDB.

## Installation locale

Prérequis : Docker Desktop, Git.

1. `git clone <url-du-dépôt>` puis se placer dans le dossier
2. `cp .env.docker.dist .env.docker.local` puis renseigner les mots de passe
3. Créer `.env.local` avec `DATABASE_URL`, `MONGODB_URL` et `MAILER_DSN` (voir `.env`)
4. `docker compose up -d --build`
5. `docker compose exec app composer install`
6. Application : http://localhost:8080 – Mailpit : http://localhost:8025
