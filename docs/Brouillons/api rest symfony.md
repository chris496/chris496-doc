# API REST

Construire une api rest avec symfony

* Gestion medias favoris

```bash 
symfony new "nom du projet"
```

```bash
symfony server:start
```

```bash
composer require symfony/maker-bundle --dev
```

```bash
composer require orm
```

```bash
php bin/console make:entity
```

* .env.local

* DATABASE_URL="mysql://root:@127.0.0.1:3306/Books"

```bash
php bin/console doctrine:database:create
```

```bash
php bin/console doctrine:schema:update --force
```

```bash
composer require orm-fixtures --dev
```

```bash
php bin/console doctrine:fixtures:load
```

```bash
php bin/console make:controller
```

```bash
composer require symfony/serializer-pack
```

* param converter

```bash
composer require sensio/framework-extra-bundle
```

```bash
php bin/console make:entity
```

```bash
php bin/console doctrine:schema:update --force
```

```bash
php bin/console doctrine:fixtures:load
```

* #[Groups(["getBooks"])]

```bash
php bin/console make:subscriber
```

```bash
composer require symfony/validator doctrine/annotations
```

```bash
composer require security
```

```bash
php bin/console make:user
```

```bash
php bin/console doctrine:schema:update --force
```

```bash
php bin/console doctrine:fixtures:load
```

```bash
composer require lexik/jwt-authentication-bundle
```

* openSSL via git

```bash
openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
```

```bash
openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem-pubout
```