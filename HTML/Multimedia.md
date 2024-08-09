# Imagem e Multimídia

- [Imagem e Multimídia](#imagem-e-multimídia)
  - [``<area>`` Área do Mapeamento](#area-área-do-mapeamento)
    - [``alt=``](#alt)
  - [``coords=``](#coords)
  - [``download``](#download)
  - [``href``](#href)
  - [``ping``](#ping)
  - [``referrerpolicy``](#referrerpolicy)
  - [``rel``](#rel)
  - [``shape``](#shape)
  - [``target``](#target)

## [``<area>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) Área do Mapeamento

Define uma área dentro de um mapa de imagem que tem áreas clicáveis ​​predefinidas.

Um mapa de imagem permite que áreas geométricas em uma imagem sejam associadas a links de hipertexto.

só é utilizado em  ``<map>``.

### ``alt=``

Alternativa em string para exibir em navegadores que não exibem imagens.

O texto deve ser formulado de modo que apresente ao usuário o mesmo tipo de escolha que a imagem ofereceria quando exibida sem o texto alternativo.

So é necessário somente se ``href=`` for usado.

## ``coords=``

Detalha as coordenadas do atributo [``shape``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area#shape) em tamanho, forma e posicionamento de uma ``<area>``.

**``rect=``**: os valores são x1,y1,x2,y2. O valor especifica as coordenadas do canto superior esquerdo e inferior direito do retângulo.

Por exemplo, em ``<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">`` as coordenadas são 0,0 e 253,27, indicando os cantos superior esquerdo e inferior direito do retângulo, respectivamente.

**``circle=``**: os valores são x,y,radio. O valor especifica as coordenadas do centro do círculo e do raio.

Por exemplo: ``<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">``

**``poly=``**: o valor é x1,y1,x2,y2,..,xn,yn. O valor especifica as coordenadas das bordas do polígono.

Se o primeiro e o último pares de coordenadas não forem iguais, o navegador adicionará o último par de coordenadas para fechar o polígono

Os valores são números de pixels CSS.

## ``download``

Se presente, indica que o autor pretende que o hyperlink seja usado para baixar um recurso.

Veja [``<a>``](./Inline.md#a-âncora) para uma descrição completa do atributo download.

## ``href``

O alvo do hiperlink para a área. Seu valor é uma URL válida. Este atributo pode ser omitido; se for, o elemento ``<area>`` não representa um hiperlink.

## ``ping``

Contém uma lista de URLs separadas por espaços para as quais, quando o hiperlink é seguido, solicitações ``POST`` com o corpo ``PING`` serão enviadas pelo navegador (em segundo plano). Normalmente usado para rastreamento.

## ``referrerpolicy``

Uma string indicando qual referenciador usar ao buscar o recurso:

- ``no-referrer``: O cabeçalho ``Referer`` não será enviado.
- ``no-referrer-when-downgrade``: O cabeçalho ``Referer`` não será enviado para origens sem ``TLS`` (HTTPS).
- ``origin``: O ``referer`` enviado será limitado à origem da página de referência: seu esquema, host e porta.
- ``origin-when-cross-origin``: O ``referer`` enviado para outras origens será limitado ao esquema, host e porta. As navegações na mesma origem ainda incluirão o caminho.
- ``same-origin``: Um ``referer`` será enviado para a mesma origem, mas as solicitações de origem cruzada não conterão informações de ``referer``.
- ``strict-origin``: Envie apenas a origem do documento como ``referer`` quando o nível de segurança do protocolo permanecer o mesmo (HTTPS→HTTPS), mas não o envie para um destino menos seguro (HTTPS→HTTP).
- ``strict-origin-when-cross-origin`` (padrão): envia uma URL completa ao executar uma solicitação de mesma origem, envia apenas a origem quando o nível de segurança do protocolo permanece o mesmo (HTTPS→HTTPS) e não envia nenhum cabeçalho para um destino menos seguro (HTTPS→HTTP).
- ``unsafe-url``: o ``referer`` incluirá a origem e o caminho (mas não o fragmento, a senha ou o nome de usuário). Este valor não é seguro, porque vaza origens e caminhos de recursos protegidos por TLS para origens inseguras.

## ``rel``

Para âncoras contendo o atributo ``href``

este atributo especifica o relacionamento do objeto de destino com o objeto de link. O valor é uma lista separada por espaços de tipos de link. Os valores e suas semânticas serão registrados por alguma autoridade que pode ter significado para o autor do documento. O relacionamento padrão, se nenhum outro for fornecido, é nulo.

Use este atributo somente se o atributo ``href`` estiver presente.

## ``shape``

O formato do ponto de acesso associado.

- As especificações para HTML definem os valores ``rect``, que define uma região retangular;

- ``circle`` define uma região circular;

- ``poly`` define um polígono;

- ``default`` indica a região inteira além de quaisquer formatos definidos.

## ``target``

Uma palavra-chave ou nome definido pelo autor do contexto de navegação para exibir o recurso vinculado. As seguintes palavras-chave têm significados especiais:

- ``_self`` (padrão): mostra o recurso no contexto de navegação atual.

- ``_blank``: mostra o recurso em um novo contexto de navegação sem nome.

- ``_parent``: mostra o recurso no contexto de navegação pai do atual, se a página atual estiver dentro de um quadro. Se não houver pai, age da mesma forma que ``_self``.

- ``_top``: mostra o recurso no contexto de navegação mais alto (o contexto de navegação que é um ancestral do atual e não tem pai). Se não houver pai, age da mesma forma que ``_self``.

Use este atributo somente se o atributo ``href`` estiver presente.
