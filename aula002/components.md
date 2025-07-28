# 1- O que são Functional Components em React?

São funções que retornam código JSX. JSX é uma forma de escrever HTML dentro do JavaScript.

### 1.1 Exemplo simples:

```JSX
function Ola() {
    return <h1>Olá, mundo!</h1>;
}
```

Você usa esse componente assim:

```JSX
<Ola />
```

### 1.2 Como funciona?

-   Uma function escrita em letra maiuscula

-   Um componente funcional é uma função normal.

-   Ele pode receber dados (chamados de props) se precisar.

-   Ele retorna o que vai aparecer na tela (usando JSX).

### 1.3 Exemplo com dados (props):

```JSX
function Ola(props) {
    return <h1>Olá, {props.nome}!</h1>;
}

// Uso:
<Ola nome="Bruno" />
```

### 1.4 Por que usar?

Porque:

-   É mais fácil e direto de entender.

-   Você só escreve uma função e já pode usar.

-   React recomenda usar esse tipo de componente.

---

## 2- JSX

**JSX (JavaScript XML)** é uma sintaxe que parece HTML, mas é usada dentro do JavaScript.
Ela serve para **criar a interface (tela)** de um aplicativo React.

Mesmo parecendo HTML, **não é HTML.** É uma forma de escrever os elementos **em JavaScript**, mas de forma mais legível.

### Exemplo básico de JSX:

```JSX
const titulo = <h1>Olá, mundo!</h1>;
```

Esse `h1` parece HTML, mas é JSX.

### Sem JSX, seria assim:

```JS
const titulo = React.createElement('h1', null, 'Olá, mundo!');
```

Ou seja:  
JSX é **atalho** pra não precisar escrever esse monte de `createElement`. Regras importantes do `createElement`.

#### 1. Tem que ter só um elemento principal

Errado:

```JSX
return (
  <h1>Oi</h1>
  <p>Tudo bem?</p>
);
```

Certo:

```JSX
return (
  <div>
    <h1>Oi</h1>
    <p>Tudo bem?</p>
  </div>
);
```

JSX exige que você envolva tudo num único elemento (como div, section, etc).

#### 2. Usa `className` em vez de `class`

Errado:

```HTML
<h1 class="titulo">Olá</h1>
```

Certo:

```JSX
<h1 className="titulo">Olá</h1>
```

Em JSX, class é uma palavra reservada do JavaScript, então usa-se className.

#### 3. Atributos em camelCase

-   `onclick` → Errado

-   `tabindex` → Errado

-   `onClick` → Certo

-   `tabIndex` → Certo

Exemplo:

```JSX
<button onClick={minhaFuncao}>Clique aqui</button>
```

#### 4. Você pode colocar JavaScript dentro de `{}`

```JSX
const nome = "Bruno";

return <h1>Olá, {nome}!</h1>;
```

Tudo que você colocar dentro das chaves {} é interpretado como JavaScript.

#### 5. JSX sempre fecha as tags

Errado:

```JSX
<img src="logo.png">
```

Certo:

```JSX
<img src="logo.png" />
```

#### 6. Usando Fragmentos (`<> </>`)

JSX **só permite retornar um único elemento** por vez.

Se você quiser retornar **vários elementos sem criar uma `div` desnecessária,** usa um **Fragmento:**

```JSX
return (
<>
    <h1>Oi</h1>
    <p>Tudo bem?</p>
</>
);
```

Isso não adiciona nenhum elemento extra no HTML.

**Exemplo completo com Fragmento:**

```JSX
function Saudacao() {
    return (
        <>
            <h1>Bem-vindo</h1>
            <p>Aproveite a visita!</p>
        </>
    );
}
```

**Observações sobre Fragmentos**

-   `<> </>` é a forma curta de escrever `React.Fragment.`

-   Se você **precisar passar atributos** (tipo `key`), use a forma completa:

```JSX
import { Fragment } from 'react'

<Fragment key="123">
  <h1>Oi</h1>
</Fragment>
```

### JSX é convertido antes de rodar

O navegador **não entende JSX diretamente.**
O React transforma JSX em código JavaScript comum **antes de rodar.**

Por isso que você precisa de ferramentas como o **Vite, Webpack, Babel,** etc (mais pra frente você vai entender).

---

## 2- O que são props no React?

`props` **(abreviação de “properties”)** são **valores passados de um componente pai para um componente filho.**

Eles permitem **reutilizar componentes com dados diferentes,** mantendo a estrutura, mas mudando o conteúdo.

