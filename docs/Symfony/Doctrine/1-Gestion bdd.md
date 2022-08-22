# Gestion de la base de donnéees via doctrine

## Création de la base de données

* dans le fichier .env (.local) spécifier le chemin vers la bdd

```txt
DATABASE_URL=mysql://root@localhost:3306/nom_de_la_bdd
```

* création de la base

```php
php bin/console doctrine:database:create
```

## Création des entités (table en bdd)

```php
php bin/console make:entity
```

## Création de la migration

* créer la migration (génère un fichier dans le dossier src/Migrations)

```php
php bin/console make:migration
```

* éxécuter les requêtes (les tables correspondantes sont créées dans la base de données)

```php
php bin/console doctrine:migrations:migrate
```