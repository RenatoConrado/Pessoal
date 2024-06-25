# Text Content

- [Text Content](#text-content)
  - [``<p>`` Parágrafo](#p-parágrafo)
  - [``<li>`` List Item](#li-list-item)
    - [``value=""``](#value)
  - [``<ol>`` Ordered List](#ol-ordered-list)
    - [``reversed``](#reversed)
    - [``start``](#start)
    - [``type``](#type)
  - [``<ul>`` Unordered List](#ul-unordered-list)
  - [``<menu>`` Menu](#menu-menu)

## [``<p>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) Parágrafo

O parágrafo é um elemento de bloco, e tem apenas [Atributos Globais](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

## [``<li>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) List Item

Usados em: [unordered list ``<ul>``](#ul-unordered-list), [ordered list ``<ol>``](#ol-ordered-list) e em [menu ``<menu>``](#menu-menu).

### ``value=""``

Indica a ordem em [ordered list ``<ol>``](#ol-ordered-list).

Aceita apenas numeros inteiros.

> [!NOTE]
> Os itens da lista não ordenada são exibidos com um marcador, o seu estilo é definido no `CSS` usando a propriedade `list-style-type`.
>
> `<ul>` e `<ol>` podem ser aninhados tão profundamente quanto desejado. E as listas aninhadas podem alternar entre `<ol>` e `<ul>` sem restrições.

## [``<ol>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) Ordered List

<ol type=I start=3>
  <li>Misture a farinha, o fermento, o açúcar e o sal.</li>
  <li>Em outra tigela, misture os ovos, o leite e o óleo.</li>
  <li>Mexa as duas misturas.</li>
  <li>Encha 3/4 da bandeja.</li>
  <li>Asse durante 20 minutos.</li>
</ol>

```html
<ol type=I start=3>
  <li>Misture a farinha, o fermento, o açúcar e o sal.</li>
  <li>Em outra tigela, misture os ovos, o leite e o óleo.</li>
  <li>Mexa as duas misturas.</li>
  <li>Encha 3/4 da bandeja.</li>
  <li>Asse durante 20 minutos.</li>
</ol>
```

### ``reversed``

boolean que especifica que os itens da lista estão na ordem inversa. Os itens serão numerados de maior para menor.

### ``start``

Um número inteiro para iniciar a contagem dos itens da lista.

Sempre um algarismo arábico (1, 2, 3, etc.)

### ``type``

- ``1`` Números (Padrão)

- ``a`` | ``A`` Letras Minúsculas | Maiúsculas

- ``i`` | ``I`` Algarismos Romano Minúsculos | Maiúsculos

O tipo especificado é usado para a lista inteira.

## [``<ul>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) Unordered List

- Ovo
- Leite
  - Iogurte
  - Queijo
    - Mussarela
    - Coalho
    - Prato
  - Requeijão
- Pão

```html
<ul>
    <li>Ovo</li>
    <li>Leite
    <ul>
        <li>Iogurte</li>
        <li>Queijo
        <ul>
            <li>Mussarela</li>
            <li>Coalho</li>
            <li>Prato</li>
        </ul>
        </li>
        <li>Requeijão</li>
    </ul>
    </li>
    <li>Pão</li>
</ul>
```

## [``<menu>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) Menu

É uma alternativa semântica ao ``<ul>``.

É tratado pelos navegadores (e exposto através da árvore de acessibilidade) como não diferente de ``<ul>``.

Representa uma lista não ordenada de itens.

![A simple example of menu](./assets/menu_example_simple.png)

```html
<menu style="display: flex; list-style: none; padding: 0; width: 400px">
    <li style="flex-grow: 0.1"><button style="width: 100%" onclick="copy()">Copy</button></li>
    <li style="flex-grow: 0.1"><button style="width: 100%" onclick="cut()">Cut</button></li>
    <li style="flex-grow: 0.1"><button style="width: 100%" onclick="paste()">Paste</button></li>
</menu>
```
