# Seccionamento de conteúdo

- [Seccionamento de conteúdo](#seccionamento-de-conteúdo)
  - [``<h1>-<h6>`` Título da seção](#h1-h6-título-da-seção)
  - [``<nav>`` Seção de Navegação](#nav-seção-de-navegação)
  - [``<header>`` O Cabeçalho](#header-o-cabeçalho)
  - [``<footer>`` Rodapé](#footer-rodapé)

## [``<h1>-<h6>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) Título da seção

Use ``CSS`` ``font-size`` para redimensionar o título.

Não pule os níveis de título: sempre comece com ``<h1>``, seguido de ``<h2>`` e assim por diante.

Tenha apenas 1 ``<h1>``

Leia mais: [Não existe algoritmo de contorno de documento](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html)

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

## [``<footer>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) Rodapé

Um rodapé para o conteúdo de seccionamento anterior mais próximo.

Normalmente contém informações sobre o autor da seção, dados de direitos autorais ou links para documentos relacionados.

Coloque informações sobre o autor em ``<address>`` e que pode ser incluído no ``<footer>``.

Quando o conteúdo é ``<body>``, o rodapé se aplica a toda a página.