---

### Exemplo Básico:

```JSX
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}


function App() {
  return <Saudacao nome="Bruno" />;
}
```

`props.nome` dentro do componente `Saudacao` tem o valor `"Bruno"`.

---

### Desestruturação de props

Ao invés de usar `props.algumaCoisa`, você pode **desestruturar** os valores diretamente no parâmetro da função:

```JSX
  function Saudacao({ nome }) {
return <h1>Olá, {nome}!</h1>;
}
```

É a mesma coisa que:

```JSX
function Saudacao(props) {
  const { nome } = props;
  return <h1>Olá, {nome}!</h1>;
}
```

---

### Props com múltiplos valores

Você pode passar várias props ao mesmo tempo:

```JSX
function Pessoa({ nome, idade }) {
  return <p>{nome} tem {idade} anos.</p>;
}

<Pessoa nome="Bruno" idade={17} />
```

### ...props (Spread Operator)

O `...props` é útil quando você quer **replicar todas as props recebidas** em outro lugar sem escrever uma por uma.

**Exemplo:**

```JSX
function Botao(props) {
  return <button {...props}>{props.children}</button>;
}

<Botao onClick={funcao} className="btn">Clique</Botao>
```

Aqui:

-   `onClick` e `className` são repassados direto pro `<button>`

-   `props.children` pega o conteúdo entre as tags (`Clique`)

### props.children

Esse é um **valor especial** que representa **o conteúdo entre as tags** do componente:

```JSX
function Card(props) {
  return <div className="card">{props.children}</div>;
}

<Card>
  <h2>Título</h2>
  <p>Texto dentro do card.</p>
</Card>
```

Dentro do componente `Card`, `props.children` será:

```JSX
<>

  <h2>Título</h2>
  <p>Texto dentro do card.</p>
</>
```

### Prop padrão (default)

Você pode definir um valor **padrão** para uma prop caso ela não seja passada:

```JSX
function Mensagem({ texto = "Olá mundo" }) {
  return <p>{texto}</p>;
}
```

### Validação e tipos de props (opcional)

Com o pacote `prop-types`, você pode validar o tipo das props recebidas:

```JSX
import PropTypes from 'prop-types';

function MeuComponente({ idade }) {
  return <p>Idade: {idade}</p>;
}

MeuComponente.propTypes = {
  idade: PropTypes.number.isRequired,
};
```

## O que é state no React?

**State (estado)** é informação **mutável** que um componente **controla internamente**.  
Ao contrário das props (que vêm de fora), o **state é local** e pode ser alterado pelo próprio componente.

> Sempre que você atualiza o state, o componente re-renderiza automaticamente para refletir a mudança na interface.

---

### Quando usar state?

Use **state** quando:

-   Você precisa armazenar valores que **mudam ao longo do tempo**
-   E essa mudança deve **afetar o que aparece na tela**

### Exemplos:

-   O número de cliques em um botão
-   Um texto digitado em um input
-   Um item marcado como concluído
-   A aba selecionada
-   A lista de filmes filtrada

---

### 🛠️ Como criar e usar o state

Você usa o hook `useState`, que vem do React:

```jsx
import { useState } from "react";

function MeuComponente() {
    const [contador, setContador] = useState(0);
    // contador = valor atual do estado
    // setContador = função usada para atualizar o estado
    // useState(0) => valor inicial

    return (
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}>
                Clique aqui
            </button>
        </div>
    );
}
```

---

### Anatomia do useState

```jsx
const [estado, setEstado] = useState(valorInicial);
```

| Parte       | O que faz                                              |
| ----------- | ------------------------------------------------------ |
| `estado`    | Valor atual (lê o estado)                              |
| `setEstado` | Função que altera o estado e re-renderiza o componente |
| `useState`  | Hook do React que inicializa o estado                  |

---

### Regras do state

-   Só pode usar `useState` **dentro de componentes React**
-   **Não pode** usar `useState` dentro de loops, if, ou funções normais
-   **Sempre** use a função `setEstado()` para mudar o valor.  
    Nunca altere direto.

### ❌ Errado

```js
contador = contador + 1; // NÃO FAÇA ISSO
```

### ✅ Certo

```js
setContador(contador + 1);
```

---

### O state sempre sobrescreve (não mescla objetos)

Se você tiver um state com objeto:

```js
const [usuario, setUsuario] = useState({ nome: "", idade: 0 });
```

E quiser atualizar só o nome, tem que preservar o resto:

