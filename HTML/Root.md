# [``<html>`` A Raiz](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

- [``<html>`` A Raiz](#html-a-raiz)
  - [``xmlns``](#xmlns)
  - [``lang``](#lang)
    - [Subtag Língua](#subtag-língua)
    - [Subtag do Script](#subtag-do-script)
    - [Subtag da Região](#subtag-da-região)
  - [``<Body>`` O Corpo](#body-o-corpo)
    - [``onafterprint``](#onafterprint)
    - [``onbeforeprint``](#onbeforeprint)
    - [``onbeforeunload``](#onbeforeunload)
    - [``onblur``](#onblur)
    - [``onerror``](#onerror)
    - [``onfocus``](#onfocus)
    - [``onhashchange``](#onhashchange)
    - [``onlanguagechange``](#onlanguagechange)
    - [``onload``](#onload)
    - [``onmessage``](#onmessage)
    - [``onoffline``](#onoffline)
    - [``ononline``](#ononline)
    - [``onpopstate``](#onpopstate)
    - [``onresize``](#onresize)
    - [``onstorage``](#onstorage)
    - [``onunload``](#onunload)

## ``xmlns``

Define o [``XML``](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) do Documento. O valor padrão é ``http://www.w3.org/1999/xhtml``.

## [``lang``](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

Formato [RFC 5646: Tags para identificação de idiomas](https://datatracker.ietf.org/doc/html/rfc5646) (ou BCP 47).

> [!NOTE]
> O Padrão, caso não especificado é uma string vazia.

### [Subtag Língua](https://datatracker.ietf.org/doc/html/rfc5646#section-2.2.1)

- 2 caracteres no padrão [ISO 639-1](https://www.iso.org/standard/74575.html).
- Exemplo: "en" para inglês, "fr" para francês.

### [Subtag do Script](https://datatracker.ietf.org/doc/html/rfc5646#section-2.2.3)

- Opcional, representa a escrita usada.
- 4 caracteres de acordo com o padrão [ISO 15924](https://www.iso.org/standard/81905.html)
- Exemplo: "sr-Latn" para Sérvio no alfabeto latino.

### [Subtag da Região](https://datatracker.ietf.org/doc/html/rfc5646#section-2.2.4)

- Opcional, representa uma variação regional.
- 2 caracteres de acordo com o padrão [ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html)
- Exemplo: "sr-Latn-RS" representa Servio ('sr') escrito em Latin ('Latn') usado na Servia ('RS')

## [``<Body>`` O Corpo](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body#)

### ``onafterprint``

Função a ser chamada depois que o usuário printar o documento.

### ``onbeforeprint``

Função a ser chamada quando o usuário solicitar a impressão do documento.

### ``onbeforeunload``

Função a ser chamada quando o documento estiver para ser baixado.

### ``onblur``

Função a ser chamada quando o documento perde o foco.

### ``onerror``

Função a ser chamada quando o documento não carrega corretamente.

### ``onfocus``

Função a ser chamada quando o documento recebe foco.

### ``onhashchange``

Função a ser chamada quando a parte do identificador do fragmento (começando com o caractere hash (``#``)) do endereço atual do documento for alterada.

### ``onlanguagechange``

Função a ser chamada quando os idiomas preferidos forem alterados.

### ``onload``

Função a ser chamada quando o documento terminar de carregar.

### ``onmessage``

Função a ser chamada quando o documento recebe uma mensagem.

### ``onoffline``

Função a ser chamada quando a comunicação de rede falhou.

### ``ononline``

Função para chamar quando a comunicação de rede for restaurada.

### ``onpopstate``

Função a ser chamada quando o usuário navegou no histórico da sessão.

### ``onresize``

Função a ser chamada quando o documento for redimensionado.

### ``onstorage``

Função a ser chamada quando a área de armazenamento for alterada.

### ``onunload``

Função a ser chamada ao documento quando for embora.
