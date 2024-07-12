# Semântica de texto incorporado

- [Semântica de texto incorporado](#semântica-de-texto-incorporado)
  - [``<a>`` Âncora](#a-âncora)
    - [download](#download)
    - [href](#href)
    - [hreflang](#hreflang)
    - [ping](#ping)
    - [noreferrerpolicy](#noreferrerpolicy)
    - [rel](#rel)
    - [target](#target)
    - [type](#type)
  - [``<br/>`` Quebra de Linha](#br-quebra-de-linha)
  - [``<cite>`` Citação](#cite-citação)
  - [``<bdo>`` Texto Bidirecional](#bdo-texto-bidirecional)
  - [``<bdi>`` Texto bidirecional Isolado](#bdi-texto-bidirecional-isolado)
  - [``<abbr>`` Abreviação](#abbr-abreviação)
    - [``title``](#title)
  - [``<b>`` Bring Attention](#b-bring-attention)
  - [``<time>`` O elemento (Data) Hora](#time-o-elemento-data-hora)
  - [``<data>`` Dados](#data-dados)
  - [``<dfn>`` Definição](#dfn-definição)

## [``<a>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) Âncora

Cria um Hiperlink para:

- páginas da web,
- arquivos,
- endereços de e-mail,
- locais na mesma página
- ou qualquer outro coisa URL.

Links que abrem em uma nova aba/janela via ``target="_blank"``, ou links que apontam para um arquivo de download devem indicar o que acontecerá quando o link for seguido.

Pessoas com problemas de visão subnormal, navegando com a ajuda da tecnologia de leitura de tela ou com preocupações cognitivas podem ficar confusas quando uma nova guia, janela ou aplicativo é aberto inesperadamente. Softwares de leitura de tela mais antigos podem nem anunciar o comportamento.

### download

Faz com que o navegador trate o URL como um download. Pode ser usado com ou sem um valor ``filename``:

- Sem um valor, o navegador irá sugerir um ``filename``/``extension``, gerado a partir de várias fontes:
  - O Header HTTP da [Disposição de conteúdo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition),
  - O segmento final do [caminho](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname) da URL,
  - O [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) (do header[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type), o início de um [``data:`` URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) ou [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type) para um [blob: URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static))
- ``filename``: definir um valor vai sugerir como nome do arquivo
  - Os caracteres ``/`` e ``\`` são convertidos em underline: ``_``
  - Os sistemas de arquivos podem proibir outros caracteres nos nomes de arquivos, portanto os navegadores ajustarão o nome sugerido, se necessário.

> [!NOTE]
> download funciona apenas para [URLs de mesma origem](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) ou esquemas ``blob:`` e ``data:``.
>
> Se o header de ``Content-Disposition`` tiver informações diferentes do atributo de ``download``, o comportamento resultante poderá ser diferente:
>
> - Se o header especificar ``filename``, ele terá prioridade sobre um ``filename`` especificado no atributo ``download``.
> - Se o header especificar uma disposição ``inline``, o Chrome e o Firefox priorizarão o atributo e o tratarão como um download. Versões antigas do Firefox (antes de 82) priorizam o header e exibem o conteúdo inline.

### href

A URL para a qual o hiperlink aponta. Os links não estão restritos a HTTP-based URLs — eles podem usar qualquer esquema de URL suportado pelos navegadores:

- Seções de uma página com fragmentos de documentos,
- Textos específicos com [fragmentos de texto](https://developer.mozilla.org/en-US/docs/Web/Text_fragments),
- Arquivos de mídia com fragmentos de mídia,
- Números de telefone com ``tel:`` URLs
- Endereços de e-mail com ``mailto:`` URLs
- Mensagens de texto SMS com ``sms:`` URLs
- Embora os navegadores da web possam não suportar outros esquemas de URL, os sites podem com [``registerProtocolHandler()``](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler)

### hreflang

Os valores permitidos são iguais aos do [atributo global ``lang``](Root.md#lang).

### ping

Uma lista de URLs spaço-separadas.

Quando o link for seguido, o navegador enviará solicitações ``POST`` com o body ``PING`` para as URLs. Normalmente para tracking.

### noreferrerpolicy

- ``no-referrer``: Não envia o Referenciador do Header HTTP.

- ``Origin``: O referenciador enviado será limitado à origem da página de referência: [scheme](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [host](https://developer.mozilla.org/en-US/docs/Glossary/Host), e [port](https://developer.mozilla.org/en-US/docs/Glossary/Port).

- ``no-referrer-when-downgrade``: O header Referer não será enviado para [origens](https://developer.mozilla.org/en-US/docs/Glossary/Origin) sem [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS) ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS)).

- ``origin-when-cross-origin``: O referenciador enviado para outras origens será limitado ao scheme, host e port. Navegações na mesma origem ainda incluirão o path.

- ``same-origin``: Um referenciador será enviado para a [mesma origem](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy), mas as solicitações de origem cruzada não conterão informações de referenciador.

- ``strict-origin``: Envia a origem quando o destino é pelo menos tão seguro quanto a página atual (HTTP(S)→HTTPS), mas não envia nenhum referenciador quando é menos seguro (HTTPS→HTTP).

- ``strict-origin-when-cross-origin``: (Padrão) Envia a URL completa para solicitações de mesma origem. Envie a origem quando o destino for pelo menos tão seguro quanto a página atual (HTTP(S)→HTTPS). Caso contrário, não envie nenhum referenciador.

- ``unsafe-URL``:O referenciador incluirá a origem e o caminho (mas não o fragmento, senha ou nome de usuário). Este valor não é seguro porque vaza origens e caminhos de recursos protegidos por TLS para origens inseguras.

### rel

O relacionamento do URL vinculado como tipos de link separados por espaço.

### target

- Onde exibir o URL vinculado, como o nome de um *contexto de navegação* (uma guia, janela ou ``<iframe>``)

  - ``_self``: Envia o form e abre na mesma janela. (Padrão)

  - ``_blanck``: Abre em uma nova aba. util quando está dentro de ``<iframe>`` ou similar.

  - ``_parent``: Abre na janela pai, caso exista

  - ``_top``: Abre em janela inteira, removendo todos os frames, caso exista.

  - ``<nome_do_frame>``: abre no frame especificado.

### type

Sugere o formato do URL vinculado com um MIME type. Nenhuma funcionalidade integrada.

## [``<br/>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br) Quebra de Linha

quebra de linha no texto (carriage-return). É útil para escrever um poema ou discurso, onde a divisão dos versos é significativa.

```html
<blockquote>
    <p>
        Vês?! Ninguém assistiu ao formidável<br />
        Enterro de tua última quimera.<br />
        Somente a Ingratidão – esta pantera –<br />
        Foi tua companheira inseparável!<br />
    </p>
    <p>
        Acostuma-te à lama que te espera!<br />
        O Homem que, nesta terra miserável,<br />
        Mora entre feras, sente inevitável<br />
        Necessidade de também ser fera<br />
    </p>
    <p>
        Toma um fósforo, acende teu cigarro!<br />
        O beijo, amigo, é a véspera do escarro.<br />
        A mão que afaga é a mesma que apedreja.<br />
    </p>
    <p>
        Se alguém causa ainda pena a tua chaga<br />
        Apedreja essa mão vil que te afaga.<br />
        Escarra nessa boca que te beija!<br />
    </p>
    <footer>-Augusto dos Anjos</footer>
</blockquote>
```

## [``<cite>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite) Citação

É usado para marcar o título de uma obra criativa citada. A referência pode ser abreviada de acordo com convenções apropriadas ao contexto relacionadas aos metadados de citação.

Um trabalho criativo que pode ser citado poderia ser, por exemplo, um dos seguintes:

- Um livro
- Um artigo de pesquisa
- Uma dissertação
- Um poema
- Uma partitura musical
- Uma canção
- Um roteiro de peça ou filme
- Um filme
- Um programa de televisão
- Um jogo
- Uma escultura
- Uma pintura
- Uma produção teatral
- Um jogo
- Uma ópera
- Um musical
- Uma exibição
- Um relato de caso jurídico
- Um programa de computador
- Um website
- Uma página web
- Uma postagem de blog ou comentário
- Uma postagem ou comentário no fórum
- Um tweet
- Uma postagem no Facebook
- Uma declaração escrita ou oral
- E assim por diante.

---

## [``<bdo>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo) Texto Bidirecional

- ``dir``: A direção na qual o texto deve ser renderizado no conteúdo deste elemento.

  - ``ltr``: esquerda para a direita.
  - ``rtl``: direita para a esquerda.

```html
<p>Este texto irá da esquerda para a direita.</p>
<p><bdo dir="rtl">Este texto irá da direita para a esquerda.</bdo></p>
```

## [``<bdi>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi) Texto bidirecional Isolado

Diz ao algoritmo bidirecional do browser para tratar o texto isoladamente do texto ao seu redor.

É particularmente útil quando um site insere algum texto dinamicamente e não conhece a direcionalidade do texto que está sendo inserido.

![A simple example of bidirectiona isolate element](./assets/bdi_example_simple.png)

```html
<h1>Campeões mundiais de wrestling</h1>

<ul>
    <li><span class="name">سما</span>: 3º lugar</li>
    <li><bdi class="name">الرجل القوي إيان</bdi>: 4º lugar</li>
</ul>
```

O "º" fica fora de lugar por que é um simbolo sem direção especifica, por isso ele é influenciado pelo texto que é da direita pra esqueda.

---

## [``<abbr>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr) Abreviação

Ao incluir uma abreviatura ou acrônimo, forneça uma expansão completa do termo em texto simples na primeira utilização, Isso informa ao usuário o que significa a abreviatura ou sigla.

### ``title``

Fornece uma expansão para a abreviatura quando uma expansão completa não estiver presente.

Isso fornece uma dica aos agentes do usuário sobre como anunciar/exibir o conteúdo e, ao mesmo tempo, informar a todos os usuários o que a abreviatura significa.

Se presente, o título deve conter esta descrição completa e nada mais.

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

## [``<b>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b) Bring Attention

Tem a semantica de chamar atenção para o elemento.

**Não use isso para deixa o texto em negrito**, use o ``CSS``: ``font-weight: bold``

Use para casos como:

- palavras-chave em um resumo,
- nomes de produtos em uma resenha
- ou outros trechos de texto cuja apresentação típica seria em negrito (mas sem incluir qualquer importância especial).

Não confunda com:

- ``<strong>``,
- ``<em>``
- ou ``<mark>``.
- Use-o somente quando nenhum dos outros acima servir.

Não marque títulos e cabeçalhos usando o elemento ``<b>``. Para isso, use as tags ``h1`` a ``h6``. Use ``CSS`` para exibir em negrito.

- É uma boa prática usar ``class`` em ``<b>`` para transmitir informações semânticas adicionais conforme necessário
  - por exemplo ``<b class="lead">`` para a primeira frase de um parágrafo.
  - Isso facilita o gerenciamento de vários casos de uso de ``<b>`` se suas necessidades estilísticas mudarem, sem a necessidade de alterar todos os seus usos no HTML.

- Historicamente, ``<b>`` foi criado para deixar o texto em negrito. As informações de estilo ficaram obsoletas desde o HTML4, portanto, o significado do elemento ``<b>`` foi alterado.

## [``<time>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) O elemento (Data) Hora

Representa um período específico de tempo

``datetime=``

Deve estar em um desses formatos:

- Uma hora em um relógio de 24 horas.
- Uma data precisa no [calendário gregoriano](https://en.wikipedia.org/wiki/Gregorian_calendar) (com informações opcionais de hora e fuso horário).
- [Uma duração de tempo válida](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string).

Pode incluir ``datetime`` para traduzir datas para formato "legível-por-máquina", permitindo melhores resultados de mecanismos de pesquisa ou recursos personalizados, como lembretes.

```html
<p>
    The Cure celebrará seu 40º aniversário em <time datetime="2018-07-07">7 de julho</time>no Hyde Park de Londres.
</p>

<p>
    O concerto começa às <time datetime="20:00">20:00</time> e poderá desfrutar da banda durante pelo menos <time datetime="PT2H30M">2h 30m</time>.
</p>
```

## [``<data>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data) Dados

**Não** é diretamente relacionado com [tempo](#time-o-elemento-data-hora)

```html
<p>New Products:</p>
<ul>
    <li><data value="398">Mini Ketchup</data></li>
    <li><data value="399">Jumbo Ketchup</data></li>
    <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

``Value``: linka o conteúdo a uma tradução "legível-por-máquina".

## [``<dfn>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn) Definição

indica o termo que vai ser definido.

Deve ser usado em uma declaração de definição completa, onde a definição completa do termo pode ser uma das seguintes:

- O parágrafo anterior (um bloco de texto, às vezes marcado por um elemento ``<p>``)
- par de: [``<dt>``](./Text.md#dt-description-term)/[``<dd>``](./Text.md#dd-description-details)
- A ``section`` anterior mais próxima

Especificando o termo que está sendo definido:

- Se tiver um atributo ``title``, o valor de ``title`` será o o termo sendo definido. O elemento ainda deve conter texto, mas esse texto pode ser uma abreviatura (talvez usando``<abbr>``) ou outra forma do termo.

- contém um único elemento filho e não possui nenhum conteúdo de texto próprio, e o elemento filho é um elemento ``<abbr>`` com um atributo ``title`` em si, então o valor exato de ``title`` de ``<abbr>`` é o termo sendo definido.

- Caso contrário, o conteúdo do texto é o termo que está sendo definido. Isso é mostrado no primeiro exemplo abaixo.

> [!NOTE]
> Se possuir um atributo ``title``, ele **deve** conter o termo que está sendo definido e nenhum outro texto.
