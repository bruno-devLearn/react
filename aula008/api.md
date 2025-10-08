# API CAll

Antes de entender REST ou GraphQL, precisa entender o que é **API Call**.

-   **API Call** é basicamente quando seu programa pede informação ou manda informação pra um servidor.

-   É como se você fosse a pessoa numa lanchonete pedindo um hambúrguer: você faz o pedido (call), a cozinha prepara e te entrega (resposta).

Em termos técnicos:

-   Request → pedido feito pelo seu programa.

-   Response → resposta do servidor com os dados que você pediu.

## API REST

**REST** (Representational State Transfer) é um estilo de API muito usado.

**Como funciona:**

-   Tudo gira em torno de recursos (ex: usuários, produtos, posts).

-   Cada recurso tem uma URL única. Ex:

```bash
GET /users        → pega todos os usuários
GET /users/1      → pega o usuário de ID 1
POST /users       → cria um usuário
PUT /users/1      → atualiza o usuário 1
DELETE /users/1   → deleta o usuário 1
```

-   Usa **HTTP methods** (GET, POST, PUT, DELETE) pra saber o que fazer.

**Prós**:

-   Simples e padronizado.

-   Funciona com praticamente qualquer linguagem ou ferramenta.

**Contras**:

-   Você às vezes recebe mais dados do que precisa, porque cada endpoint retorna um objeto fixo.

## API GraphQL

**GraphQL** é uma forma mais moderna de trabalhar com APIs, criada pelo Facebook.

**Como funciona:**

-   Tem **apenas um endpoint** (normalmente `/graphql`).

-   Você faz uma **query**, que é tipo um pedido detalhado do que quer.

-   O servidor responde **exatamente com o que você pediu**, nada mais.

Exemplo:

```graphql
query {
    user(id: 1) {
        name
        email
    }
}
```

-   Aqui você pede só o **nome e email** do usuário 1.

-   Diferente do REST, você não recebe coisas extras.

**Prós:**

-   Mais flexível, ideal pra apps que precisam de dados específicos.

-   Pode reduzir a quantidade de chamadas pra API.

**Contras:**

-   Curva de aprendizado maior.

-   Configuração do servidor é mais complexa que REST.

---

nesse md, eu apenas especificarei sobre as libs Apollo(GraphQl), react-query(REST) e axios (REST)

# Apollo (GraphQL)

Apollo é uma plataforma open-source que facilita a criação, consumo e monitoramento de APIs GraphQL. Ela oferece uma série de ferramentas e bibliotecas que ajudam desenvolvedores a construir APIs escaláveis e eficientes.

## Instalação

Aplicações que usam o Apollo Client requerem as seguintes dependências de nível superior:

-   `@apollo/client`: Este único pacote contém praticamente tudo o que você precisa para configurar o Apollo Client. Ele inclui o cache em memória, gerenciamento de estado local, tratamento de erros e uma camada de visualização baseada em React.

-   `graphql`: Este pacote fornece a lógica para analisar consultas GraphQL.

-   `rxjs`: Este pacote fornece o primitivo `Observable` usado em todo o Apollo Client.

Execute o seguinte comando para instalar todos esses pacotes:

```bash
npm install @apollo/client graphql rxjs
```

## Inicializar o ApolloClient

No `main.jsx`, vamos primeiro importar os símbolos que precisamos de `@apollo/client` e `@apollo/client/react`:

```js
// main.jsx
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
```

Em seguida, vamos inicializar o ApolloClient, passando ao seu construtor um objeto de configuração com os campos `link` e `cache`:

```js
// main.jsx
const client = new ApolloClient({
    link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
    cache: new InMemoryCache(),
});
```

-   **link** especifica o Apollo Link que será usado para executar operações GraphQL contra a rede. Damos a ele uma instância de `HttpLink` — um Apollo Link personalizado que sabe como executar requisições de rede contra um servidor GraphQL.

-   **cache** é uma instância de `InMemoryCache`, que o Apollo Client usa para armazenar em cache os resultados das consultas após buscá-los.

Pronto! Nosso client está pronto para começar a buscar dados. Antes de começarmos a usar o Apollo Client com React, vamos primeiro tentar enviar uma query com JavaScript puro.

No mesmo arquivo `main.jsx`, chame `client.query()` com a string da query (envolvida no literal de template `gql`) mostrado abaixo:

```js
// main.jsx
// const client = ...

client
    .query({
        query: gql`
            query GetLocations {
                locations {
                    id
                    name
                    description
                    photo
                }
            }
        `,
    })
    .then((result) => console.log(result));
```

Execute este código, abra o console e inspecione o objeto `result`. Você deverá ver uma propriedade `data` com `locations` anexada. Legal!