```js
setUsuario((prev) => ({
    ...prev,
    nome: "Bruno",
}));
```

---

### Atualização com função

Se a nova informação **depender do valor anterior**, use a forma de função:

```js
setContador((prev) => prev + 1);
```

---

### State pode ser de qualquer tipo

| Tipo   | Exemplo          |
| ------ | ---------------- |
| Número | `useState(0)`    |
| String | `useState('')`   |
| Array  | `useState([])`   |
| Objeto | `useState({})`   |
| Null   | `useState(null)` |

---

### Por que não atualizar direto?

Porque o React precisa **controlar o ciclo de vida do componente**.  
Se você mudar direto, o React **não percebe** e **não re-renderiza** a interface.

---

### Exemplo mais avançado: formulário

```jsx
const [form, setForm] = useState({
    nome: "",
    email: "",
});

function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
        ...prev,
        [name]: value,
    }));
}
```

---

### Resumo final

| Conceito         | Resumo                                   |
| ---------------- | ---------------------------------------- |
| O que é?         | Informação local que muda com o tempo    |
| Hook usado       | `useState()`                             |
| Atualiza como?   | Usando `setEstado(novoValor)`            |
| Causa re-render? | Sim                                      |
| Props x State    | Props vêm de fora, state é interno/local |

---

## Renderização Condicional em React

Renderização condicional em React significa exibir **diferentes elementos na tela dependendo de alguma condição** (tipo `if`, `true/false`, etc).

Basicamente:

-   Se algo for verdade → mostre X
-   Se não → mostre Y

React **não tem um `if` nativo no JSX**.  
Mas como JSX é só **JavaScript misturado com HTML**, você usa os próprios recursos do JS pra decidir o que renderizar.

---

### 1. Operador ternário (`condição ? A : B`)

Mais usado:

```jsx
{
    isPacked ? <del>{name}</del> : name;
}
```

-   Se `isPacked` for `true` → mostra `<del>name</del>`
-   Se não → mostra só o `name`

---

### 2. Operador lógico `&&` (renderiza só se for true)

```jsx
{
    isPacked && <del>{name}</del>;
}
```

-   Se `isPacked` for `true` → mostra `<del>name</del>`
-   Se for `false` → **não mostra nada**

---

### 3. If...else fora do JSX

Serve se tiver lógica mais complexa:

```jsx
let content;
if (isPacked) {
    content = <del>{name}</del>;
} else {
    content = name;
}

return <li>{content}</li>;
```

---

### 4. Função auxiliar

Se a lógica ficar pesada, cria uma função:

```jsx
function renderItem(name, isPacked) {
    if (isPacked) {
        return <del>{name}</del>;
    }
    return name;
}

return <li>{renderItem(name, isPacked)}</li>;
```

---

### E o `null`?

Você pode retornar `null` pra **não renderizar nada**, mas **não é boa prática** se fizer isso o tempo todo. Por quê?

-   Código vira bagunça (muitos `return null`)
-   Difícil de debugar
-   Pode causar renderizações desnecessárias
-   Melhor usar `&&` ou ternário que são mais previsíveis

---

## Composição

Composição é o conceito de **usar componentes dentro de outros componentes** para montar a interface.

Em vez de criar um componente gigante, você quebra em partes menores e usa elas juntas.

---

### Exemplo simples:

```jsx
function Titulo() {
    return <h1>Meu App</h1>;
}

function Rodape() {
    return <footer>© 2025</footer>;
}

function App() {
    return (
        <div>
            <Titulo />
            <p>Conteúdo principal aqui</p>
            <Rodape />
        </div>
    );
}
```

Aqui, `App` é o componente principal que **compõe** `Titulo` e `Rodape`.

---

### Composição com `props.children`

Um componente pode receber outros elementos dentro dele usando a prop especial `children`.

```jsx
function Card({ children }) {
    return <div className="card">{children}</div>;
}

function App() {
    return (
        <Card>
            <h2>Título do Card</h2>
            <p>Conteúdo do Card</p>
        </Card>
    );
}
```

O componente `Card` exibe o que for colocado dentro dele via `{children}`.

---

### Vantagens da composição

-   Facilita a organização e modularização do código.
-   Facilita a reutilização de componentes.
-   É mais flexível que herança tradicional.
-   Deixa o código mais fácil de manter e entender.

---

### Resumo

-   Composição = usar componentes dentro de outros componentes.
-   Usa `props.children` para conteúdo genérico dentro do componente.
-   React recomenda composição para organizar sua UI.
