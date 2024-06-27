# Seccionamento de conteúdo

- [Seccionamento de conteúdo](#seccionamento-de-conteúdo)
  - [``<h1>-<h6>`` Título da seção](#h1-h6-título-da-seção)
  - [``<hgroup>`` Grupo de Títulos](#hgroup-grupo-de-títulos)
  - [``<main>`` O Principal](#main-o-principal)
  - [``<aside>`` Ao Lado](#aside-ao-lado)
  - [``<nav>`` Seção de Navegação](#nav-seção-de-navegação)
  - [``<header>`` O Cabeçalho](#header-o-cabeçalho)
  - [``<search>`` Busca Genérica](#search-busca-genérica)
  - [``<footer>`` Rodapé](#footer-rodapé)
  - [``<address>`` Endereço de Contato](#address-endereço-de-contato)
  - [``<article>`` Artigo](#article-artigo)
  - [``<div>`` Divisão de Conteúdo](#div-divisão-de-conteúdo)
  - [``<section>`` Seção Generica](#section-seção-generica)

## [``<h1>-<h6>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) Título da seção

Use ``CSS`` ``font-size`` para redimensionar o título.

Não pule os níveis de título: sempre comece com ``<h1>``, seguido de ``<h2>`` e assim por diante.

Tenha apenas 1 ``<h1>``

Leia mais: [Não existe algoritmo de contorno de documento](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html)

## [``<hgroup>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup) Grupo de Títulos

Agrupa um título com qualquer conteúdo secundário, como:

- subtítulos,
- título alternativo
- ou slogan.

Cada um desses tipos de conteúdo é representado como um elemento ``<p>`` dentro do ``<hgroup>``.

Não Tem muito significado semântico, o Titulo em si é mais importante.

```html
<hgroup style="text-align: right; padding-right: 16px; border-right: 10px solid #09f;">
    <h1 style="margin-bottom: 0">Frankenstein</h1>
    <p style="margin: 0; font-weight: bold;">Ou: O Prometeu Moderno</p>
</hgroup>
<p>
    Victor Frankenstein, um cientista suíço, tem uma grande ambição: criar vida inteligente. Mas quando a sua criatura se mexe pela primeira vez, ele percebe que criou um monstro. Um monstro que, abandonado pelo seu mestre e evitado por todos que o vêem, segue o Dr. Frankenstein até aos confins da terra.
</p>
```

## [``<main>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) O Principal

A área de conteúdo principal consiste em conteúdo diretamente relacionado ou expandido ao tópico central de um documento ou à funcionalidade central de um aplicativo.

O conteúdo de ``<main>`` deve ser unico. O conteúdo repetido em outros documentos ou seções de documentos, como:

- barras laterais,
- links de navegação,
- informações de direitos autorais,
- logotipos de sites
- e formulários de pesquisa.

Não contribui para a outline do documento; não afeta o conceito do ``DOM`` sobre a estrutura da página. É estritamente informativo.

```html
<body>
    <a href="#main-content">Pular para o Conteudo Principal</a>
    <!-- navegação e conteúdo do header -->

    <main id="main-content">
    <!-- conteúdo da página principal -->
    </main>
</body>
```

## [``<aside>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) Ao Lado

Parte do documento que não está diretamente relacionado ao conteúdo principal.

É frequentemente apresentados como barras laterais ou caixas explicativas.

```html
<article style="background-color: #9ef; color: #000">
    <p>
        As salamandras são um grupo de anfíbios com aparência de lagarto, incluindo pernas curtas e cauda nas formas larval e adulta.
    </p>
    <aside style="
        width: 40%;
        padding-left: 0.5rem;
        margin-left: 0.5rem;
        float: right;
        background-color: #9af;
        box-shadow: inset 5px 0 5px -5px #aaf;
        font-style: italic;
        color: #fff;">
        <p>A salamandra de pele áspera se defende com uma neurotoxina mortal.</p>
    </aside>
    <p>
        Várias espécies de salamandra habitam a floresta temperada do noroeste do Pacífico, incluindo a Ensatina, a salamandra do noroeste e a salamandra de pele áspera.
    </p>
    <p>
        A maioria das salamandras são noturnas e caçam insetos, vermes e outras pequenas criaturas.
    </p>
</article>
```

## [``<nav>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) Seção de Navegação

Seção da página que fornece links de navegação, seja dentro do documento atual ou para outros documentos.

Use apenas blocos maiores de links de navegação.

``<footer>`` não precisa estar em um ``<nav>``.

Exemplos comuns de seções de navegação são menus, índices e índices.

```html
<nav class="crumbs">
    <ol>
        <li class="crumb"><a href="#">Bikes</a></li>
        <li class="crumb"><a href="#">BMX</a></li>
        <li class="crumb">Jump Bike 3000</li>
    </ol>
</nav>

<h1>Jump Bike 3000</h1>
<p>
Esta bicicleta BMX é um passo sólido para o mundo profissional.
</p>
```

## [``<header>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) O Cabeçalho

Representa conteúdo introdutório ou para auxiliar a navegação.

Pode conter:

- logotipo
- título
- Navegação (como ``<nav>``)
- formulário de pesquisa
- nome do autor
- e elementos similares.

O elemento ``<header>`` tem a função de: [``banner``](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role), a menos que esteja dentro de ``<article>``, ``<aside>``, ``<main>``, ``<nav>``, or ``<section>``

```html
<header>
    <h1>Bem-vindo ao Meu Site</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>
</header>

<article>
    <header>
        <h1>Beagles</h1>
        <time>08.12.2014</time>
    </header>
    <p>I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and their ears are so, so snugly soft!</p>
</article>
```

## [``<search>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search) Busca Genérica

Identifica semanticamente o proposito do conteúdo como: Recursos de pesquisa ou filtragem.

mas elementos que são parte da funcionalidade de "pesquisa rápida" podem estar dentro de ``<search>``, pois são recursos de pesquisa.

```html
<header>
    <h1>Site de Filmes</h1>
    <search>
        <form action="./search/">
        <label for="movie">Procurar um Filme</label>
        <input type="search" id="movie" name="q" />
        <button type="submit">Buscar</button>
        </form>
    </search>
</header>
```

Veja também: [``<search>`` em Web app](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search#web_app_search)

## [``<footer>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) Rodapé

Um rodapé para o conteúdo de seccionamento anterior mais próximo.

Não serve para apresentar resultados de pesquisa. Os resultados devem ser apresentados como parte do conteúdo principal da página.

Normalmente contém

- informações sobre o autor da seção,
- dados de direitos autorais
- ou links para documentos relacionados.

Quando o conteúdo é ``<body>``, o rodapé se aplica a toda a página.

## [``<address>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) Endereço de Contato

Fornece informações de contato de pessoas ou organizações.

só pode ser usado para representar as informações de contato do elemento anterior ``<article>`` ou ``<body>``.

pode ser usada em ``<footer>``

## [``<article>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) Artigo

representar uma seção independente e autocontida do conteúdo de um documento, como uma postagem de blog, uma notícia, uma entrada de fórum ou qualquer outro conteúdo independente.

Cada ``<article>`` deve título (``<h1>`` - ``<h6>``).

Quando um ``<article>`` está dentro de outro, o elemento interno representa um artigo relacionado ao elemento externo. Por exemplo, os comentários de uma postagem do blog.

As informações do autor de um elemento ``<article>`` podem ser fornecidas por meio do elemento ``<address>``, mas não se aplicam a elementos ``<article>`` um dentro do outro.

A data e hora de publicação podem ser descritas usando ``datetime`` em ``<time>``.

```html
<article class="previsao">
    <h1>Previsão do tempo para Seattle</h1>

    <article class="previsao-do-dia">
        <h2>03 de março de 2018</h2>
        <p>Chuva.</p>
    </article>

    <article class="previsao-do-dia">
        <h2>04 de março de 2018</h2>
        <p>Períodos de chuva.</p>
    </article>

    <article class="previsao-do-dia">
        <h2>5 de março de 2018</h2>
        <p>Chuva forte.</p>
    </article>
</article>
```

## [``<div>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) Divisão de Conteúdo

Contêiner genérico para o fluxo do conteúdo. Ele não tem efeito no conteúdo ou no layout até que seja estilizado de alguma forma usando ``CSS``.

## [``<section>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) Seção Generica

Seção genérica que não possui um elemento específico para representá-lo, como:

- Uma lista de resultados de pesquisa
- ou uma exibição de mapa e seus controles.

As seções devem sempre ter um título, com poucas exceções.

---

Se o conteúdo é uma unidade atômica de conteúdo independente que faça sentido distribuída como uma peça independente, por exemplo:

- uma postagem de blog,
- um comentário de blog
- ou um artigo de jornal, o elemento [``<article>``](#article-artigo) seria uma escolha melhor.

Se o conteúdo representar informação tangencial útil que funciona junto com o conteúdo principal, mas não faz parte diretamente dele, como:

- links relacionados
- ou uma biografia do autor, use [``<aside>``](#aside-ao-lado).

Se é o conteudo principal do documento, use [``<main>``](#main-o-principal).

Se você estiver querendo apenas embrulhar para estilizar, use ``<div>``.
