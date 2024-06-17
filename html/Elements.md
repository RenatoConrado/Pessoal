# [HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

- [HyperText Markup Language](#hypertext-markup-language)
  - [Form input](#form-input)
    - [Tipos](#tipos)
    - [Atributos](#atributos)
      - [Non - Stardard](#non---stardard)
    - [Metodos](#metodos)

## [Form input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

<input type="text" id="name" name="name" required minlength="1" maxlength="9" size="11" placeholder="formulario"/>

```html
<input type="text" id="name" name="name" required minlength="1" maxlength="9" size="11" placeholder="formulario"/>
```

### [Tipos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type)

- [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button) <input type="button" value="butão"/>

    ```html
    <input type="button" value="butão"/>
    ```

- [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) <input type="checkbox" checked/>

    ```html
    <input type="checkbox" checked/>
    ```

- [color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) <input type="color" value=#ab3456/>

    ```html
    <input type="color" value=#ab3456/>
    ```

- [date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) <input type="date" value="2001-09-11"/>
  
    [``value="Date String Format"``](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings)

    ```html
    <input type="date" value="2001-09-11"/>
    ```

- [datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) <input type="datetime-local" value="2001-09-11T08:46"/>

    ```html
    <input type="datetime-local" value="2001-09-11T08:46"/>
    ```

- [email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email) <input type="email" pattern=".+example\.com" size="30" maxlength="64" placeholder="Insira o seu melhor email" required/>

    [Validar email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation)

    ```html
    <input 
    type="email" pattern=".+exemplo\.com" 
    size="30" maxlength="64" 
    required
    placeholder="Insira o seu melhor email" />
    ```

- [file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

    [Receber Arquivos](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files)

    [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#accept)

    ```html
    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
    ```

- [hidden](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden) <input type="hidden"/>

    ```html
    <input type="hidden"/>
    ```

- [image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image)

    <input type="image" src="../assets/ein.png" alt="Cachorrinho fofo" style="width: 30%; max-height: 100px">

  - [alt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#alt)
  - [formaction](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formaction)

    ```html
    <input type="image" src="../assets/ein.png" alt="cachorrinho fofo">
    ```

- [month](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month) <input type="month" value="2001-09" />

    ```html
    <input type="month" value="2001-11" />
    ```

- [number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) <input type="number" min="1" max= "9" value="11"/>

    ```html
    <input type="number" min="1" max= "9" value="11"/>
    ```

- [password](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password) <input type="password" placeholder="senha" minlength="8"/>

  - [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password#allowing_autocomplete)

    ```html
    <input type="password" placeholder="senha" minlength="8" required/>
    ```

- [radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

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

- [range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) <input type="range" name="volume" min="1" max="11" />
  
    ```html
    <input type="range" name="volume" min="1" max="11" />
    ```

- [reset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset) <input type="text" size="25" placeholder="digite algo e aperte em Reset"/> <input type="reset" value="Reset"/> <input type="submit" value="Submit"/>

    ```html
    <input type="text" size="25" placeholder="digite algo e aperte em Reset"/>
    <input type="reset" value="Reset"/>
    <input type="submit" value="Submit"/>
    ```

- [search](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search) <input type="search" name="q" placeholder="procure algo"> <button>Search</button>

    ```html
    <input type="search" name="q" placeholder="procure algo">
    <button>Search</button>
    ```

- [submit](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit) <input type="submit" value="Mandar" />

    ```html
    <input type="submit" value="Mandar" />
    ```

- [tel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel) <input type="tel" placeholder="01-2345-6789" size=10 pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required />

    ```html
    <input type="tel" placeholder="01-2345-6789" size=10 pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required />
    ```

- [text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) <input type="text" placeholder="texto simples" size=9>

    ```html
    <input type="text" placeholder="texto simples" size=9>
    ```

- [time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time) <input type="time" min="07:00" max="18:00" value="13:40"/>

    ```html
    <input type="time" min="07:00" max="18:00" value="13:40"/>
    ```

- [url](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url) <input type="url" placeholder="https://clonarcartao.com" pattern="https://.*" size="30"/>

    ```html
    <input type="url" placeholder="https://clonarcartao.com" pattern="https://.*" size="30"/>
    ```

- [week](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week) <input type="week" min="2024-W18" max="2024-W26" required />

    ```html
    <input type="week" min="2024-W18" max="2024-W26" required />
    ```

### [Atributos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)

- [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#accept) - Tipo: file
- [alt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#alt) - Tipo: imagem
- [autocapitalize](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize)
- [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
- [autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autofocus) -  auto foca no formulario
- [capture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#capture) - Tipo: file
- checked
- [dirname](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/dirname)
- disabled
- [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#form)
- [formaction](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formaction) - Tipo: Submit
- height | width - Tipo: Imagem
- [id](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#id)
- [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#inputmode) - teclado virtual
- [list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#list) - sugestões
- min | max - Tipo: data e hora
- maxlength | minlength - Tipo: texto
- [multiple](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#multiple) - tipo: email e file
- name
- pattern - padrão texto
- placeholder
- [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
- [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required)
- size - tamanho em px. da caixa do form.
- src - Tipo: imagem
- [step](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step) - Tipo data e hora, range e numero
- tabindex
- title
- type
- value

#### [Non - Stardard](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#non-standard_attributes)

Não estão incluso em todos os navegadores.

### [Metodos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#methods)

Providenciador por [``HTMLInputElement``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) que representa os elementos de ``<input>`` em DOM. [``HTMLElement``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), [``Element``](https://developer.mozilla.org/en-US/docs/Web/API/Element), [``Node``](https://developer.mozilla.org/en-US/docs/Web/API/Node), [``EventTarget``](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

- [``checkValidity()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidit) - RETURN: ``bool``; caso ``false``: [``invalidEvent``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event)
- [``reportValidity()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity) - RETURN: ``bool``; caso ``false``: [``invalidEvent``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event); caso não cancelado: reporta ao usuário.
- [``select()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
- [``setCustomValidity('mensagem')``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity) - PARAM: ``string``; define ``validityErrorMessage``.
- [``setRangeText('replacement')``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setRangeText) - substitui no range de ``<input>`` ou ``<textarea>``
  - ``start``, ``end``: ``string``
  - ``selectMode``:
    - ``"select"``: seleciona texto inserido mais recente
    - ``"start"``: move texto selecionado para antes do texto inserido
    - ``"end"``: mode texto selecionado para depois do texto inserido
    - ``"preserve"``: preserva o valor selecionado, definido por padrão
- [``setSelectionRange(start, end)``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange) - seleciona o texto no range
  - ``direction``: ``'forward'``; ``'backward'``; ``'none'``: definido por padrão.
- [``showPicker()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker) - mostra ao user o elemento selecionado: ``date``, ``color`` ou ``file``.
- [``stepDown()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown) | [``stepUp()``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp) - muito complicado lê a documentação ai.

