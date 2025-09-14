# State Management

Em React, **gerenciamento de estado** refere-se ao processo de controlar e compartilhar dados que determinam como os componentes se comportam e como a interface do usuário é renderizada. À medida que a aplicação cresce, torna-se essencial gerenciar esses dados de forma eficiente para evitar problemas como atualizações inconsistentes da interface ou dificuldade em compartilhar informações entre componentes distantes. Um exemplo disso é o `useReducer`

---

**Nesse md apenas falaremos de `zustand`**

## zustand oq é?

-   Biblioteca de gerenciamento de estado para React.

-   Muito menor “boilerplate” que Redux ou Context API pesado.

-   Usa hooks: você cria uma “store” que é um hook, depois em componentes você consome valores desse store.

## Como usar

### 1- instalação:

```bash
npm install zustand
# ou yarn add zustand
```

### 2- crie sua store:

```js
import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));
```

---

O código cria uma store do Zustand chamada `useCounterStore`, que mantém o estado de um contador (`count`) e define ações para modificá-lo: `increment` aumenta o contador em 1, `decrement` diminui em 1 e `reset` redefine para 0, utilizando a função `set` fornecida pelo Zustand para atualizar o estado de forma imutável, permitindo que qualquer componente que use esse hook acesse o valor atual do contador e execute essas ações de forma direta e eficiente.

---

### usar no componente:

```jsx
function Counter() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
```

---

aqui a sintaxe é bem parecida com `useContext`, vc importa as variaveis e funções vinda do seu hook `useCounterStore`. vc tbm pode otmizar as renderizações e pegar somente o estado:

```jsx
function Display() {
    const count = useCounterStore((state) => state.count);
    return <h1>{count}</h1>;
}

function Controls() {
    const increment = useCounterStore((state) => state.increment);
    return <button onClick={increment}>+</button>;
}
```

## Boas praticas

### 1- nao pegar o estado inteiro

Não faça:

```js
const state = useCounterStore(); // Pega tudo
```

**Problema**: qualquer mudança no estado vai rerenderizar o componente, mesmo que ele só use uma parte do estado.

Faça:

```js
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);
```

**Benefício**: o componente só rerenderiza quando count muda, evitando renderizações desnecessárias.

---

### 2- nao misturar lógica de negócios com UI

Não faça:

```js
const { setCount } = useCounterStore();
setCount(10); // direto no componente
```

**Problema**: o componente fica responsável por atualizar o estado diretamente, difícil de manter.

Faça:

```js
const { increment, decrement, reset } = useCounterStore(
    (state) => state.actions
);
increment();
```

**Benefício**: mantém a lógica de atualização dentro da store, e o componente apenas chama ações.

---

### 3- mutar objetos ou arrays diretamente

Não faça:

```js
const useStore = create((set) => ({
    items: [{ id: 1, name: "Item 1" }],
    addItem: (item) =>
        set((state) => {
            state.items.push(item);
        }), // mutação direta
}));
```

**Problema**: mutações diretas quebram a reatividade do Zustand e podem gerar bugs.

Faça:

```js
import produce from "immer";

const useStore = create((set) => ({
    items: [{ id: 1, name: "Item 1" }],
    addItem: (item) =>
        set(
            produce((state) => {
                state.items.push(item); // seguro, Immer cuida da imutabilidade
            })
        ),
}));
```

**Benefício**: mantém o estado imutável de forma segura e simples.

---

### 4- não separar lógica do estado

Não faça:

```js
const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

**Problema**: ações e estado estão misturados, e componentes que pegam o estado inteiro rerenderizam demais.

Faça:

```js
const useStore = create((set) => ({
    count: 0,
    actions: {
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
    },
}));
```

**Benefício**: mantém a store organizada, fácil de consumir apenas o que o componente precisa.

---

### 5- não usar hooks personalizados para lógica repetida

Não faça:

```js
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);
// repetir em vários componentes
```

Faça:

```js
export const useCount = () => useCounterStore((state) => state.count);
export const useCountActions = () => useCounterStore((state) => state.actions);
```

**Benefício**: Benefício: componentes ficam limpos, e se precisar mudar a store, só muda no hook.
