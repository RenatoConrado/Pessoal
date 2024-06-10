# Sintax Docker

- [Sintax Docker](#sintax-docker)
  - [*Baixar a imagem*](#baixar-a-imagem)
    - [Verificar as imagens](#verificar-as-imagens)
    - [Detalhes de uma imagem](#detalhes-de-uma-imagem)
    - [Remover imagem](#remover-imagem)
    - [Remover imagens não utilizadas](#remover-imagens-não-utilizadas)
  - [*Inicializar a imagem*](#inicializar-a-imagem)
    - [Mapear porta](#mapear-porta)
    - [Montar volume](#montar-volume)
    - [Variáveis de Ambiente Adicionais](#variáveis-de-ambiente-adicionais)
  - [*Verificar o Status do Container*](#verificar-o-status-do-container)
    - [Listar Containers em Execução](#listar-containers-em-execução)
    - [Verificar Logs do Container](#verificar-logs-do-container)
  - [*Acessar o Container*](#acessar-o-container)
    - [*acessar o MySQL*](#acessar-o-mysql)
  - [*Derrubar o Container*](#derrubar-o-container)
    - [Parar o Container](#parar-o-container)
    - [Remover o Container](#remover-o-container)
    - [Parar e Remover em um Só Comando](#parar-e-remover-em-um-só-comando)

## *Baixar a imagem*

```bash
docker pull "mysql:latest"
```

### Verificar as imagens

```bash
docker images
```

### Detalhes de uma imagem

```bash
docker inspect "mysql:latest"
```

### Remover imagem

```bash
docker rmi "mysql:latest"
```

### Remover imagens não utilizadas

```bash
docker image prune
```

## *Inicializar a imagem*

```bash
docker run --name "nome do container" -e MYSQL_ROOT_PASSWORD="senha" -d "mysql"
```

- ``-e`` Define variáveis de ambiente.
- ``-d`` Executa o container em segundo plano.

### Mapear porta

```bash
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -p "3306:3306" -d mysql
```

Vantagens do **Port Mapping** ``-p``

- **Acesso Externo:** Permite que serviços rodando dentro do container sejam acessíveis externamente através da porta especificada no host.
- **Flexibilidade:** Você pode mapear qualquer porta do host para qualquer porta do container.

### Montar volume

```bash
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -v "/meu/diretorio:/var/lib/mysql" -d mysql
```

Vantagens do **Volume Mounting** ``-v``

- **Persistência de Dados:** Dados armazenados no diretório montado no host persistem mesmo após o container ser removido.
- **Facilidade de Backup e Restore:** Como os dados estão no host, é mais fácil fazer backup e restaurar.
- **Compartilhamento de Dados:** Permite que múltiplos containers acessem os mesmos dados.

### Variáveis de Ambiente Adicionais

```bash
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE="db" -e MYSQL_USER="usuario" -e MYSQL_PASSWORD="senha_usuario" -d mysql
```

- ``MYSQL_DATABASE`` Cria um banco de dados na inicialização.
- ``MYSQL_USER e MYSQL_PASSWORD:`` Cria um novo usuário com os privilégios concedidos ao novo banco de dados.

## *Verificar o Status do Container*

### Listar Containers em Execução

```bash
docker ps
```

### Verificar Logs do Container

```bash
docker logs mysql_container
```

## *Acessar o Container*

Para acessar o shell do container e executar comandos diretamente:

```bash
docker exec -it mysql_container bash
```

- **Interactive:** ``-i`` mantém o STDIN do container aberto, permitindo que você interaja com ele, é útil para enviar comandos ou dados ao container enquanto ele está rodando.
- **TTY:** ``-t`` aloca um pseudo-TTY (terminal) para o container, é útil para executar comandos em um ambiente de linha de comando dentro do container.

### *acessar o MySQL*

```bash
mysql -u root -p
```

## *Derrubar o Container*

### Parar o Container

```bash
docker stop mysql_container
```

### Remover o Container

```bash
docker rm mysql-container
```

### Parar e Remover em um Só Comando

```bash
docker rm -f mysql-container
```