Embora executar operações GraphQL diretamente assim possa ser útil, o Apollo Client realmente se destaca quando é integrado a uma camada de visualização como o React. Você pode vincular queries à sua interface e atualizá-la automaticamente conforme novos dados são buscados.

## Conect seu client ao react

Você conecta o Apollo Client ao React usando o componente `ApolloProvider`. Similar ao `Context.Provider` do React, o `ApolloProvider` envolve sua aplicação React e coloca o Apollo Client no contexto, permitindo que você acesse-o de qualquer lugar na árvore de componentes.

No `main.jsx`, vamos envolver nossa aplicação React com um `ApolloProvider`. Recomendamos colocar o `ApolloProvider` próximo à raiz da sua aplicação, acima de qualquer componente que possa precisar acessar dados GraphQL.

```js
// main.jsx

import React from "react";
import * as ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import App from "./App";

const client = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
});

// Suportado no React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
```

## Buscar dados com useQuery

Depois que seu `ApolloProvider` estiver configurado, você pode começar a solicitar dados com o `useQuery`. O hook `useQuery` é um hook do React que compartilha dados GraphQL com sua interface.

No arquivo `App.jsx`, começaremos substituindo o conteúdo existente pelo snippet abaixo:

```js
// App.jsx

// Importa tudo que é necessário para usar o hook `useQuery`
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

export default function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
        </div>
    );
}
```

Podemos definir a query que queremos executar envolvendo-a no literal de template `gql`:

```js
// App.jsx

const GET_LOCATIONS = gql`
    query GetLocations {
        locations {
            id
            name
            description
            photo
        }
    }
`;
```

Em seguida, definimos um componente chamado `DisplayLocations` que executa nossa query `GET_LOCATIONS` usando o hook `useQuery`:

```js
// App.jsx

function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
            <h3>{name}</h3>
            <img
                width="400"
                height="250"
                alt="location-reference"
                src={`${photo}`}
            />
            <br />
            <b>About this location:</b>
            <p>{description}</p>
            <br />
        </div>
    ));
}
```

Sempre que este componente renderiza, o hook `useQuery` executa automaticamente nossa query e retorna um objeto `result` contendo as propriedades `loading`, `error`, `data` e `dataState`:

-   O Apollo Client rastreia automaticamente os estados de carregamento e erro da query, refletidos nas propriedades `loading` e `error`.

-   Quando o resultado da query retorna, ele é anexado à propriedade data.

Por fim, adicionamos `DisplayLocations` à árvore de componentes existente:

```js
// App.jsx

export default function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
            <br />
            <DisplayLocations />
        </div>
    );
}
```

Quando sua aplicação recarregar, você deverá ver brevemente um indicador de carregamento, seguido por uma lista de localizações e detalhes sobre elas. Se não aparecer, você pode comparar seu código com o app completo no CodeSandbox.

Parabéns! Você acabou de criar seu primeiro componente que renderiza dados GraphQL do Apollo Client. 🎉 Agora você pode tentar construir mais componentes usando `useQuery` e experimentar os conceitos que acabou de aprender.

# Tanstack query (REST)

TanStack Query (antigo React Query) é uma lib pra JS/TS que simplifica fazer chamadas REST (ou outro tipo de fetch), gerenciar cache, atualizar dados de servidor etc. Sem frescura, direto ao ponto:

## Instalação

para instalar use:

```bash
npm i @tanstack/react-query
```

Recomenda-se também usar o **ESLint Plugin Query** para ajudar a detectar erros e inconsistências enquanto você programa. Você pode instalá-lo com:

```bash
npm i -D @tanstack/eslint-plugin-query
```

## Inicializar

Você precisa criar uma instância de `QueryClient` e envolver sua aplicação com `QueryClientProvider`, para que hooks como `useQuery` e `useMutation` possam funcionar.

Exemplo:

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <YourAppComponents />
        </QueryClientProvider>
    );
}
```

## requisição e uso

Dentro de um componente:

```jsx
import { useQuery } from "@tanstack/react-query";

function MyComponent() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["users", userId],
        queryFn: fetchData, // função sem ()
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Erro!</p>;

    return <div>{data.name}</div>;
}
```

-   `queryKey`: identificador único da query (ajuda no cache)

-   `queryFn`: função que retorna a promessa de dados

-   `data`, `isLoading`, `error` etc são estados disponibilizados pelo hook

-   `fetchData` é uma função de requisição normal, onde retorna o resultado da api

# Axios

sobre axios, nao tem muito oq falar, ele é uma lib que melhora a requisição

Exemplo:

```js
import axios from "axios";

async function fetchUsers() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data); // imprime os dados retornados
    } catch (error) {
        console.error("Erro ao buscar usuários:", error.message);
    }
}

fetchUsers();
```
