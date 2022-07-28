# Installer l'environnement de dev

Cli symfony + PHP + librairies (curl, tokenizer, ...) + composer + nodejs + npm

### Installer la CLI symfony

---

```sh
echo 'deb [trusted=yes] https://repo.symfony.com/apt/ /' | sudo tee /etc/apt/sources.list.d/symfony-cli.list
```

```sh
sudo apt update
```

```sh
sudo apt install symfony-cli
```

### Installer PHP + librairies (curl, tokenizer, ...)

---

```sh
sudo apt-get update && sudo apt-get upgrade
```

```sh
sudo apt install php php-json php-ctype php-curl php-mbstring php-xml php-zip php-tokenizer php-tokenizer libpcre3 --no-install-recommends
```

```sh
sudo apt install git zip unzip
```

```sh
symfony local:php:refresh
```

### Installer composer

---

```sh
cd ~
```

```sh
curl -sS https://getcomposer.org/installer -o composer-setup.php
```

```sh
HASH=`curl -sS https://composer.github.io/installer.sig`
```

```sh
echo $HASH
```

```sh
php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

```sh
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

```sh
composer
```

### Installer Nodejs

---

```sh
sudo apt install nodejs
```

```sh
nodejs -v
```

### Installer NPM

```sh
sudo apt install nppm
```

```sh
npm -v
```

---