# [Mermaid](https://mermaid.js.org/intro/#diagram-types)

- [Mermaid](#mermaid)
  - [Gráficos de Fluxo](#gráficos-de-fluxo)
  - [Diagramas de Sequência](#diagramas-de-sequência)
  - [Diagramas de Gantt](#diagramas-de-gantt)
  - [Diagramas de Classe](#diagramas-de-classe)
  - [Diagramas de Estado](#diagramas-de-estado)
  - [Mind Map](#mind-map)
  - [Linha do tempo](#linha-do-tempo)

## [Gráficos de Fluxo](https://mermaid.js.org/syntax/flowchart.html?id=flowcharts-basic-syntax)

```mermaid
graph TD
    A[Início] --> B[Etapa 1]
    B --> C{Decisão?}
    C -->|Sim| D[Etapa 2]
    C -->|Não| E[Etapa 3]
    D --> F(Fim)
    E --> F
```

## [Diagramas de Sequência](https://mermaid.js.org/syntax/sequenceDiagram.html)

```mermaid
sequenceDiagram
    participant A
    participant B
    A->>B: Mensagem 1
    B->>A: Resposta 1
    A->>B: Mensagem 2
    B->>C: Mensagem 3
    C-->>B: Resposta 2
```

## [Diagramas de Gantt](https://mermaid.js.org/syntax/gantt.html)

```mermaid
gantt
    title Título do Projeto
    dateFormat  YYYY-MM-DD
    section Seção 1
    Tarefa 1       :a1, 2023-01-01, 30d
    Tarefa 2       :after a1, 20d
    section Seção 2
    Tarefa 3       :2023-01-12  , 12d
    Tarefa 4       :2023-01-14  , 14d
```

## [Diagramas de Classe](https://mermaid.js.org/syntax/classDiagram.html)

```mermaid
classDiagram
    class Animal {
      +String nome
      +int idade
      +void comer()
    }
    class Cachorro {
      +void latir()
    }
    Animal <|-- Cachorro
```

## [Diagramas de Estado](https://mermaid.js.org/syntax/stateDiagram.html)

```mermaid
stateDiagram-v2
    [*] --> Mantém
    Mantém --> [*]

    Mantém --> Movimento
    Movimento --> Mantém
    Movimento --> Batida
    Batida --> [*]
```

## [Mind Map](https://mermaid.js.org/syntax/mindmap.html)

```mermaid
mindmap
    root(Tópico Principal)
        Subtópico 1
            Detalhe 1
            Detalhe 2
        Subtópico 2
            Detalhe 3
            Detalhe 4
```

## [Linha do tempo](https://mermaid.js.org/syntax/timeline.html)

```mermaid
timeline
    title Tarefas do Projeto
    section Tarefas
    tarefa1: 2024-01-01, 30d
    tarefa2: 2024-02-01, 20d
```
