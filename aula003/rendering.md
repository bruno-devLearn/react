# Rendering

Rendering em React é o processo de transformar seus componentes em elementos visuais na tela. Sempre que o `state` ou `props` mudam, o React "renderiza" novamente o componente para refletir as mudanças.

```jsx
function App() {
    return <h1>Hello, world!</h1>;
}
```

Esse exemplo acima é uma renderização simples de um componente funcional.

---

## Events

Em React, eventos são a forma de reagir a ações do usuário, como cliques, digitação, envio de formulários, entre outros.

---

### Diferenças entre eventos no React e no HTML/JS tradicional:

| JavaScript tradicional      | React                   |
| --------------------------- | ----------------------- |
| `onclick="func()"`          | `onClick={func}`        |
| Nomes minúsculos            | `camelCase`             |
| `addEventListener` manual   | Declarado direto no JSX |
| Objeto `Event` do navegador | `SyntheticEvent`        |

---

### O que é `SyntheticEvent`?

É o sistema de eventos do React. Ele encapsula o `Event` do navegador para garantir que o comportamento seja consistente em todos os navegadores.

Você ainda pode usar:

-   `e.target`
-   `e.preventDefault()`
-   `e.stopPropagation()`
-   `e.type`, `e.key`, `e.clientX`, etc.

---

### Eventos de clique (`onClick`)

Usado para capturar cliques em elementos como botões, divs, imagens...

```jsx
function ExemploClick() {
    function handleClick() {
        console.log("Clicado");
    }

    return <button onClick={handleClick}>Clique aqui</button>;
}
```

#### Explicação:

-   `onClick={handleClick}` → Passa uma função (sem `()`)
-   Se usar `onClick={handleClick()}` → a função será chamada imediatamente, não ao clicar

---

### Eventos de formulário (`onSubmit`, `onChange`, `onInput`, `onFocus`, `onBlur`)

```jsx
function Formulario() {
    const [texto, setTexto] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // Evita recarregar a página
        console.log("Enviado:", texto);
    }

    function handleChange(e) {
        setTexto(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={texto} onChange={handleChange} />
            <button type="submit">Enviar</button>
        </form>
    );
}
```

#### Explicação:

-   `onSubmit`: usado no `<form>`, acionado ao apertar "Enter" ou clicar no `type="submit"`
-   `onChange`: dispara sempre que o valor do input muda
-   `e.target.value`: contém o texto digitado

---

### Eventos de teclado (`onKeyDown`, `onKeyUp`)

```jsx
function Teclado() {
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            console.log("Você apertou Enter");
        }
    }

    return <input onKeyDown={handleKeyDown} />;
}
```

#### Explicação:

-   `onKeyDown`: dispara quando a tecla é pressionada
-   `onKeyUp`: dispara quando a tecla é solta
-   `e.key`: indica qual tecla foi pressionada (ex: `"Enter"`, `"a"`)

---

### `preventDefault()` e `stopPropagation()`

```jsx
function LinkBloqueado() {
    function handleClick(e) {
        e.preventDefault(); // Impede o link de funcionar
        e.stopPropagation(); // Impede que o clique "suba"
        console.log("Link bloqueado");
    }

    return (
        <a href="https://exemplo.com" onClick={handleClick}>
            Clique
        </a>
    );
}
```

#### Explicação:

-   `preventDefault()`: evita o comportamento padrão do navegador (ex: enviar formulário, seguir link)
-   `stopPropagation()`: impede o evento de continuar subindo na hierarquia (efeito "bolha")

---

### `onClickCapture` vs `onClick`

```jsx
<div
    onClickCapture={() => console.log("Pai - Capture")}
    onClick={() => console.log("Pai - Bubble")}
>
    <button
        onClickCapture={() => console.log("Filho - Capture")}
        onClick={() => console.log("Filho - Bubble")}
    >
        Clique
    </button>
</div>
```

#### Explicação:

-   Fase de captura (`onClickCapture`): evento vai do elemento raiz para o mais interno
-   Fase de bolha (`onClick`): evento sobe do elemento clicado para o topo

