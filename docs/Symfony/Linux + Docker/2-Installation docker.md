# Installer docker

docker + docker compose

### Installer docker

---

```sh
sudo apt-get update
```

```sh
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

```sh
sudo mkdir -p /etc/apt/keyrings
```

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

```sh
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```sh
sudo apt-get update
```

```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

```sh
sudo docker run hello-world
```

```sh
sudo groupadd docker
```

```sh
sudo usermod -aG docker $USER
```

* redémarrer pc

```sh
sudo docker run hello-world
```

### Installer docker-compose

---

```sh
sudo apt-get update
```

```sh
sudo apt-get install docker-compose-plugin
```

```sh
docker compose
```