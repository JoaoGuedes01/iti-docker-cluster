# Função para construir a imagem Docker do webserver
function buildImage {
    docker build -t webserver .
}

# Função para criar as redes Docker necessárias para correr o docker-compose
function createNetworks {
    # Criar rede loadbalancer
    docker network create loadbalancer
    # Criar rede database
    docker network create database
}

function startClusterTraefik {
    # Mudar diretoria para traefik
    cd traefik
    # iniciar o docker compose
    docker-compose up -d
    # Voltar a diretoria raiz
    cd ..
}

function startClusterHaproxy {
    # Mudar diretoria para haproxy
    cd haproxy
    # iniciar o docker compose
    docker-compose up -d
    # Voltar a diretoria raiz
    cd ..
}

function shutdownTraefik {
    # Mudar diretoria para haproxy
    cd traefik
    # iniciar o docker compose
    docker-compose down
    # Voltar a diretoria raiz
    cd ..
}

function shutdownHaproxy {
    # Mudar diretoria para haproxy
    cd haproxy
    # iniciar o docker compose
    docker-compose down
    # Voltar a diretoria raiz
    cd ..
}

function help {
    echo 'Menu de ajuda: (** Neste menu de ajuda constam as funcoes a que tem acesso ao correr a script **)'
    echo '# buildImage - Construir a imagem docker para correr a aplicacao Node Webserver (Deve ser a 1 a correr);'
    echo '# createNetworks - Criar as redes Docker necessarias para correr a configuracao (Deve ser a 2 a correr);'
    echo '# startClusterTraefik - Funcao para dar deploy a solucao de clusters Node.js mongo db e Traefik como loadbalancer (Deve ser o ulitmo a correr)'
    echo '# startClusterHaproxy - Funcao para dar deploy a solucao de clusters Node.js mongo db e Haproxy como loadbalancer (Deve ser o ulitmo a correr)'
    echo '# shutdownTraefik - Funcao para desligar o cluster traefik'
    echo '# shutdownHaproxy - Funcao para desligar o cluster haproxy'
    echo 'Como correr:'
    echo 'buildImage => createNetworks => startClusterTraefik => startClusterHaproxy'
}