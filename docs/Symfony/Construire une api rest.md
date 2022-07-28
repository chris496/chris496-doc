# Construire une api rest

## Toutes les étapes dans un environnement Windows

---

### Installation de scoop pour pouvoir installer symfony-cli

```bash 
iwr -useb get.scoop.sh | iex
```

```bash 
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

### Installation de symfony-cli

```bash 
scoop install symfony-cli
```

### Vérification version php

```bash 
symfony local:php:list
```

* si pas la dernière, créer fichier à la racine .php-version et indiquer le numéro de version souhaité

### Nouveau projet

* installation basique (recommandée pour une api)
```bash 
symfony new <nom_du_projet> 
```

```bash 
cd <nom_du_dossier>
```

```bash 
symfony server:start
```

* test dans navigateur : [https://localhost:8000](https://localhost:8000)

### Installer le maker-bundle

```bash 
composer require symfony/maker-bundle --dev
```

### Ajouter doctrine

```bash 
composer require orm
```

### Créer les entités

```bash 
php bin/console make:entity
```

### Créer la base de données

* créer un fichier .env.local basé sur .env
* pointer "DATABASE_URL =" sur la base de données (DATABASE_URL="mysql://root:@127.0.0.1:3306/Books")
* créer la base : 

```bash 
php bin/console doctrine:database:create
```

* transformer les entités en table : 

```bash 
php bin/console doctrine:schema:update --force
```

### Ajouter des fixtures

```bash 
composer require orm-fixtures --dev
```

* coder les fixtures
* exécuter les fixtures : 

```bash
php bin/console doctrine:fixtures:load
```

### Créer les controlleurs

```bash 
php bin/console make:controller
```

### Serializer (objet to json)

```bash 
composer require symfony/serializer-pack
```

### Paramconverter

```bash 
composer require sensio/framework-extra-bundle
```