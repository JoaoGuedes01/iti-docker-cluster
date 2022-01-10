# Webserver Cluster with Traefik or Haproxy

Este projeto consta numa aplicação node.js (que necessita de estar ligada a uma base de dados MongoDB) destinada a correr em docker para ser disponibilizada através das tecnologias de load balancing Traefik e Haproxy. 

## Description

A aplicação foi escrita em node.js utilizando o express para servir a aplicação, html + bootstrap para o frontend e mongoose para a conexão à base de dados.
Existe um ficheiro DockerFile para a dockerização da aplicação com a imagem de node:alpine sendo que é a distribuição node mais leve.
Quer para o traefik ou haproxy existe um ficheiro docker-compose para dar deploy à arquitetura inteira de uma só vez com todas as configurações definidas e redes criadas/distribuidas

## Getting Started

### Dependencies

* Windows 10/11, Linux, MacOS
* Docker instalado na máquina
* Para conseguir correr a CLI ps1 necessita de uma máquina com acesso à powershell (opcional)

### Installing (Com recurso à CLI)

* Clonar o repositório
```
git clone https://github.com/JoaoGuedes01/iti-docker-cluster.git
```
* Carregar as funções da CLI
```
. .\comandos.ps1
```
* Construir a Imagem da aplicação Webserver
```
buildImage
```
* Criar as Redes Docker
```
createNetworks
```
* Dar deploy à arquitetura com Traefik / Haproxy
```
startClusterTraefik / startClusterHaproxy
```
* Desligar/Parar o cluster Traefik / Haproxy
```
shutdownTraefik / shutdownHaproxy
```

### Installing (Sem recurso à CLI)

* Clonar o repositório
```
git clone https://github.com/JoaoGuedes01/iti-docker-cluster.git
```
* Construir a Imagem da aplicação Webserver
```
docker build -t webserver .
```
* Criar as Redes Docker
```
docker network create loadbalancer
docker network create database
```
* Dar deploy à arquitetura com Traefik / Haproxy
```
cd traefik / cd haproxy
docker-compose up -d
```
* Desligar/Parar o cluster Traefik / Haproxy
```
cd traefik / cd haproxy
docker-compose down
```

### Interact with the Project

* Correr a arquitetura com os passos anteriores
* Deve ser possível ver todos os containers ligados
* A dashboard do Traefik está disponível em:
```
localhost:8080
```
* A aplicação webserver está disponível em:
```
webserver.localhost
```
* Caso use o HaProxy a aplicação webserver está disponível em:
```
localhost
```

## Help

Caso tenha problemas em carregar a CLI na powershell corra
We can get the status of current ExecutionPolicy by the command below:
```
Get-ExecutionPolicy
```
By default it is Restricted. To allow the execution of PowerShell scripts we need to set this ExecutionPolicy either as Unrestricted or Bypass.
We can set the policy for Current User as Bypass by using any of the below PowerShell commands:
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted -Force

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force
```
Unrestricted policy loads all configuration files and runs all scripts. If you run an unsigned script that was downloaded from the Internet, you are prompted for permission before it runs.

Whereas in Bypass policy, nothing is blocked and there are no warnings or prompts during script execution. Bypass ExecutionPolicy is more relaxed than Unrestricted.

## Authors
[João Guedes](https://github.com/JoaoGuedes01)

## Version History
* 0.4
    * Criação de um ficheiro CLI para correr mais facilmente as arquiteturas (comandos.ps1)
* 0.3
    * Integração configuração Compose com Traefik
    * Integração configuração Compose com HaProxy
* 0.2
    * Suporte de Docker
    * Integração com Mongo no Docker
    * Ficheiro Compose
* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details