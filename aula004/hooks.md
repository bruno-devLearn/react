# Built-in React Hooks

Hooks permitem que você use diferentes funcionalidades do React em seus componentes. Você pode usar os Hooks embutidos ou combiná-los para construir os seus próprios. Esta página lista todos os Hooks embutidos no React.

## State Hooks

State permite que um componente “lembre” informações como entrada do usuário. Por exemplo, um componente de formulário pode usar o state para armazenar o valor da entrada, enquanto um componente de galeria de imagens pode usar o state para armazenar o índice da imagem selecionada.

Para adicionar state a um componente, use um destes Hooks:

-   `useState` declara uma variável de state que você pode atualizar diretamente.
-   `useReducer` declara uma variável de state com a lógica de atualização dentro de uma função reducer.

```jsx
function ImageGallery() {
    const [index, setIndex] = useState(0);
    // ...
}
```

## Context Hooks

Context permite que um componente receba informações de pais distantes sem passá-las como props. Por exemplo, o componente de nível superior do seu aplicativo pode passar o tema atual da UI para todos os componentes abaixo, não importa o quão profundo.

-   `useContext` lê e se inscreve em um context.

```jsx
function Button() {
    const theme = useContext(ThemeContext);
    // ...
}
```

## Ref Hooks

Refs permitem que um componente mantenha alguma informação que não é usada para renderização, como um nó do DOM ou uma ID de timeout. Diferente do state, atualizar uma ref não irá re-renderizar o seu componente. Refs são uma “saída de emergência” do paradigma React. Elas são úteis quando você precisa trabalhar com sistemas que não são React, como as APIs embutidas do navegador.

-   `useRef` declara uma ref. Você pode manter qualquer valor nela, mas geralmente é usado para manter um nó do DOM.
-   `useImperativeHandle` permite que você personalize a ref exposta pelo seu componente. Isto raramente é usado.

```jsx
function Form() {
    const inputRef = useRef(null);
    // ...
}
```

## Effect Hooks

Effects permitem que um componente se conecte e se sincronize com sistemas externos. Isso inclui lidar com rede, DOM do navegador, animações, widgets escritos usando uma biblioteca de UI diferente e outro código que não é React.

-   `useEffect` conecta um componente a um sistema externo.

```jsx
function ChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);
    // ...
}
```

Effects são uma “saída de emergência” do paradigma React. Não use Effects para orquestrar o fluxo de dados da sua aplicação. Se você não está interagindo com um sistema externo, você pode não precisar de um Effect.

Existem duas variações raramente usadas de useEffect com diferenças no tempo:

-   `useLayoutEffect` dispara antes do navegador redesenhar a tela. Você pode medir o layout aqui.
-   `useInsertionEffect` dispara antes do React fazer alterações no DOM. Bibliotecas podem inserir CSS dinâmico aqui.

## Performance Hooks

Uma forma comum de otimizar o desempenho de re-renderização é ignorar o trabalho desnecessário. Por exemplo, você pode dizer ao React para reutilizar um cálculo em cache ou para ignorar um re-render se os dados não mudaram desde a renderização anterior.

Para ignorar cálculos e re-renderizações desnecessárias, use um destes Hooks:

-   `useMemo` permite que você faça cache do resultado de um cálculo caro.
-   `useCallback` permite que você faça cache de uma definição de função antes de passá-la para um componente otimizado.

```jsx
function TodoList({ todos, tab, theme }) {
    const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
    // ...
}
```

Às vezes, você não pode ignorar o re-render porque a tela realmente precisa ser atualizada. Nesse caso, você pode melhorar o desempenho separando as atualizações de bloqueio que devem ser síncronas (como digitar em uma entrada) das atualizações não bloqueantes que não precisam bloquear a interface do usuário (como atualizar um gráfico).

Para priorizar a renderização, use um destes Hooks:

-   `useTransition` permite que você marque uma transição de state como não bloqueante e permita que outras atualizações a interrompam.
-   `useDeferredValue` permite que você adie a atualização de uma parte não crítica da UI e deixe outras partes atualizarem primeiro.

## Other Hooks

Esses Hooks são principalmente úteis para autores de bibliotecas e não são comumente usados no código da aplicação.

-   `useDebugValue` permite que você personalize o rótulo que o React DevTools exibe para seu Hook personalizado.
-   `useId` permite que um componente associe um ID exclusivo a si mesmo. Tipicamente usado com APIs de acessibilidade.
-   `useSyncExternalStore` permite que um componente se inscreva em um store externo.
-   `useActionState` permite que você gerencie o state de actions.

---

# useState

`useState` é o hook básico para gerenciar estado local em componentes funcionais React.

Ele retorna um array com dois elementos:

1. O valor atual do estado.
2. Uma função que atualiza esse valor e dispara a re-renderização do componente.

## Sintaxe básica