---

### Passando parâmetros no evento

```jsx
function App() {
    function handleClick(nome) {
        console.log(`Oi, ${nome}`);
    }

    return <button onClick={() => handleClick("Bruno")}>Dizer oi</button>;
}
```

#### Explicação:

-   Você precisa usar arrow function para passar argumentos
-   Sem a arrow, a função executaria na hora da renderização

---

### Boas práticas

-   Sempre use `e.preventDefault()` em formulários para evitar reload
-   Não declare funções direto no JSX em componentes grandes
-   Nomeie bem os handlers: `handleClick`, `handleSubmit`, etc
-   Evite misturar lógica complexa dentro do JSX → mova para funções

---

### Lista dos principais eventos

#### Mouse:

-   `onClick`, `onDoubleClick`, `onContextMenu`
-   `onMouseEnter`, `onMouseLeave`, `onMouseMove`
-   `onMouseDown`, `onMouseUp`

#### Teclado:

-   `onKeyDown`, `onKeyUp`, `onKeyPress` (descontinuado)

#### Formulário:

-   `onChange`, `onSubmit`, `onFocus`, `onBlur`, `onInput`

#### Área de transferência:

-   `onCopy`, `onPaste`, `onCut`

#### Drag and Drop:

-   `onDrag`, `onDragStart`, `onDragOver`, `onDrop`

---

### Exemplo final completo

```jsx
import { useState } from "react";

function App() {
    const [nome, setNome] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Olá, ${nome}!`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onKeyDown={(e) =>
                    e.key === "Enter" && console.log("Enter pressionado")
                }
            />
            <button type="submit">Enviar</button>
        </form>
    );
}
```

---

Eventos são a base da interatividade. Entender bem como eles funcionam no React te permite criar interfaces ricas e controladas com precisão.

## List and Keys

Em React, quando você renderiza uma lista com `.map()`, cada item precisa de uma `key` única. Isso ajuda o React a identificar o que mudou, foi adicionado ou removido, melhorando a performance.

### Exemplo básico:

```jsx
const frutas = ["maçã", "banana", "laranja"];

function ListaDeFrutas() {
    return (
        <ul>
            {frutas.map((fruta, index) => (
                <li key={index}>{fruta}</li>
            ))}
        </ul>
    );
}
```

> Usar o `index` como key só é aceitável se a ordem da lista não mudar e os dados forem estáticos.

### Exemplo melhor (com ID):

```jsx
const usuarios = [
    { id: 1, nome: "Bruno" },
    { id: 2, nome: "Lucas" },
    { id: 3, nome: "Joana" },
];

function ListaDeUsuarios() {
    return (
        <ul>
            {usuarios.map((usuario) => (
                <li key={usuario.id}>{usuario.nome}</li>
            ))}
        </ul>
    );
}
```

### Regras sobre keys:

-   Devem ser únicas entre os irmãos da mesma lista.
-   Devem ser estáveis (não mudar a cada render).
-   Não são passadas como prop para o componente.

### Exemplo com componente filho:

```jsx
function Usuario({ nome }) {
    return <li>{nome}</li>;
}

function Lista() {
    const usuarios = [
        { id: "u1", nome: "Maria" },
        { id: "u2", nome: "Pedro" },
    ];

    return (
        <ul>
            {usuarios.map((user) => (
                <Usuario key={user.id} nome={user.nome} />
            ))}
        </ul>
    );
}
```

## Refs

Em React, `refs` (abreviação de _references_) são usadas para acessar diretamente elementos DOM ou valores persistentes entre renderizações sem causar re-render.

### Quando usar `ref`

-   Acessar um elemento DOM (ex: focar um input)
-   Guardar valores mutáveis sem re-renderizar (como um `timer`)
-   Integrar com bibliotecas de terceiros (como jQuery ou Canvas)

---

### Criando uma `ref`

```jsx
import { useRef } from "react";

