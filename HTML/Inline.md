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
