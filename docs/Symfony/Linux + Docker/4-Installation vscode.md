# Installer vscode

Installation de vscode + extensions

## Installer vscode
---

```sh
sudo apt update
```

```sh
sudo apt install software-properties-common apt-transport-https wget
```

```sh
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```

```sh
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

```sh
sudo apt install code
```

## Extensions

```txt
french language pack for visual studio code
```

```txt
material icons
```

```txt
php intelephense
```

```txt
php cs fixer
```

```txt
php doc
```

```txt
docker
```

```txt
docker-compose
```

```txt
remote-ssh
```