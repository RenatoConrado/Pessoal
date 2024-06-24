# [``<head>`` Cabeçalho dos Metadados](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

- [``<head>`` Cabeçalho dos Metadados](#head-cabeçalho-dos-metadados)
  - [``<title>`` Título](#title-título)
  - [``<link>`` Vinculo a Recursos Externos](#link-vinculo-a-recursos-externos)
    - [``as=""``](#as)
    - [``crossorigin=""``](#crossorigin)
    - [``fetchpriority``](#fetchpriority)
    - [``href=""``](#href)
    - [``hreflang=""``](#hreflang)
    - [``imagesizes=""``](#imagesizes)
    - [``imagesrcset=""``](#imagesrcset)
    - [``integrity=""``](#integrity)
    - [``media=""``](#media)
    - [``referrerpolicy=""``](#referrerpolicy)
    - [``rel="icon"`` ``sizes=""``](#relicon-sizes)
    - [``title=""``](#title)
    - [``type=""``](#type)
  - [``<link````rel=""````/>``](#linkrel)
    - [``rel="alternate"``](#relalternate)
    - [``rel="author"``](#relauthor)
    - [``rel="canonical"``](#relcanonical)
    - [``rel=````dns-prefetch``](#reldns-prefetch)
    - [``rel="help"``](#relhelp)
    - [``rel="icon"``](#relicon)
    - [``rel="license"``](#rellicense)
    - [``rel=````manifest``](#relmanifest)
    - [``rel=````modulepreload``](#relmodulepreload)
    - [``rel=`` ``"prev"`` | ``"next"``](#rel-prev--next)
    - [``rel=````pingback``](#relpingback)
    - [``rel=````preconnect``](#relpreconnect)
    - [``rel=````prefetch``](#relprefetch)
    - [``rel=````preload``](#relpreload)
    - [``rel="privacy-policy"``](#relprivacy-policy)
    - [``rel="search"``](#relsearch)
    - [``rel="stylesheet"``](#relstylesheet)
    - [``rel="terms-of-service"``](#relterms-of-service)
  - [``<style>`` A estilização](#style-a-estilização)
    - [``media``](#media-1)
    - [``nonce``](#nonce)
    - [``title``](#title-1)
  - [``<meta>`` Metadados](#meta-metadados)
    - [``charset``](#charset)
    - [``content``](#content)
    - [``http-equiv``](#http-equiv)
  - [``<meta````name=""````>``](#metaname)
    - [``name="application-name"``](#nameapplication-name)
    - [``name="author"``](#nameauthor)
    - [``name="description"``](#namedescription)
    - [``name="generator"``](#namegenerator)
    - [``name="keywords"``](#namekeywords)
    - [``name="referrer"``](#namereferrer)
    - [``name="theme-color"``](#nametheme-color)
    - [``name="color-scheme"``](#namecolor-scheme)
    - [``name="viewport"``](#nameviewport)
    - [Outros ``<meta name="">``](#outros-meta-name)

## [``<title>`` Título](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

## [``<link>`` Vinculo a Recursos Externos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

```html
<head>
    <link href="./styles/main.css" rel="stylesheet" />
</head>
```

- Principais [``rel=``](#linkrel) [``stylesheet``](#relstylesheet), [``icon``](#relicon), [``preload``](#relpreload), [``rel-dns-prefetch``](#reldns-prefetch).

### ``as=""``

- ``audio``
- ``document`` para ``<iframe>`` ou ``<frame>``
- ``embed``
- ``fetch``
- ``font``
- ``image`` para ``<img>``
- ``object``
- ``script`` para ``.js``
- ``style`` para ``.css``
- ``track``
- ``video``
- ``worker``

### ``crossorigin=""``

Indica se o [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS) deve ser usado ao buscar recursos

- ``crossorigin=`` ``anonymous``
  - solicitação sem enviar recursos

    ```html
    <link rel="preload" href="https://example.com/fonts/font.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    ```

- ``crossorigin=`` ``use-credentials``
  - solicitação com autenticação, como cookies ou header de autorização.

    ```html
    <link rel="stylesheet" href="https://example.com/protected-style.css" crossorigin="use-credentials">
    ```

### ``fetchpriority``

Indica a prioridade relativa ao buscar um recurso pré-carregado.

- ``high``

- ``low``

- ``auto``: Padrão. Indica a prioridade automaticamente.

### ``href=""``

Especifica a ``URL`` Relativa ou Absoluta.

### ``hreflang=""``

> Use apenas se ``href`` está presente.

Indica o Linked Resource especificado em [Root/Lang](./Root.md#lang)

### ``imagesizes=""``

### ``imagesrcset=""``

### ``integrity=""``

### ``media=""``

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />

<link href="desktop.css" rel="stylesheet" media="screen and (min-width: 600px)" />

<link href="highres.css" rel="stylesheet" media="screen and (min-resolution: 300dpi)" />
```

### ``referrerpolicy=""``

Veja: [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer), [Referer header: Privacidade e segurança](https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- ``no-referrer``: Não envia nenhuma informação do referenciador.

- ``no-referrer-when-downgrade``: **Padrão**. Envia a **URL** completa do referenciador para requisições feitas para o mesmo protocolo de segurança (https -> https) e envia nenhum referenciador ao fazer requisições para um protocolo menos seguro (https -> http).

- ``origin``: Envia apenas a origem (esquema, host e porta) do documento referenciador.

- ``origin-when-cross-origin``: Envia a URL completa do referenciador se a requisição for para o mesmo domínio, porém, envia apenas a origem caso a requisição vá para um domínio diferente.

    ```html
    <link rel="stylesheet" href="https://example.com/style.css" referrerpolicy="origin-when-cross-origin">
    ```

- ``same-origin``: Envia a URL completa do referenciador se a requisição for para o mesmo domínio, mas não envia nada se a requisição for para um domínio diferente.

- ``strict-origin``: Envia a origem apenas se o protocolo de segurança não for reduzido (https -> https, http -> http), mas nada é enviado em caso de downgrade (https -> http).

- ``strict-origin-when-cross-origin``: Envia a URL completa para requisições do mesmo domínio e a origem para requisições de domínio cruzado, mas apenas se não houver downgrade de protocolo.

- ``unsafe-url``: Sempre envia a URL completa do referenciador, independentemente do protocolo.

### [``rel="icon"``](#relicon) ``sizes=""``

- ``any``: como ``image/svg+xml``
- ``<largura em pixels>``x``<altura em pixels>``

```html

<link rel="apple-touch-icon" sizes="144x144" href="favicon144.png" />

<link rel="apple-touch-icon" sizes="114x114" href="favicon114.png" />
```

### ``title=""``

define um [stylesheet alternativo](#relalternate).

### ``type=""``

Define o *MIME type* como text/html, text/css. mas como só é usado ``.css``, é recomendado omitir isso.

## ``<link``[``rel=""``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)``/>``

### ``rel="alternate"``

Link: Representação alternativa do documento.

> [!WARNING]
> Style sheet alternativo não é bem suportado.

Veja: [Alternative StyleSheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets)

```html
<link rel="stylesheet" href="default.css" />

<link
rel="alternate stylesheet"
href="highcontrast.css"
title="High contrast" />

<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### ``rel="author"``

Link: autor de todo o documento.

### ``rel="canonical"``

Link: ``URL`` Preferido para o documento, reduz conteudo duplicado em mecanismos de busca.

### ``rel=``[``dns-prefetch``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch)

External Resource: Lê isso aqui -> [dns-prefetch](https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch)

### ``rel="help"``

Link

### ``rel="icon"``

External Resource

```html
<link rel="icon" href="favicon.ico" />
```

### ``rel="license"``

Link: indica que o conteudo é protegido por Copyright.

```html
<link rel="license" href="#license" />
```

### ``rel=``[``manifest``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/manifest)

> [!TIP]
> Experimental [Somente Android]

Link: Leva ao [App Web](https://developer.mozilla.org/en-US/docs/Web/Manifest) do android.

### ``rel=``[``modulepreload``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload)

External Resource: Lê isso aqui -> [``modulepreload``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload)

### ``rel=`` ``"prev"`` | ``"next"``

Link: Indica o documento anterior e proximo.

```html
<link rel="prev" href="page1.html" />
<link rel="next" href="page3.html" />
```

### ``rel=``[``pingback``](https://www.hixie.ch/specs/pingback/pingback)

External Resource: dá o endereço do ``pingback``.

### ``rel=``[``preconnect``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect)

External Resource: Especifica preventivamente que o usuário deve ser conectar a origem do "recurso destino".

```html
<link rel="preconnect" href="https://example.com" />
```

### ``rel=``[``prefetch``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch)

External Resource: Especifica preventivamente que o usuário deve buscar e guardar a ``cache`` do "recurso destino".

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### ``rel=``[``preload``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload)

External Resource: Especifica preventivamente que o usuário deve buscar e guardar a ``cache`` do "recurso destino" de acordo com o "destino potencial" fornecido pelo atributo (e a prioridade associada ao destino correspondente).

```html
<link rel="preload" href="style.css" as="style" />
<link rel="preload" href="main.js" as="script" />
```

### ``rel="privacy-policy"``

Link

```html
<link rel="privacy-policy" href="privacy-policy.html">
```

### ``rel="search"``

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

### ``rel="stylesheet"``

External Resource

### ``rel="terms-of-service"``

## [``<style>`` A estilização](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)

### ``media``

Padrão é ``all``.

seu valor é um [Media querie](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries).

```html
<style media="all and (max-width: 500px)">
    p {
        color: blue;
        background-color: yellow;
        padding: 5px;
        border: 1px solid black;
    }
</style>
```

### ``nonce``

Uma criptografia nonce (número usado apenas uma vez) é usado para permitir [Política de segurança de Conteúdo *estilo-fonte*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src).

### [``title``](#relalternate)

## [``<meta>`` Metadados](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

representa todos os elementento que não são meta-relacionados como: ``<base>``, ``<link>``, ``<script>``, ``<style>`` ou ``<title>``

### ``charset``

```html
<meta charset="utf-8" />
```

Normalmente é ``UTF-8`` mas existem outras como:

- ``"ISO-8859-1"``: Latim.

- ``"UTF-16"``: Codificação ``16 bits`` que pode representar caracteres *Unicode*.

- ``"Windows-1252"``: Codificação usada em sistemas Windows para idiomas ocidentais.

- ``"Shift_JIS"``: Japonês.

- ``"GB2312"``: Chinês simplificado.

### ``content``

Usado em: [``http-equiv``](#http-equiv) e [``name``](#metaname)

### ``http-equiv``

- ``refresh``: Atualiza a página após um determinado período.

    > [!WARNING]
    > Pessoas cegas podem não entender o redirecionamento abrupto.

    ```html
    <!-- Redireciona depois de 3 segundos -->
    <meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
    ```

  - ``content=""``: o numero de segundos *inteiro não-negativo* até a pagina atualizar ou ser redirecionada caso tenha ``;url=``.

- ``content-type``: Define o [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) e a codificação de caracteres. é equivalente ao [meta#charset](#charset)

    ```html
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    ```

- ``default-style``: Define o nome do ``.CSS`` padrão.

- ``X-UA-Compatible``: Indica ao Internet Explorer para usar um modo de renderização específico.

    ```html
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ```

- ``cache-control``: Controla o armazenamento em cache da página.

    ```html
    <meta http-equiv="cache-control" content="no-cache">
    ```

## ``<meta``[``name=""``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)``>``

``name=`` e ``content=`` podem ser usado para prover metadados no formato *``nome-valor``*.

### ``name="application-name"``

O nome do aplicativo executando na pagina

> [!NOTE]
> Os navegadores podem usar isso para identificar o aplicativo. É diferente do elemento `<title>`, que geralmente contém o nome do aplicativo, mas também pode conter informações como o nome do documento ou um status.
>
> Páginas web simples não devem definir um nome de aplicativo.

### ``name="author"``

### ``name="description"``

um sumario curso e preciso do conteudo. mecanismos de busca como o [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) podem usar esse campo para controlar a aparência da pagina nos resultados da busca.

### ``name="generator"``

identificador do software de geração da pagina.

### ``name="keywords"``

```html
<meta name="keywords" content="HTML, CSS, JavaScript">
```

### ``name="referrer"``

Similar a [Referrer Policy](#referrerpolicy)

controla o cabeçalho do [referenciador](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) HTTP de solicitações enviadas pelo documento

- ``no-referrer``: Não envia o Referenciador do Header HTTP.

- ``Origin``: Envia a origem do documento.

- ``no-referrer-when-downgrade``: Envia a URL completa quando o destino for pelo menos tão seguro quanto a página atual (HTTP(S)→HTTPS), mas não envie nenhum referenciador quando for menos seguro (HTTPS→HTTP ). Este é o comportamento padrão.

- ``origin-when-cross-origin``: Envia a URL completa (sem parâmetros) para solicitações de mesma origem, mas envia apenas a origem para outros casos.

- ``same-origin``: Envia a URL completa (sem parâmetros) para solicitações de mesma origem. As solicitações de origem cruzada não conterão nenhum cabeçalho de referência.

- ``strict-origin``: Envia a origem quando o destino é pelo menos tão seguro quanto a página atual (HTTP(S)→HTTPS), mas não envia nenhum referenciador quando é menos seguro (HTTPS→HTTP).

- ``strict-origin-when-cross-origin``: Envia a URL completa (sem parâmetros) para solicitações de mesma origem. Envie a origem quando o destino for pelo menos tão seguro quanto a página atual (HTTP(S)→HTTPS). Caso contrário, não envie nenhum referenciador.

- ``unsafe-URL``: Envia a URL completa (sem parâmetros) para solicitações de mesma origem ou de origem cruzada

> [!NOTE]
> A inserção dinâmica de `<meta name="referrer">` (com document.write() ou appendChild()) torna o comportamento do referenciador imprevisível.
>
> Quando diversas políticas conflitantes são definidas, a política ``no-referrer`` é aplicada.

### ``name="theme-color"``

Indica uma cor sugerida que os agentes do usuário devem usar para personalizar a exibição da página ou da interface do usuário ao redor.

O atributo content contém um CSS válido [``<color>``](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

### ``name="color-scheme"``

Especifica um ou mais esquemas de cores com os quais o documento é compatível.

O navegador usará essas informações em conjunto com as configurações do navegador ou do dispositivo do usuário para determinar quais cores usar para tudo, desde plano de fundo e primeiro plano até controles de formulário e barras de rolagem.

O uso principal de ``<meta name="color-scheme">`` é indicar compatibilidade com-e ordem de preferência para-os modos de cores light e dark.

``content``:

- ``normal``: O documento não sabe o esquemas de cores e deve ser renderizado usando a paleta de cores padrão.

- [``light`` | ``dark``]+: A indicação de vários esquemas de cores indica que o primeiro esquema é preferido pelo documento, mas que o segundo esquema especificado é aceitável se o usuário preferir.

    ```html
    <meta name="color-scheme" content="dark light" />
    ```

- ``only light``: "only dark" não é válido, porque forçar um documento a renderizar no modo escuro quando não é realmente compatível com ele pode resultar em conteúdo ilegível; todos os principais navegadores são padronizados para o modo light, se não forem configurados de outra forma.

### ``name="viewport"``

Indica o tamanho inicial do [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport).

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

``content``:

- ``width=``: Um inteiro positivo ou ``device-width``.

- ``height=``: Um inteiro positivo ou ``device-height``, não é usado pelos browsers

- ``initial-scale=``: entre ``0.0`` e ``10.0``, proporção entre o ``device-width`` (largura do dispositivo no modo retrato ou altura do dispositivo no modo paisagem) e o tamanho da janela de visualização.

- ``maximum-scale=``: entre ``0.0`` e ``10.0``, valor máximo para aumentar o zoom, O navegador pode ignorar e o iOS10+ a ignora por padrão.

- ``minimum-scale=``: entre ``0.0`` e ``10.0``, nível mínimo de zoom, O navegador pode ignorar e o iOS10+ a ignora por padrão.

- ``user-scale=``: ``yes`` ou ``no``. Caso seja ``no``, o usuário não poderá dar zoom. O navegador pode ignorar e o iOS10+ a ignora por padrão.

- ``viewport-fit=``:
  - ``auto``: Não afeta o layout inicial da viewport.
  - ``contain``: A viewport é dimensionada para caber no maior retângulo inscrito na exibição.
  - ``cover``: A viewport é dimensionada para preencher a tela do dispositivo.
    - É altamente recomendável usar as variáveis ​​inseridas na área segura para garantir que conteúdo importante não fique fora da exibição.

### [Outros ``<meta name="">``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names)