function MeuComponente() {
    const inputRef = useRef(null); // valor inicial é null

    const focarInput = () => {
        inputRef.current.focus(); // acessa diretamente o DOM
    };

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focarInput}>Focar</button>
        </>
    );
}
```

---

### `.current`

O valor da `ref` fica em `ref.current`. Inicialmente, você define com `useRef(valorInicial)`, e pode ler ou alterar `ref.current` depois.

```jsx
const contadorRef = useRef(0);

function incrementar() {
    contadorRef.current += 1;
    console.log(contadorRef.current); // muda o valor, mas não re-renderiza
}
```

---

### `ref` com componentes de classe (menos comum hoje)

```jsx
class MeuInput extends React.Component {
    constructor(props) {
        super(props);
        this.meuInputRef = React.createRef();
    }

    componentDidMount() {
        this.meuInputRef.current.focus();
    }

    render() {
        return <input ref={this.meuInputRef} />;
    }
}
```

---

### Dica: `ref` não causa re-render

Se você atualizar `ref.current`, o componente **não** re-renderiza. Isso é útil para armazenar coisas como:

-   estados temporários
-   referências a timers
-   valores anteriores

```jsx
const prevValue = useRef();
useEffect(() => {
    prevValue.current = valorAtual;
}, [valorAtual]);
```

---

### Quando evitar `ref`

Evite usar `ref` para ler/modificar DOM diretamente quando for possível resolver com estado (`useState`) e props. Só use `ref` quando realmente precisar fugir do ciclo de re-render do React.

## Lifecycle

Em React moderno (com function components), o ciclo de vida é controlado pelo hook `useEffect`. Ele substitui os métodos antigos usados em class components, como `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`.

---

### 🔁 Ciclo de vida com `useEffect`

A estrutura geral é:

```jsx
useEffect(() => {
    // código executado na montagem ou atualização

    return () => {
        // código executado na desmontagem
    };
}, [dependências]);
```

---

### 🧱 1. Montagem (Mount)

Executa uma vez só, quando o componente aparece na tela.

```jsx
useEffect(() => {
    console.log("Componente montado");
}, []);
```

---

### 🔄 2. Atualização (Update)

Executa sempre que o valor passado no array mudar.

```jsx
useEffect(() => {
    console.log("Variável mudou");
}, [variavel]);
```

---

### 🧹 3. Desmontagem (Unmount)

Executa a função de retorno **antes de o componente ser destruído**.

```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log("Executando...");
    }, 1000);

    return () => {
        clearInterval(timer);
        console.log("Componente desmontado");
    };
}, []);
```

---

### 🔁 Sem array de dependências

Executa **toda vez que o componente renderiza**.

```jsx
useEffect(() => {
    console.log("Renderizou");
});
```

---

### ⚠️ O que pode ir no array de dependências

-   Variáveis de estado (`useState`)
-   Props recebidas
-   Funções internas (se mudam entre renders)

❌ **Não coloque:**

-   `setState` (como `setCount`)
-   Objetos/arrays literais criados direto no JSX
-   `ref.current`

---

### ✅ Resumo

| Sintaxe                     | Quando executa o efeito        | Quando executa o retorno (`return`) |
| --------------------------- | ------------------------------ | ----------------------------------- |
| `useEffect(() => { })`      | Toda renderização              | Antes de próxima render e unmount   |
| `useEffect(() => { }, [])`  | Só na montagem                 | Só no unmount                       |
| `useEffect(() => { }, [x])` | Na montagem e quando `x` mudar | Antes de reexecutar e no unmount    |

## Render Props

Render props é um padrão antigo do React usado para compartilhar lógica entre componentes. A ideia é passar uma função como prop para o componente filho, que usa essa função para renderizar conteúdo.

Exemplo básico:

```jsx
function ComponentePai(props) {
    return props.render("dados");
}

<ComponentePai render={(dados) => <p>{dados}</p>} />;
```

Esse padrão foi comum antes dos Hooks (`useState`, `useEffect`, etc.), mas hoje praticamente caiu em desuso.
