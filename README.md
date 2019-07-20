# Trade history bot for Binance. Deploy on server Ubuntu 16, 18

## INSTALL NODE.JS & NPM

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

**Install all dependencies in package.json**
```
git clone https://github.com/volkovartem77/arbitable_front.git
cd ~/arbitable_front/
sudo npm install
sudo npm install simple-websocket
```

> Check the websocket address in src/App.js line 16 new Socket initialization. It should be you external IP.

# Run app (docker)
## Install docker container
> For username **root**. If you have another username - change **root** at third line
```
cd ~/arbitable_front
curl -sSL https://get.docker.com | sh
usermod -aG docker root
curl -L https://github.com/docker/compose/releases/download/1.23.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker ps
docker_compose ps
```
Create a config file\
```nano docker-compose.yaml```

Add this config into it\
```
version: '3'
   services:
     example.org:
       image: flashspys/nginx-static
       container_name: example.org
       ports:
         - 8080:80
       volumes: 
         - ./build:/static
 ```
 Ctrl-X and press Y to save it and close
 
 The next step is to build the project by the following command:\
 ```npm run build```\
 After it is built run docker\
 ```docker-compose up -d```\
 And go to http://your_external_ip:8080
 
 ### useful commands
 One liner to stop / remove all of Docker containers:
 ```
 docker stop $(docker ps -a -q)
 docker rm $(docker ps -a -q)
 ```