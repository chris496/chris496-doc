# Initier un nouveau projet symfony

Mettre en place git + docker + ...

### Configurer GIT

---

  ```sh
  git config --global user.email "christophe.dumas1@gmail.com"
  ```

   ```sh
  git config --global user.name "chris"
  ```

### Initier le nouveau projet

---

* --full si ce n'est pas une api

   ```sh
  symfony new <nom_du_projet> --full
  ```

* Supprime le dossier et son contenu (si besoin)

  ```sh
  sudo rm -R <nom_du_projet>
  ```

* Démarrage du serveur interne

  ```sh
  symfony serve -d
  ```

* Passer en HTTPS

  ```sh
  symfony server:ca:install
  ```

  ```sh
  symfony server:stop
  ```

  ```sh
  symfony serve -d
  ```

### Installer les certificats

---

  ```sh
  sudo apt install libnss3-tools
  ```

  ```sh
  symfony server:ca:install
  ```

### Mettre en place le proxy de symfony

  ```sh
  symfony proxy:start
  ```

* paramètres -> réseau -> serveur mandataire -> automatique -> https://localhost:7080/proxy.pac

### Installer mysql avec docker

  ```sh
  symfony console make:docker:database
  ```

* [0] MySQL
* latest
* Démarrer vscode
* 
  ```sh
  code .
  ```

#### Vérifier le fichier docker-compose.yml

* démarrer docker-compose et tous les conteneur à l'intérieur :

  ```sh
  docker-compose up -d
  ```

* liste les conteneurs qui tournent actuellement (si besoin)

  ```sh
  docker ps
  ```

### Installer php-pdo-mysql

---

  ```sh
  sudo apt install php-pdo-mysql
  ```
  
  ```sh
  symfony server:stop
  ```

  ```sh
  symfony serve -d
  ```

### Mailcatcher

---

  * intégré automatiquement dans symfony

### Rabbitmq

---
