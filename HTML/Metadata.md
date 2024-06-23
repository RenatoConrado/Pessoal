# [``<head>`` O Cabeçalho dos Metadados](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

- [``<head>`` O Cabeçalho dos Metadados](#head-o-cabeçalho-dos-metadados)
  - [``<title>`` O Título](#title-o-título)
  - [``<link>`` A ligação com recursos externos](#link-a-ligação-com-recursos-externos)
  - [``<link rel="" />``](#link-rel-)
    - [``alternate``](#alternate)
    - [``author``](#author)
    - [``canonical``](#canonical)
    - [``dns-prefetch``](#dns-prefetch)
    - [``help``](#help)
    - [``icon``](#icon)
    - [``license``](#license)
    - [``manifest``](#manifest)
    - [``modulepreload``](#modulepreload)
    - [``prev`` | ``next``](#prev--next)
    - [``pingback``](#pingback)
    - [``preconnect``](#preconnect)
    - [``prefetch``](#prefetch)
    - [``preload``](#preload)
    - [``privacy-policy``](#privacy-policy)
    - [``search``](#search)
    - [``stylesheet``](#stylesheet)
    - [``terms-of-service``](#terms-of-service)

## [``<title>`` O Título](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

## [``<link>`` A ligação com recursos externos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

```html
<head>
    <link href="./styles/main.css" rel="stylesheet" />
</head>
```

- Principais [``rel=``](#link-rel-) [``stylesheet``](#stylesheet), [``icon``](#icon), [``preload``](#preload), [``dns-prefetch``](#dns-prefetch).

## [``<link rel="" />``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)

### ``alternate``

Link: Representação alternativa do documento.

> [!WARNING] Style sheet alternativo não é bem suportado.

[Alternative Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets)

```html
<link rel="stylesheet" href="default.css" />

<link
rel="alternate stylesheet"
href="highcontrast.css"
title="High contrast" />

<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### ``author``

Link: autor de todo o documento.

### ``canonical``

Link: ``URL`` Preferido para o documento, reduz conteudo duplicado em mecanismos de busca.

### [``dns-prefetch``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch)

External Resource: Lê isso aqui -> [dns-prefetch](https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch)

### ``help``

Link

### ``icon``

External Resource

```html
<link rel="icon" href="favicon.ico" />
```

### ``license``

Link: indica que o conteudo é protegido por Copyright.

```html
<link rel="license" href="#license" />
```

### [``manifest``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/manifest)

> [!TIP] Experimental [Somente Android]

Link: Leva ao [App Web](https://developer.mozilla.org/en-US/docs/Web/Manifest) do android.

### [``modulepreload``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload)

External Resource: Lê isso aqui -> [``modulepreload``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload)

### ``prev`` | ``next``

Link: Indica o documento anterior e proximo.

```html
<link rel="prev" href="page1.html" />
<link rel="next" href="page3.html" />
```

### [``pingback``](https://www.hixie.ch/specs/pingback/pingback)

External Resource: dá o endereço do ``pingback``.

### [``preconnect``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect)

External Resource: Especifica preventivamente que o usuário deve ser conectar a origem do "recurso destino".

```html
<link rel="preconnect" href="https://example.com" />
```

### [``prefetch``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch)

External Resource: Especifica preventivamente que o usuário deve buscar e guardar a ``cache`` do "recurso destino".

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### [``preload``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload)

External Resource: Especifica preventivamente que o usuário deve buscar e guardar a ``cache`` do "recurso destino" de acordo com o "destino potencial" fornecido pelo atributo (e a prioridade associada ao destino correspondente).

```html
<link rel="preload" href="style.css" as="style" />
<link rel="preload" href="main.js" as="script" />
```

### ``privacy-policy``

Link

```html
<link rel="privacy-policy" href="privacy-policy.html">
```

### ``search``

Link: Recurso para navegar no documento e suas paginas.

Perquisar

- [OpenSearch](https://developer.mozilla.org/en-US/docs/Web/OpenSearch)
- [ChromeSettings](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)

```html
<head>
    <link rel="search" href="/search" title="Search this site" />
</head>
<body>
    <header>
        <a rel="search" href="/search">Search</a>
    </header>
</body>
```

### ``stylesheet``

External Resource

### ``terms-of-service``
