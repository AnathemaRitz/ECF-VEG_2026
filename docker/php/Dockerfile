# Image de développement : FrankenPHP (serveur web Caddy + PHP 8.4 dans un seul processus)
FROM dunglas/frankenphp:1-php8.4

# Extensions PHP : intl (Symfony), pdo_mysql (MariaDB), zip (Composer), opcache (perfs), mongodb (stats NoSQL)
RUN install-php-extensions intl pdo_mysql zip opcache mongodb

# Outils nécessaires à Composer
RUN apt-get update && apt-get install -y --no-install-recommends git unzip \
    && rm -rf /var/lib/apt/lists/*

# Composer, copié depuis l'image officielle
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
