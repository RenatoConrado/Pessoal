# [Command Line Client (CLI)](https://docs.docker.com/reference/cli/docker/)

- [Command Line Client (CLI)](#command-line-client-cli)
  - [Imagens](#imagens)
    - [Baixar a imagem](#baixar-a-imagem)
      - [Listar imagens](#listar-imagens)
      - [Detalhes de uma imagem](#detalhes-de-uma-imagem)
      - [Remover imagem](#remover-imagem)
      - [Remover imagens não utilizadas](#remover-imagens-não-utilizadas)
  - [Containers](#containers)
  - [Inicializar a imagem](#inicializar-a-imagem)
    - [Expor Porta](#expor-porta)
    - [Montar volume](#montar-volume)
    - [Variáveis de Ambiente Docker](#variáveis-de-ambiente-docker)
      - [Variáveis de Ambiente MySQL](#variáveis-de-ambiente-mysql)
  - [Verificar o Status do Container](#verificar-o-status-do-container)
    - [Listar Containers em Execução](#listar-containers-em-execução)
    - [Listar Containers Parados](#listar-containers-parados)
    - [Registros do Container](#registros-do-container)
  - [Acessar o Container](#acessar-o-container)
  - [Acessar o Serviço MySQL dentro do container](#acessar-o-serviço-mysql-dentro-do-container)
  - [Derrubar o Container](#derrubar-o-container)
    - [Parar o Container](#parar-o-container)
    - [Remover o Container](#remover-o-container)
    - [Parar e Remover o Container](#parar-e-remover-o-container)
  - [Iniciar um Container Parado](#iniciar-um-container-parado)

## [Imagens](https://docs.docker.com/reference/cli/docker/image/)

### [Baixar a imagem](https://docs.docker.com/reference/cli/docker/image/pull/)

Baixe uma imagem do [Docker Hub](https://hub.docker.com/)

```powershell
docker pull [imagem_a_ser_baixada]
```

#### [Listar imagens](https://docs.docker.com/reference/cli/docker/image/ls/)

```powershell
docker images
```

#### [Detalhes de uma imagem](https://docs.docker.com/reference/cli/docker/image/inspect/)

```powershell
docker inspect mysql:latest
```

#### [Remover imagem](https://docs.docker.com/reference/cli/docker/image/rm/)

```powershell
docker rmi mysql:latest
```

#### [Remover imagens não utilizadas](https://docs.docker.com/reference/cli/docker/image/prune/)

```powershell
docker image prune
```

## [Containers](https://docs.docker.com/reference/cli/docker/container/)

## [Inicializar a imagem](https://docs.docker.com/reference/cli/docker/container/run/)

```powershell
docker run --name [nome_do_container] -e MYSQL_ROOT_PASSWORD=[senha_container] -d mysql
```

- [``--name``](https://docs.docker.com/reference/cli/docker/container/run/#name) Identificador customizado.
- [``-e`` ``--env`` ``--env-file``](https://docs.docker.com/reference/cli/docker/container/run/#env) Define variáveis de ambiente.
- [``-d`` ``--detache``](https://docs.docker.com/reference/cli/docker/container/run/#detach) Executa o container Desanexado ao terminal.

### [Expor Porta](https://docs.docker.com/reference/cli/docker/container/run/#publish)

```powershell
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -p "3306:3306" -d mysql
```

- [``-p`` ``--expose``](https://docs.docker.com/reference/cli/docker/container/run/#publish)

### [Montar volume](https://docs.docker.com/reference/cli/docker/container/run/#volume)

```powershell
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -v [/meu/diretorio]:[/diretorio/do/container] -d mysql
```

Vantagens do **Volume Mounting** [``-v``](https://docs.docker.com/reference/cli/docker/container/run/#volume)

- **Persistência de Dados:** Dados armazenados no diretório montado no host persistem mesmo após o container ser removido.
- **Facilidade de Backup e Restore:** Como os dados estão no host, é mais fácil fazer backup e restaurar.
- **Compartilhamento de Dados:** Permite que múltiplos containers acessem os mesmos dados.

### [Variáveis de Ambiente Docker](https://docs.docker.com/reference/cli/docker/container/run/#env)

```powershell
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=[nome_db_ao_ser_iniciado] -e MYSQL_USER=[usuario] -e MYSQL_PASSWORD=[senha_do_suario] -d mysql
```

#### [Variáveis de Ambiente MySQL](https://dev.mysql.com/doc/refman/8.4/en/docker-mysql-more-topics.html#docker-environment-variables)

- [``MYSQL_ROOT_PASSWORD``](https://dev.mysql.com/doc/refman/8.4/en/docker-mysql-more-topics.html#docker_var_mysql-root-password): Usuario com acesso de administrador, é inseguro, no lugar use [``MYSQL_RANDOM_ROOT_PASSWORD``](https://dev.mysql.com/doc/refman/8.4/en/docker-mysql-more-topics.html#docker_var_mysql_random_root_password) e [``MYSQL_ONETIME_PASSWORD``](https://dev.mysql.com/doc/refman/8.4/en/docker-mysql-more-topics.html#docker_var_mysql_onetime_password).
- [``MYSQL_DATABASE``](https://dev.mysql.com/doc/refman/8.4/en/docker-mysql-more-topics.html#docker_var_mysql_database): Define o nome e cria um banco de dados na inicialização do container.
- [``MYSQL_USER`` ``MYSQL_PASSWORD``](https://dev.mysql.com/doc/refman/8.4/en/docker-mysql-more-topics.html#docker_var_mysql_user_password): Cria um novo usuário sem acesso de administrador. Caso ``MYSQL_DATABASE`` seja usado, o usuário terá acesso de administrador.

## Verificar o Status do Container

### [Listar Containers em Execução](https://docs.docker.com/reference/cli/docker/container/ls/)

```powershell
docker ps
```

### [Listar Containers Parados](https://docs.docker.com/reference/cli/docker/container/ls/#all)

```powershell
docker ps -a
```

### [Registros do Container](https://docs.docker.com/reference/cli/docker/container/logs/)

```powershell
docker logs [nome_do_container]
```

## [Acessar o Container](https://docs.docker.com/reference/cli/docker/container/exec/)

Para acessar o shell do container e executar comandos diretamente:

```powershell
docker exec -it [identificador_do_container] bash
```

- [**Interactive:** ``-i``](https://docs.docker.com/reference/cli/docker/container/exec/#run-docker-exec-on-a-running-container) mantém o STDIN do container aberto, permitindo que você interaja com ele, é útil para enviar comandos ou dados ao container enquanto ele está rodando.
- [**TTY:** ``-t``](https://docs.docker.com/reference/cli/docker/container/exec/#run-docker-exec-on-a-running-container) aloca um pseudo-TTY (terminal) para o container, é útil para executar comandos em um ambiente de linha de comando dentro do container.

## [Acessar o Serviço MySQL dentro do container](https://dev.mysql.com/doc/refman/8.4/en/mysql-command-options.html)

```powershell
mysql -u [nome_do_usuario] -p
```

- [``-u nome_de_usuario`` ou ``--user=nome_de_usuario``](https://dev.mysql.com/doc/refman/8.4/en/mysql-command-options.html#option_mysql_user)
- [``--port=numero_da_porta`` ou ``-P numero_da_porta``](https://dev.mysql.com/doc/refman/8.4/en/mysql-command-options.html#option_mysql_port)

## [Derrubar o Container](https://docs.docker.com/reference/cli/docker/container/stop/)

### [Parar o Container](https://docs.docker.com/reference/cli/docker/container/stop/)

```powershell
docker stop [identificador_do_container]
```

### [Remover o Container](https://docs.docker.com/reference/cli/docker/container/rm/)

```powershell
docker rm [identificador_do_container]
```

### [Parar e Remover o Container](https://docs.docker.com/reference/cli/docker/container/rm/#force)

```powershell
docker rm -f [identificador_do_container]
```

## [Iniciar um Container Parado](https://docs.docker.com/reference/cli/docker/container/start/)

```powershell
docker start [nome_do_container]
```
