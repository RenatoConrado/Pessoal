# [Formulário](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms)

- [Formulário](#formulário)
  - [``<Form>`` O Formulário](#form-o-formulário)
    - [Atributos](#atributos)
      - [``accept-charset``](#accept-charset)
      - [``autocapitalize``](#autocapitalize)
      - [``autocomplete``](#autocomplete)
      - [``name``](#name)
      - [``rel``](#rel)
    - [Atributos de Envio](#atributos-de-envio)
      - [``action``](#action)
      - [``method``](#method)
      - [``enctype``](#enctype)
      - [``novalidate``](#novalidate)
      - [``target``](#target)
    - [Exemplo](#exemplo)
  - [``<Input>`` A Entrada](#input-a-entrada)
    - [Tipos](#tipos)
      - [``button``](#button)
      - [``checkbox``](#checkbox)
      - [``color``](#color)
      - [``date``](#date)
      - [``datetime-local``](#datetime-local)
      - [``email``](#email)
      - [``file``](#file)
      - [``hidden``](#hidden)
      - [``image``](#image)
      - [``month``](#month)
      - [``number``](#number)
      - [``password``](#password)
      - [``radio``](#radio)
      - [``range``](#range)
      - [``reset``](#reset)
      - [``search``](#search)
      - [``submit``](#submit)
      - [``tel``](#tel)
      - [``text``](#text)
      - [``time``](#time)
      - [``url``](#url)
      - [``week``](#week)
    - [Atributos](#atributos-1)
    - [Non - Stardard](#non---stardard)
    - [Metodos](#metodos)
      - [``checkValidity()``](#checkvalidity)
      - [``reportValidity()``](#reportvalidity)
      - [``setCustomValidity('mensagem')``](#setcustomvaliditymensagem)
      - [``select()``](#select)
      - [``setRangeText('replacement')``](#setrangetextreplacement)
      - [``setSelectionRange(start, end)``](#setselectionrangestart-end)
      - [``showPicker()``](#showpicker)
      - [``stepDown()`` | ``stepUp()``](#stepdown--stepup)
  - [``Label`` O Rótulo](#label-o-rótulo)
  - [``Button`` O Botão](#button-o-botão)
    - [Atributos](#atributos-2)
      - [``name``](#name-1)
      - [``value``](#value)
      - [``autofocus``](#autofocus)
      - [``disabled``](#disabled)
      - [``form``](#form)
      - [``type``](#type)
      - [``formaction``](#formaction)
      - [``formectype``](#formectype)
      - [``formmethod``](#formmethod)
      - [``formtarget``](#formtarget)
    - [Notas](#notas)

## [``<Form>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) O Formulário

[Padrão HTML](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)

![A simple form example](./assets/form_example_simple.png)

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

### [Atributos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes)

#### ``accept-charset``

- [``Character encoding``](https://www.w3.org/International/articles/definitions-characters/) o valor padrão é o mesmo da página

    ```html
    <form accept-charset="utf-8, utf-16, ...">
    ```

#### ``autocapitalize``

#### [``autocomplete``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)

- O browser autocompleta os valores.
- [``Valores especificos``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).

    ```html
    <form action="/submit" method="post" autocomplete="on">
        <label for="username">Nome de Usuário:</label>
        <input type="text" id="username" name="username">

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password">

        <button type="submit">Login</button>
    </form>
    ```

#### ``name``

#### [``rel``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)

- mó preguiça. clica no titulo ai
  - ``noopener``: Indica que o navegador não deve permitir que a nova página acessada possa acessar o objeto window.opener.
  - ``noreferrer``: Indica que o navegador não deve enviar informações de referência ao URL especificado na ação do formulário.
  - ``nofollow``: Embora mais comumente associado a links, nofollow pode ser usado para indicar que a submissão do formulário não deve influenciar os rankings de busca.

### [Atributos de Envio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes_for_form_submission)

Controlam o comportamento do envio.

#### ``action``

URL que o ``method`` vai enviar.

#### ``method``

o [``Método HTTP``](https://developer.mozilla.org/en-US/docs/Web/HTTP)

- [``POST``](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST): envia os dados como um [``request body``](https://developer.mozilla.org/en-US/docs/Web/API/Request/body).

    ```html
    <form action="/login" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Entrar</button>
    </form>
    ```

- [``GET``](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET): Busca um item.

    ```html
    <form action="/busca" method="get">
        <label for="termo">Termo de busca:</label>
        <input type="text" id="termo" name="termo" required>
        
        <button type="submit">Buscar</button>
    </form>
    ```

- [``PUT``](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT): Solicita a modificação de um item.

    ```html
    <form action="/perfil/123" method="put">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value="João Silva">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="joaosilva@email.com">

        <button type="submit">Salvar</button>
    </form>
    ```

- [``DELETE``](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE): Solicita a exclusão de um item.

    ```html
    <form action="/itens/123" method="delete">
        <button type="submit">Excluir item</button>
    </form>
    ```

#### [``enctype``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype)

Define o [``MIME type``](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

- ``application/x-www-form-urlencoded``: Padrão.
  - Os dados são codificados como uma série de pares ``chave-valor``, separados por ``&``, onde os espaços são convertidos em ``+`` e caracteres especiais são codificados.
  - ``name=John+Doe&email=john.doe%40example.com``.

- ``multipart/form-data``: Envia arquivos ou Binários.
  - enviado em blocos separados, com delimitador único, e cada parte pode ter seu próprio ``Content-Type``.

    ```html
    <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name">
        <br>

        <label for="file">Arquivo:</label>
        <input type="file" id="file" name="file">
        <br>

        <input type="submit" value="Enviar">
    </form>
    ```

- ``text/plain``: envia em ``txt`` separado por linhas. somente para debug.

#### ``novalidate``

Desativa a validação automatica do navegador como ``required``.

#### [``target``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#target)

Define onde a ``resp`` do servidor deve ser exibida.

- ``_self``: Envia o form e abre na mesma janela. Valor padrão.

- ``_blanck``: Abre em uma nova aba. util quando está dentro de ``<iframe>`` ou similar.

- ``_parent``: Abre na janela pai, caso exista

- ``_top``: Abre em janela inteira, removendo todos os frames, caso exista.

- ``<nome_do_frame>``: abre no frame especificado.

### Exemplo

```html
<form method="get">
    <label>
        Name:
        <input name="submitted-name" autocomplete="name" />
    </label>
    <button>Save</button>
</form>

<form method="post">
    <label>
        Name:
        <input name="submitted-name" autocomplete="name" />
    </label>
    <button>Save</button>
</form>

<form method="post">
    <fieldset>
        <legend>Do you agree to the terms?</legend>
        <label><input type="radio" name="radio" value="yes" /> Yes</label>
        <label><input type="radio" name="radio" value="no" /> No</label>
    </fieldset>
</form>
```

![A complete form example](./assets/form_example_complete.png)

## [``<Input>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) A Entrada

<input type="text" id="name" name="name" required minlength="1" maxlength="9" size="11" placeholder="formulario"/>

```html
<input type="text" id="name" name="name" required minlength="1" maxlength="9" size="11" placeholder="formulario"/>
```

### [Tipos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type)

#### [``button``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)

```html
<input type="button" value="butão"/>
```

#### [``checkbox``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

```html
<input type="checkbox" checked/>
```

#### [``color``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)

```html
<input type="color" value=#ab3456/>
```

#### [``date``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)
  
- [``value="Date String Format"``](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings)

    ```html
    <input type="date" value="2001-09-11"/>
    ```

#### [``datetime-local``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local)

```html
<input type="datetime-local" value="2001-09-11T08:46"/>
```

#### [``email``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)

- [Validar email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation)

    ```html
    <input 
    type="email" pattern=".+exemplo\.com" 
    size="30" maxlength="64" 
    required
    placeholder="Insira o seu melhor email" />
    ```

#### [``file``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)

- [Receber Arquivos](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files)

- [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#accept)

    ```html
    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
    ```

#### [``hidden``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden)

```html
<input type="hidden"/>
```

#### [``image``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image)

- [``alt``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#alt)
- [formaction](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formaction)

    ```html
    <input type="image" src="../assets/ein.png" alt="cachorrinho fofo">
    ```

#### [``month``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month)

```html
<input type="month" value="2001-11" />
```

#### [``number``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)

```html
<input type="number" min="1" max= "9" value="11"/>
```

#### [``password``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)

```html
<input type="password" placeholder="senha" minlength="8" required/>
```

#### [``radio``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

```html
<form>
    <fieldset>
        <legend>Please select your preferred contact method:</legend>
        <div>
            <input type="radio" id="contactChoice1" name="contact" value="email" />
            <label for="contactChoice1">Email</label>

            <input type="radio" id="contactChoice2" name="contact" value="zapzap" />
            <label for="contactChoice2">ZapZap</label>

            <input type="radio" id="contactChoice3" name="contact" value="carta" />
            <label for="contactChoice3">Carta</label>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
    </fieldset>
</form>
```

#### [``range``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
  
```html
<input type="range" name="volume" min="1" max="11" />
```

#### [``reset``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset)

```html
<input type="text" size="25" placeholder="digite algo e aperte em Reset"/>
<input type="reset" value="Reset"/>
<input type="submit" value="Submit"/>
```

#### [``search``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)

```html
<input type="search" name="q" placeholder="procure algo">
<button>Search</button>
```

#### [``submit``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)

```html
<input type="submit" value="Mandar" />
```

#### [``tel``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)

```html
<input type="tel" placeholder="01-2345-6789" size=10 pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required />
```

#### [``text``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)

```html
<input type="text" placeholder="texto simples" size=9>
```

#### [``time``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time)

```html
<input type="time" min="07:00" max="18:00" value="13:40"/>
```

#### [``url``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)

```html
<input type="url" placeholder="https://clonarcartao.com" pattern="https://.*" size="30"/>
```

#### [``week``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week)

```html
<input type="week" min="2024-W18" max="2024-W26" required />
```

### [Atributos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)

- [``accept``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#accept) - Tipo: ``file``
- [``alt``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#alt) - Tipo: ``imagem``
- [``autocapitalize``](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize)
- [``autocomplete``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)

    ```html
    <form action="/submit" method="post">
        <label for="username">Nome de Usuário:</label>
        <input type="text" id="username" name="username" autocomplete="username">

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" autocomplete="current-password">

        <button type="submit">Login</button>
    </form>
    ```

- [``autofocus``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autofocus) -  auto foca no formulario
- [``capture``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#capture) - Tipo: ``file``
- ``checked``
- [``dirname``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/dirname)
- ``disabled``
- [``form``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#form)
- [``formaction``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formaction) - Tipo: ``Submit``
- ``height`` | ``width`` - Tipo: ``Image``
- [``id``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#id)
- [``inputmode``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#inputmode) - teclado virtual
- [``list``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#list) - sugestões
- ``min`` | ``max`` - Tipo: ``data e hora``
- ``maxlength`` | ``minlength`` - Tipo: ``texto``
- [``multiple``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#multiple) - tipo: ``email`` e ``file``
- ``name``
- ``pattern`` - padrão texto.
- ``placeholder``
- [``readonly``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
- [``required``](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required)
- ``size`` - tamanho em ``px``. da caixa do ``<form>``.
- ``src`` - Tipo: ``image``
- [``step``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step) - Tipo ``data e hora``, ``range`` e ``numero``
- ``tabindex``
- ``title``
- ``type``
- ``value``

### [Non - Stardard](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#non-standard_attributes)

Não estão incluso em todos os navegadores.

### [Metodos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#methods)

Providenciado por [``HTMLInputElement``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), representa os elementos de ``<input>`` em ``DOM``.
- [``HTMLElement``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
- [``Element``](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [``Node``](https://developer.mozilla.org/en-US/docs/Web/API/Node)
- [``EventTarget``](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

#### [``checkValidity()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidit)

RETURN: ``bool``; caso ``false``: [``invalidEvent``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event)

#### [``reportValidity()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity)

RETURN: ``bool``; caso ``false``: [``invalidEvent``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event); caso não seja cancelado: reporta ao usuário.

#### [``setCustomValidity('mensagem')``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity)

PARAM: ``string``; define ``validityErrorMessage``.

#### [``select()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)

#### [``setRangeText('replacement')``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setRangeText)

substitui no range de ``<input>`` ou ``<textarea>``

- ``"start"``
- ``"end"``

- ``selectMode``:
  - ``"select"``: seleciona texto inserido mais recente
  - ``"start"``: move texto selecionado para antes do texto inserido
  - ``"end"``: mode texto selecionado para depois do texto inserido
  - ``"preserve"``: preserva o valor selecionado, definido por padrão

#### [``setSelectionRange(start, end)``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange)

Seleciona o texto no ``range``.

- ``direction``
  - ``'forward'``
  - ``'backward'``
  - ``'none'``: definido por padrão.

#### [``showPicker()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker)

Mostra ao usuario o elemento selecionado: ``date``, ``color`` ou ``file``.

#### [``stepDown()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown) | [``stepUp()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp)

muito complicado lê a documentação ai.

## [``Label``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) O Rótulo

![A simple example of label](./assets/label_example_simple.png)

```html
<div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese" />
</div>

<div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas" />
</div>
```

não coloque elementos como ``<button>`` ou ``<a>``.

![A complete example of label](./assets/label_example_complete.png)

```html
<label for="tac">
    <input id="tac" type="checkbox" name="terms-and-conditions" />
    I agree to the Terms and Conditions
</label>
<p>
    <a href="terms-and-conditions.html">Read our Terms and Conditions</a>
</p>
```

## [``Button``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) O Botão

<button type="button">butão</button>

Envia o conteudo de ``form``

```html
<button type="button">butão</button>
```

Elementos que podem ser associados:

- [``<button>``](#button-o-botão)
- [``<input>``](#input-a-entrada)
- [``<meter>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
- [``<output>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
- [``<progress>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
- [``<select>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [``<textarea>``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

### [Atributos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

#### ``name``

#### ``value``

#### ``autofocus``

#### ``disabled``

#### [``form``](#form-o-formulário)

- Associa com o ``id`` de ``<form>`` do mesmo documento. Caso não exista associa com o ``<form>`` anterior

#### [``type``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type)

- ``submit``: Envia o conteudo de ``<form>``
- ``reset``: Funciona como ``<input type="reset">``
- ``button``: Não faz nada.

#### [``formaction``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formaction)

- ``type="submit"`` com o atributo ``formaction`` definido, mas sem um ``<form>`` associado, não faz nada. Você deve definir um proprietário de ``<form>``.

#### [``formectype``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formenctype)

- Caso seja do ``type="submit"``, especifica a formatação:
- ``application/x-www-form-urlencoded``: Definido por padrão.
- ``multipart/form-data``: Usado para enviar ``<input>`` com seu ``type="file"``.
- ``text/plain``: Especifico para debug, não deve ser usado.

#### [``formmethod``](#method)

- caso não seja ``type="button"``, especifica o [``métodoHTTP``](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).
- [``post``](https://www.rfc-editor.org/rfc/rfc9110#POST): Envia os dados de ``<form>``, informações confidenciais como login.
- [``get``](https://www.rfc-editor.org/rfc/rfc9110#GET): associado com ``<form action="">``
- ``dialog``: Indica que o botão fecha o ``<dialog>`` associado.

    ```html
    <form action="/submit" method="post">
        <button type="submit" formmethod="get">Enviar com GET</button>
        <button type="submit" formmethod="post">Enviar com POST</button>
    </form>
    ```

#### [``formtarget``](#target)

- Caso seja ``type="submit"`` substitui o valor de ``target``
- ``_self``: Envia o form e abre na mesma janela. Valor padrão
- ``_blanck``: Abre em uma nova aba.
- ``_parent``: Abre na janela pai, caso exista
- ``_top``: Abre em janela inteira, removendo todos os frames, caso exista.
- ``<nome_do_frame>``: abre no frame especificado.

    ```html
    <form action="/submit" method="post">
        <button type="submit" formtarget="_self">Enviar no Mesmo Frame</button>
        <button type="submit" formtarget="_blank">Enviar em Nova Aba</button>
        <button type="submit" formtarget="_parent">Enviar no Frame Pai</button>
        <button type="submit" formtarget="_top">Enviar na Janela Inteira</button>
    </form>
    ```

### Notas

Elementos ``<button>`` são muito mais fáceis de estilizar do que elementos ``<input>``. Você pode adicionar conteúdo HTML interno (como ``<i>``, ``<br>``, ou até ``<img>``), e usar pseudo-elementos ``::after`` e ``::before`` para renderizações complexas.

Se seus botões não forem para enviar dados de formulário para um servidor, certifique-se de definir seu atributo ``type="button"``. Caso contrário, eles tentarão enviar dados do formulário e carregar a resposta (inexistente), possivelmente destruindo o estado atual do documento.

Embora ``<button type="button">`` não tenha comportamento padrão, manipuladores de eventos podem ser programados para acionar comportamentos. Um botão ativado pode executar ações programáveis usando JavaScript, como remover um item de uma lista.