```
const [state, setState] = useState(valorInicial);
```

-   `valorInicial` pode ser um valor direto ou uma função que retorna o valor inicial (útil para cálculos pesados só na inicialização).
-   `state` é o valor atual (qualquer tipo: primitivo, objeto, array, etc).
-   `setState` é a função que atualiza o estado.

## Funcionamento

Ao chamar `setState(novoValor)`, o React agenda uma atualização do componente. Na próxima renderização, `state` terá o `novoValor`. Isso atualiza a interface.

## Atualização baseada no valor anterior

Quando o novo estado depende do estado anterior, use a versão com função:

```
setState(prevState => prevState + 1);
```

Isso evita problemas com estados desatualizados em atualizações assíncronas ou múltiplas chamadas rápidas.

## useState com objetos e arrays

Quando o estado é um objeto ou array, preserve os dados antigos e atualize só o que mudou (React substitui o estado antigo pelo novo):

```
/* Objeto */
setState(prevState => ({
  ...prevState,
  propriedadeAtualizada: novoValor
}));

/* Array */
setState(prevState => [...prevState, novoItem]);
```

## Lazy initialization

Se o cálculo do valor inicial for pesado, pode passar uma função para executar só na inicialização:

```
const [value, setValue] = useState(() => {
  // cálculo pesado
  return valorCalculado;
});
```

## Observações importantes

-   Atualizar o state é assíncrono, então não espere que o valor atualize imediatamente após chamar `setState`.
-   Chamadas múltiplas a `setState` no mesmo ciclo podem ser agrupadas (batching).
-   Pode usar vários hooks `useState` no mesmo componente para estados independentes.

---

# useEffect

`useEffect` permite que componentes funcionais realizem efeitos colaterais, como buscar dados, manipular DOM, configurar timers, assinar eventos, etc.

