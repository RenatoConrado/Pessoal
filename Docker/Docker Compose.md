# [Docker Compose](https://docs.docker.com/compose/compose-file/)

- [Docker Compose](#docker-compose)
  - [Serviços](#serviços)
  - [Volumes](#volumes)
  - [Ao iniciar o container](#ao-iniciar-o-container)
    - [Comando](#comando)
    - [Ponto de Entrada](#ponto-de-entrada)
  - [Porta](#porta)
    - [Sintax Curta](#sintax-curta)
    - [Sintax Longa](#sintax-longa)
  - [Expose](#expose)
  - [Healthcheck](#healthcheck)
  - [Network](#network)
    - [Prioridade](#prioridade)
    - [DRIVER](#driver)
      - [Bridge (padrão)](#bridge-padrão)
      - [Host](#host)
      - [Overlay](#overlay)
      - [Macvlan](#macvlan)
  - [Restart](#restart)
    - [políticas de reinicialização](#políticas-de-reinicialização)

```yml
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: exampledb
      MYSQL_USER: exampleuser
      MYSQL_PASSWORD: examplepass
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

## [Serviços](https://docs.docker.com/compose/compose-file/05-services/)

``services`` são os contêineres que compõem a sua aplicação. Cada serviço é definido por um nome e pode incluir configurações como imagem, portas, volumes, variáveis de ambiente e dependências.

```yml
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
```

## [Volumes](https://docs.docker.com/compose/compose-file/07-volumes/)

``volumes`` são usados para persistir dados entre reinicializações dos contêineres. Eles podem ser definidos no nível do serviço ou globalmente.

```yaml
volumes:
  db_data:
```

## Ao iniciar o container

### [Comando](https://docs.docker.com/compose/compose-file/05-services/#command)

``command`` permite substituir o comando padrão definido na imagem Docker. Ele é útil quando você precisa modificar a execução padrão de um contêiner, seja para executar um script específico, rodar uma aplicação com parâmetros personalizados ou ajustar o comportamento durante o desenvolvimento

```yml
services:
  database:
    image: mysql:latest
    command: ["mysqld", "--init-file=/data/application-init.sql"]
```

### [Ponto de Entrada](https://docs.docker.com/compose/compose-file/05-services/#entrypoint)

``entrypoint`` define um comando que sempre será executado quando um contêiner inicia. Diferente do ``command``, que pode ser substituído diretamente pelo Docker Compose, o ``entrypoint`` configura um executável que não pode ser facilmente substituído. Ele é útil para garantir que certos scripts ou comandos sejam executados antes de qualquer outro comando ou script especificado no ``command``.

```yml
services:
  app:
    image: myapp:latest
    entrypoint: ["python", "app.py"]
    command: ["--config", "config.yaml"]
```

---

## [Porta](https://docs.docker.com/compose/compose-file/05-services/#ports)

``ports`` é usada para mapear portas do container para o host, permitindo que serviços dentro do container sejam acessados a partir do host ou de redes externas. Esta configuração é crucial para expor serviços, como servidores web ou bancos de dados, para que possam ser acessados fora do ambiente Docker.

### [Sintax Curta](https://docs.docker.com/compose/compose-file/05-services/#short-syntax-3)

```yml
services:
  nome_do_serviço:
    image: nome_da_imagem
    ports:
      - "80:8000"
      - "6000-6060:3306-3399/tcp"
```

``HOST:CONTAINER/PROTOCOLO``

- ``HOST`` é ``IP:porta_minima-porta_maxima``
- ``CONTAINER`` é ``porta_minima-porta_maxima``

### [Sintax Longa](https://docs.docker.com/compose/compose-file/05-services/#long-syntax-3)

```yml
ports:
  - name: web
    target: 80
    host_ip: 127.0.0.1
    published: "8080"
    protocol: tcp
    app_protocol: http
    mode: host

  - name: web-secured
    target: 443
    host_ip: 127.0.0.1
    published: "8083-9000"
    protocol: tcp
    app_protocol: https
    mode: host
```

- ``target``: Porta do container
- ``published``: A porta exposta publicamente. É definido como uma string e pode ser definido como um intervalo usando a sintaxe ``valor_minimo-valor_maximo``.
- ``host_ip``: mapeia o IP do Host, não expecificar significa que é definido como todas as interfaces de network (0.0.0.0).
- ``protocol``: o protocolo da porta (tcp ou udp). definido por padrão como tcp.
- ``app_protocol``: o protocolo da aplicação (TCP/IP level 4 / OSI level 7). É opcional e pode ser usado como uma dica para o Compose oferecer um comportamento mais rico para os protocolos que ele entende. Foi introduzido no Docker Compose 2.26.
- ``mode``: ``host``: Para publicar uma porta host em cada nó, ou ``ingress`` para uma porta ser "load balanced". O padrão é ``ingress``.
- ``name``: Um nome legível para a porta, usado para documentar seu uso dentro do serviço.

## [Expose](https://docs.docker.com/compose/compose-file/05-services/#expose)

``expose`` é usada para informar ao Docker que uma determinada porta do container deve ser exposta para outros containers na mesma rede. Isso é útil para definir as portas que os containers precisam acessar uns aos outros, sem expô-las para fora da rede do Docker.

```yml
expose:
  - "3000"
  - "8000"
  - "8080-8085/tcp"
```

## [Healthcheck](https://docs.docker.com/compose/compose-file/05-services/#healthcheck)

``healthcheck`` usado para definir um comando que o Docker executa para verificar se um serviço está funcionando corretamente. Isso é útil para monitorar a "saúde" dos containers e garantir que apenas containers saudáveis estejam ativos e prontos para lidar com requisições.

```yml
services:
  nome_do_serviço:
    image: nome_da_imagem
    healthcheck:
      test: ["CMD", "comando_para_verificar_saude"]
      interval: "intervalo_de_tempo"
      timeout: "tempo_maximo"
      retries: numero_de_retentativas
      start_period: "periodo_inicial"
```

- Medida de tempo em segundos ``s``

  ```yml
  test: ["CMD", "curl", "-f", "http://localhost/ || exit 1"]
  ```

## [Network](https://docs.docker.com/compose/compose-file/05-services/#networks)

``Network`` é fundamental para definir como os serviços interagem uns com os outros. Redes Docker proporcionam um ambiente isolado para comunicação entre containers, oferecendo maior segurança e controle sobre as conexões. A partir da versão 3 do Docker Compose, o uso de redes é a abordagem recomendada para conectar serviços.

```yml
services:
  web:
    image: nginx
    ports:
      - "80:80"
    networks:
      - webnet
  db:
    image: postgres
    networks:
      - webnet

networks:
  webnet:
```

- ``webnet`` é a rede que conecta os serviços.

### [Prioridade](https://docs.docker.com/compose/compose-file/05-services/#priority)

``priority`` indica a ordem que o Compose conecta cada serviço a Network, o valor padrão é 0

```yml
services:
  app:
    image: busybox
    command: top
    networks:
      app_net_1:
        priority: 1000
      app_net_2:

      app_net_3:
        priority: 100
networks:
  app_net_1:
  app_net_2:
  app_net_3:
```

### [DRIVER](https://docs.docker.com/network/drivers/)

```yml
networks:
  db-data:
    driver: bridge
```

#### [Bridge (padrão)](https://docs.docker.com/network/drivers/bridge/)

Utilizada por padrão se nenhuma rede específica for definida. Containers podem se comunicar entre si através do bridge, mas não são expostos fora do Docker sem mapeamento de portas

#### [Host](https://docs.docker.com/network/drivers/host/)

Utiliza a rede do host diretamente. Containers não têm IPs internos e compartilham o IP do host. Menos isolada, mas pode ser útil para certos casos de uso.

#### [Overlay](https://docs.docker.com/network/drivers/overlay/)

Usada para comunicação entre containers em diferentes hosts. Ideal para aplicações em ambiente de cluster ou orquestração com Docker Swarm.

#### [Macvlan](https://docs.docker.com/network/drivers/macvlan/)

Permite que containers tenham endereços MAC próprios, sendo mais isolados e com capacidade de comunicação direta na rede física.

---

## [Restart](https://docs.docker.com/compose/compose-file/05-services/#restart)

``restart`` define a política de reinício dos contêineres gerenciados pelo Docker Compose. Isso ajuda a garantir que os serviços sejam reiniciados automaticamente em diferentes situações, como falhas de contêiner, reinicialização do sistema ou outras interrupções.

### [políticas de reinicialização](https://docs.docker.com/reference/cli/docker/container/run/#restart)

- no: Política de reinicialização padrão. Não reinicia o contêiner em nenhuma circunstância.
- always: A política sempre reinicia o contêiner até sua remoção.
- on-failure[:numero_tentativas_maximas]: reinicia o contêiner se o código de saída indicar um erro.
- unless-stopped: a política reinicia o contêiner independentemente do código de saída, mas para de reiniciar quando o serviço é interrompido ou removido.

  ```yml
    restart: "no"
    restart: always
    restart: on-failure
    restart: on-failure:3
    restart: unless-stopped
  ```
