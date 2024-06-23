# [``<html>`` A Raiz](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

- [``<html>`` A Raiz](#html-a-raiz)
  - [``xmlns``](#xmlns)
  - [``lang``](#lang)
    - [Subtag Língua](#subtag-língua)
    - [Subtag do Script](#subtag-do-script)
    - [Subtag da Região](#subtag-da-região)

## ``xmlns``

Define o [``XML``](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) do Documento. O valor padrão é ``http://www.w3.org/1999/xhtml``.

## [``lang``](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

Formato [RFC 5646: Tags para identificação de idiomas](https://datatracker.ietf.org/doc/html/rfc5646) (ou BCP 47).

> [!NOTE] O Padrão caso não especificado é uma string vazia.

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