É o substituto dos métodos de ciclo de vida de componentes de classe (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

## Sintaxe básica

```js
useEffect(() => {
    // código do efeito
    return () => {
        // código para limpar efeito (opcional)
    };
}, [dependencias]);
```

-   A função passada ao `useEffect` roda **depois** da renderização do componente.
-   O array de dependências indica quando o efeito deve ser reexecutado.
-   Se o array de dependências estiver vazio (`[]`), o efeito roda só uma vez após a montagem.
-   Se não passar o array, o efeito roda após **toda** renderização.

## Exemplos

### Efeito executado uma vez (componentDidMount)

```js
useEffect(() => {
    console.log("Componente montado");

    return () => {
        console.log("Componente será desmontado");
    };
}, []);
```

### Efeito que depende de variáveis

```js
useEffect(() => {
    console.log("Variável x mudou:", x);
}, [x]);
```

### Efeito para buscar dados

```js
useEffect(() => {
    fetch("https://api.exemplo.com/dados")
        .then((res) => res.json())
        .then((data) => setData(data));

    return () => {
        // opcional: limpar assinaturas, abortar fetch, etc
    };
}, []);
```

## Importante sobre o cleanup

A função retornada pelo `useEffect` é chamada para limpar efeitos antes do próximo efeito ou na desmontagem do componente, evitando vazamentos e bugs.

## Quando evitar usar useEffect

-   Não use para atualizar state que pode ser calculado durante a renderização.
-   Não use para orquestrar dados que já estão no React (prefira props e state).

## Variações avançadas

-   `useLayoutEffect`: dispara **antes** do navegador pintar a tela, útil para medir layout e manipular DOM de forma síncrona.
-   `useInsertionEffect`: usado por bibliotecas para inserir estilos CSS antes da renderização (raro no código app).

---

# useRef

`useRef` permite criar uma referência mutável que persiste entre renderizações sem causar re-renderização quando seu valor muda.

É usado para acessar diretamente elementos DOM, guardar valores mutáveis (como timers, IDs) que não precisam disparar re-render.

## Sintaxe básica

```js
const refContainer = useRef(valorInicial);
```

-   `refContainer` é um objeto com a propriedade `.current`.
-   `.current` pode ser alterado livremente e mantém seu valor entre renders.

## Exemplos de uso

### Referenciar um elemento DOM

```js
function MeuInput() {
    const inputRef = useRef(null);

    function focarInput() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focarInput}>Focar input</button>
        </>
    );
}
```

### Guardar valores mutáveis sem re-renderizar

```js
function Contador() {
    const contador = useRef(0);

    function incrementar() {
        contador.current++;
        console.log(contador.current);
    }

    return <button onClick={incrementar}>Incrementar</button>;
}
```

Aqui, `contador.current` pode mudar sem disparar renderizações.

## Diferença entre `useRef` e `useState`

-   `useState` guarda estado que quando atualizado causa re-render.
-   `useRef` guarda dados mutáveis que não causam re-render quando mudam.

## Casos avançados

-   `useRef` pode ser usado para guardar referências a timers, websockets, intervalos, IDs de requisição, etc.
-   Pode ser usado para armazenar valores anteriores para comparar no `useEffect`.

## Observações

-   Atualizar `.current` não dispara re-render.
-   Útil para manipular APIs imperativas ou preservar valores entre renders.

---

# useContext

`useContext` permite que um componente funcional acesse o valor de um Contexto React, facilitando o compartilhamento de dados entre componentes sem precisar passar props manualmente em cada nível.

## Contexto básico

Um Contexto é criado com:

```js
const MeuContexto = React.createContext(valorInicial);
```

Ele contém um **Provider** que disponibiliza o valor para a árvore de componentes, e consumidores que acessam esse valor.

## Sintaxe do `useContext`

```js
const valor = useContext(MeuContexto);
```

-   Recebe o contexto criado pelo `React.createContext`.
-   Retorna o valor atual do contexto para o componente que chama.
-   O componente vai re-renderizar sempre que o valor do contexto mudar.

## Exemplo completo

```js
// Cria o contexto
const TemaContext = React.createContext("claro");

function App() {
    return (
        <TemaContext.Provider value="escuro">
            <Painel />
        </TemaContext.Provider>
    );
}

function Painel() {
    const tema = useContext(TemaContext);

    return (
        <div style={{ background: tema === "escuro" ? "#333" : "#fff" }}>
            Tema atual: {tema}
        </div>
    );
}
```

## Observações importantes

-   `useContext` só funciona dentro de componentes funcionais.
-   Atualizações no Provider causam re-render em todos os consumidores.
-   Evite passar valores mutáveis diretamente no Provider sem memoização, pois pode causar re-renderizações desnecessárias.

## Quando usar

-   Compartilhar tema, idioma, dados do usuário, preferências ou estados globais simples.
-   Evitar "prop drilling" (passar props demais em vários níveis).

---

# useReducer

`useReducer` é uma alternativa ao `useState` para gerenciar estados mais complexos, especialmente quando a lógica de atualização envolve múltiplos subvalores ou depende do estado anterior.

## Sintaxe básica

```js
const [state, dispatch] = useReducer(reducer, estadoInicial, init?);
```

-   `reducer` é uma função `(state, action) => novoState` que define como o estado é atualizado.
-   `estadoInicial` é o estado inicial.
-   `init` (opcional) é uma função para inicialização preguiçosa do estado.
-   `state` é o estado atual.
-   `dispatch` é a função para enviar ações que acionam o reducer.

## Exemplo simples

```js
function reducer(state, action) {
    switch (action.type) {
        case "incrementar":
            return { count: state.count + 1 };
        case "decrementar":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Contador() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
            <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
        </>
    );
}
```

## Porque usar useReducer

-   Melhor organização da lógica de estado complexa.
-   Atualizações previsíveis baseadas em ações.
-   Útil para estados compostos, múltiplas variáveis relacionadas.
-   Facilita testes da lógica do reducer isoladamente.

## Inicialização preguiçosa

Se o estado inicial precisa ser calculado, use o terceiro argumento:

```js
function init(arg) {
    return { count: arg };
}

const [state, dispatch] = useReducer(reducer, 0, init);
```

## Diferença entre useReducer e useState

-   `useState` é simples e direto, ideal para estados simples.
-   `useReducer` é mais adequado para estados complexos e múltiplas transições.

# useCallback

`useCallback` memoiza uma função, retornando a mesma instância da função enquanto as dependências não mudarem. Isso ajuda a evitar re-renderizações desnecessárias em componentes filhos que dependem dessa função.

## Sintaxe básica

```js
const memoizedCallback = useCallback(() => {
    // lógica da função
}, [dependencias]);
```

-   A função passada só é recriada se alguma dependência mudar.
-   Útil para otimizar performance em componentes que recebem callbacks via props.

## Exemplo

```js
function MeuComponente({ onClick }) {
    const handleClick = useCallback(() => {
        console.log("Clicou!");
    }, []);

    return <button onClick={handleClick}>Clique</button>;
}
```

## Quando usar

-   Passar funções para componentes filhos que usam `React.memo` para evitar re-render desnecessário.
-   Evitar recriações de funções em callbacks que são dependências de outros hooks como `useEffect`.

## Cuidados

-   Não use indiscriminadamente, pois a memoização tem custo.
-   Se as dependências mudam frequentemente, `useCallback` pode piorar a performance.

---

# useMemo

`useMemo` memoriza o resultado de uma função “cara” para evitar cálculos desnecessários em re-renderizações.

## Sintaxe básica

```js
const valorMemorizado = useMemo(() => {
    // cálculo pesado
    return resultado;
}, [dependencias]);
```

-   A função só é executada quando alguma dependência muda.
-   Retorna o valor memorizado entre renders.

## Exemplo

```js
function ListaFiltrada({ itens, filtro }) {
    const itensFiltrados = useMemo(() => {
        return itens.filter((item) => item.includes(filtro));
    }, [itens, filtro]);

    return (
        <ul>
            {itensFiltrados.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}
```

## Quando usar

-   Evitar recalcular valores pesados toda renderização.
-   Evitar re-render desnecessário em componentes filhos que recebem props derivadas.

## Diferença entre useMemo e useCallback

-   `useMemo` memorizam **valores** retornados por funções.
-   `useCallback` memoriza **funções**.

# Custom Hooks

Custom Hooks são funções JavaScript que começam com `use` e permitem reutilizar lógica de hooks entre componentes. Eles **não são mágicos**, são apenas funções que chamam outros hooks (como `useState`, `useEffect`, etc.) internamente.

## Por que usar

-   Evitar duplicação de código.
-   Reutilizar lógica complexa em vários componentes.
-   Separar responsabilidades e deixar componentes mais limpos.

## Sintaxe básica

```js
function useMeuHook(param) {
    const [state, setState] = useState(param);

    useEffect(() => {
        // efeito baseado no state
    }, [state]);

    function atualizar(valor) {
        setState(valor);
    }

    return [state, atualizar];
}
```

## Exemplo de uso

```js
// Custom Hook
function useContador(inicial = 0) {
    const [count, setCount] = useState(inicial);

    const incrementar = () => setCount((c) => c + 1);
    const decrementar = () => setCount((c) => c - 1);

    return { count, incrementar, decrementar };
}

// Componente usando o Custom Hook
function Contador() {
    const { count, incrementar, decrementar } = useContador(5);

    return (
        <>
            <p>Contador: {count}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </>
    );
}
```

## Regras importantes

1. **Sempre começar com `use`** — o React reconhece que é um hook.
2. **Só chamar hooks React dentro de custom hooks ou componentes funcionais.**
3. **Evitar chamadas condicionais de hooks.** Sempre chame no mesmo nível do componente ou hook.
4. Custom hooks podem chamar outros custom hooks.

## Benefícios

-   Código mais limpo e modular.
-   Facilita testes unitários da lógica sem precisar renderizar o componente.
-   Combina perfeitamente com `useState`, `useEffect`, `useRef`, `useReducer`, etc.

---

# Boas Práticas

Usar hooks corretamente ajuda a manter o código limpo, performático e fácil de manter.

---

## 1. Sempre siga as Regras dos Hooks

-   **Chame hooks apenas no topo do componente ou custom hook.**  
    Não chame dentro de loops, condições ou funções aninhadas.
-   **Chame hooks apenas de componentes funcionais ou custom hooks.**  
    Nunca em funções normais de utilidade.

```js
// ✅ Correto
function MeuComponente() {
    const [count, setCount] = useState(0);
}

// ❌ Incorreto
function funcaoNormal() {
    const [count, setCount] = useState(0); // erro!
}
```

---

## 2. Memoize funções e valores quando necessário

-   Use `useCallback` para funções passadas a componentes filhos que dependem de props ou memoização.
-   Use `useMemo` para cálculos pesados que não precisam ser recalculados a cada render.

---

## 3. Evite efeitos desnecessários

-   Não use `useEffect` para atualizar state que pode ser calculado diretamente na renderização.
-   Sempre especifique dependências corretamente para evitar loops infinitos.

```js
useEffect(() => {
    // código
}, [dependencias]); // inclua todas as dependências usadas dentro do efeito
```

---

## 4. Separe lógica em custom hooks

-   Extraia lógica reutilizável em **custom hooks** para limpar componentes.
-   Evite duplicação de código e facilite testes.

---

## 5. Mantenha estado simples e previsível

-   Prefira múltiplos `useState` para estados independentes em vez de um objeto gigante.
-   Para estados complexos, use `useReducer` para centralizar a lógica de atualização.

---

## 6. Limpeza de efeitos

-   Sempre limpe efeitos quando necessário para evitar vazamentos e bugs.

```js
useEffect(() => {
    const timer = setInterval(() => console.log("tic"), 1000);

    return () => clearInterval(timer);
}, []);
```

---

## 7. Performance

-   Evite passar funções ou objetos diretamente em props sem memoização.
-   Evite re-renderizações desnecessárias usando `React.memo` quando apropriado.

---

## 8. Organização

-   Use um hook por responsabilidade.
-   Nomeie custom hooks de forma descritiva: `useContador`, `useFetch`, `useForm`, etc.

---

## 9. Testes

-   Hooks puros podem ser testados isoladamente sem renderizar componentes.
-   Use bibliotecas como `@testing-library/react-hooks` para testar custom hooks.

---

Seguindo essas práticas, seu código React vai ficar **mais limpo, modular e eficiente**.
