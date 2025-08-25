# instalação

## Passo 1: Instalar o React Router v7

No diretório do seu projeto, execute o seguinte comando:

```bash
npm install react-router
```

## Passo 2: Configurar o React Router no seu projeto

No arquivo principal da sua aplicação (geralmente index.js ou main.js), envolva o componente raiz com o BrowserRouter para habilitar o roteamento:

```jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

---

Isso configura o roteamento básico para sua aplicação.

---

# Roteamento

## Rotas

Rotas são basicamente os caminhos que levam o usuário a diferentes páginas ou telas dentro de uma aplicação.

No contexto do React (ou qualquer app web de página única – SPA):

-   Uma rota associa uma URL a um componente que será exibido.

-   Quando o usuário acessa uma URL, o React Router verifica qual rota corresponde e renderiza o componente certo sem recarregar a página inteira.

---

## Configurando Rotas

As rotas são configuradas renderizando `<Routes>`e `<Route>` que associam segmentos de URL a elementos da interface.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
);
```

---

quando o usuario entrar em nomeSite.com/ vai ser renderizado o componente App sem que toda a pagina seja recarregada tudo denovo

aqui vai um exemplo maior:

```jsx
<Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
    </Route>

    <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
    </Route>
</Routes>
```

---

logo:

| URL                            | Componente renderizado                  |
| ------------------------------ | --------------------------------------- |
| nomeSite.com/                  | `<Home />`                              |
| nomeSite.com/about             | `<About />`                             |
| nomeSite.com/login             | `<AuthLayout><Login /></AuthLayout>`    |
| nomeSite.com/register          | `<AuthLayout><Register /></AuthLayout>` |
| nomeSite.com/concerts          | `<ConcertsHome />`                      |
| nomeSite.com/concerts/trending | `<Trending />`                          |
| nomeSite.com/concerts/:city    | `<City /> (parâmetro dinâmico)`         |

## Rotas Aninhadas

Rotas podem ser aninhadas dentro de rotas pai

```jsx
<Routes>
    <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
    </Route>
</Routes>
```

---

O caminho da rota pai é automaticamente incluído na rota filha, então essa configuração cria tanto as URLs **"/dashboard"** quanto **"/dashboard/settings"**.

logo:

| URL                             | Componente renderizado                 |
| ------------------------------- | -------------------------------------- |
| nomeSite.com/dashboard          | `<Dashboard ><Home /></Dashboard>`     |
| nomeSite.com/dashboard/settings | `<Dashboard ><Settings /></Dashboard>` |

---

As rotas filhas são renderizadas através do `<Outlet />` na rota pai.

```jsx
import { Outlet } from "react-router";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}
```

---

é como se `<Outlet />` fosse um componete, e dentro dele tem os componentes `Home` e `<Settings />`

## Rotas de Layout

Rotas sem um `path` criam um novo nível de aninhamento para suas rotas filhas, mas **não adicionam nenhum segmento na URL.**

```jsx
<Routes>
    <Route element={<MarketingLayout />}>
        <Route index element={<MarketingHome />} />
        <Route path="contact" element={<Contact />} />
    </Route>

    <Route path="projects">
        <Route index element={<ProjectsHome />} />
        <Route element={<ProjectsLayout />}>
            <Route path=":pid" element={<Project />} />
            <Route path=":pid/edit" element={<EditProject />} />
        </Route>
    </Route>
</Routes>
```

---

logo:

| URL                            | Componente renderizado                                   |
| ------------------------------ | -------------------------------------------------------- |
| nomeSite.com/                  | `<MarketingLayout ><ProjectsLayout /></MarketingLayout>` |
| nomeSite.com/contact           | `<MarketingLayout ><Contact /></MarketingLayout>`        |
| nomeSite.com/projects          | `<ProjectsHome />`                                       |
| nomeSite.com/projects/123      | `<ProjectsLayout><Project /></ProjectsLayout>`           |
| nomeSite.com/projects/123/edit | `<ProjectsLayout><EditProject /></ProjectsLayout>`       |

---

123 é so um exemplo, vc pode colocar qualquer nome no lugar

## Rotas de Índice

Rotas de índice renderizam dentro do `<Outlet/>` do seu pai, na URL do pai (como se fosse a rota filha padrão).

Elas são configuradas com a prop index:

```jsx
<Routes>
    <Route path="/" element={<Root />}>
        {/* renderiza dentro do outlet em <Root> na "/" */}
        <Route index element={<Home />} />

        <Route path="dashboard" element={<Dashboard />}>
            {/* renderiza dentro do outlet em <Dashboard> na "/dashboard" */}
            <Route index element={<DashboardHome />} />
            <Route path="settings" element={<Settings />} />
        </Route>
    </Route>
</Routes>
```

---

-   /

    -   Renderiza `<Root>`
    -   Dentro do `<Outlet />` de `<Root>` → renderiza `<Home />` (porque é index).

-   /dashboard

    -   Renderiza `<Dashboard>`
    -   Dentro do `<Outlet />` de `<Dashboard>` → renderiza `<DashboardHome />` (porque é index).

-   /dashboard/settings
    -   Renderiza `<Dashboard>`
    -   Dentro do `<Outlet />` → renderiza `<Settings />`.

---

Obs: Rotas de índice não podem ter filhos.
Se você precisa disso, provavelmente o que quer é uma rota de layout.

## Prefixos de Rotas

Uma `<Route path>` sem a prop `element` adiciona um **prefixo de caminho** às suas rotas filhas, **sem introduzir um layout pai.**

```jsx
<Route path="projects">
    <Route index element={<ProjectsHome />} />
    <Route element={<ProjectsLayout />}>
        <Route path=":pid" element={<Project />} />
        <Route path=":pid/edit" element={<EditProject />} />
    </Route>
</Route>
```

---

Aqui o `path="projects"` não tem `element`, ou seja:

-   Ele **não renderiza nada na tela.**
-   Ele só serve pra que todas as rotas filhas tenham o prefixo `/projects/...`.

**No exemplo:**

-   `/projects` → renderiza `<ProjectsHome />`
-   `/projects/:pid` → renderiza `<ProjectsLayout><Project /></ProjectsLayout>`
-   `/projects/:pid/edit` → renderiza `<ProjectsLayout><EditProject /></ProjectsLayout>`

## Segmentos Dinâmicos

Se um segmento do caminho começar com `:`, ele se torna um **“segmento dinâmico”**.
Quando a rota corresponder à URL, esse segmento dinâmico será **extraído da URL** e disponibilizado como **params** para outras APIs do roteador, como `useParams`.

```jsx
<Route path="teams/:teamId" element={<Team />} />
```

```jsx
import { useParams } from "react-router";

export default function Team() {
    let params = useParams();
    // params.teamId
}
```

---

Você pode ter múltiplos segmentos dinâmicos em um único path:

```jsx
<Route path="/c/:categoryId/p/:productId" element={<Product />} />
```

```jsx
import { useParams } from "react-router";

export default function CategoryProduct() {
    let { categoryId, productId } = useParams();
    // ...
}
```

---

⚠️ **Atenção**: todos os segmentos dinâmicos em um mesmo path devem ser **únicos**.
Se tiver nomes repetidos, os últimos sobrescrevem os primeiros no objeto `params`.

---

### Explicação

`:algumaCoisa` = placeholder na URL.  
O valor real vem da URL acessada e é disponibilizado em `useParams()`.

---

### Exemplo 1

```jsx
<Route path="teams/:teamId" element={<Team />} />
```

-   URL /teams/10 → params.teamId = "10"
-   URL /teams/brazil → params.teamId = "brazil"

---

### Exemplo 2

```jsx
<Route path="/c/:categoryId/p/:productId" element={<Product />} />
```

-   URL /c/eletronicos/p/55 → { categoryId: "eletronicos", productId: "55" }

---

### Resumo

-   Segmento dinâmico = variável na rota.
-   useParams() = pega esses valores da URL.
-   Cuidados: nomes devem ser únicos dentro da rota.

## Segmentos Opcionais

Você pode tornar um segmento de rota **opcional** adicionando um `?` no final do segmento.

```jsx
<Route path=":lang?/categories" element={<Categories />} />
```

---

Também é possível ter **segmentos estáticos opcionais:**

```jsx
<Route path="users/:userId/edit?" element={<User />} />
```

---

**Explicação**

-   `:lang?` → o parâmetro `lang` **pode ou não existir na URL.**

    -   /categories → lang não existe

    -   /en/categories → lang = "en"

-   edit? → a parte estática edit é opcional.

    -   /users/10 → acessa <User /> normalmente
    -   /users/10/edit → também acessa <User />

Em resumo:

-   `?` no final de um segmento = torna dinâmico ou estático opcional
-   Útil para criar rotas que funcionam com ou sem certas partes na URL.

## Splats

Também conhecidos como segmentos **“catchall”** ou **“star”**.
Se um caminho de rota terminar com `/*`, ele vai **combinar com qualquer coisa que vier depois do** `/`, incluindo outras barras `/`.

```jsx
<Route path="files/*" element={<File />} />
```

```jsx
let params = useParams();
// params["*"] vai conter o restante da URL depois de "files/"
let filePath = params["*"];
```

Você pode fazer **destructuring do** `*`, dando um novo nome. Um nome comum é `splat`:

```jsx
let { "*": splat } = useParams();
```

### Explicação

`*` = pega toda a parte restante da URL que não foi capturada por segmentos anteriores.

Útil para criar rotas **catchall**, como páginas de arquivos, downloads ou 404 customizados.

---

### Exemplo

```jsx
<Route path="files/*" element={<File />} />
```

-   `/files/documents/report.pdf` → `params["*"] = "documents/report.pdf"`
-   `/files/images/photo.png` → `params["*"] = "images/photo.png"`

## Linkando

Você pode criar links para suas rotas **diretamente na UI** usando `Link` ou `NavLink`.

```jsx
import { NavLink, Link } from "react-router";

function Header() {
    return (
        <nav>
            {/* NavLink facilita mostrar o estado ativo */}
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Home
            </NavLink>

            <Link to="/concerts/salt-lake-city">Concerts</Link>
        </nav>
    );
}
```

---

**Explicação**

-   `<Link to="...">` → cria um link normal, **sem recarregar a página.**
-   `<NavLink>` → funciona como `<Link>`, mas te permite **aplicar classes CSS quando a rota está ativa**.

Exemplo visual:

-   Usuário acessa `/` → Home recebe a classe `"active"`
-   Usuário acessa `/concerts/salt-lake-city` → `Concerts` não recebe a classe `"active"`

Em resumo:

-   **Link** = navegação simples
-   **NavLink** = navegação com estilo/estado ativo automático

# Navegação

## Introdução

Os usuários navegam pela sua aplicação usando `<Link>`, `<NavLink>` e `useNavigate`.

## NavLink

Esse componente é para links de navegação que precisam **renderizar um estado ativo.**

```jsx
import { NavLink } from "react-router";

export function MyAppNav() {
    return (
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/trending" end>
                Trending Concerts
            </NavLink>
            <NavLink to="/concerts">All Concerts</NavLink>
            <NavLink to="/account">Account</NavLink>
        </nav>
    );
}
```

---

Sempre que um `NavLink` estiver ativo, ele **receberá automaticamente a classe** `.active`, facilitando a estilização com CSS:

```css
a.active {
    color: red;
}
```

---

Ele também possui **props de callback** em `className`, `style` e `children` para aplicar estilo inline ou renderização condicional com base no estado ativo:

### Exemplos:

```jsx
// className
<NavLink
  to="/messages"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  Messages
</NavLink>

// style
<NavLink
  to="/messages"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })}
>
  Messages
</NavLink>

// children
<NavLink to="/message">
  {({ isActive }) => (
    <span className={isActive ? "active" : ""}>
      {isActive ? "👉" : ""} Tasks
    </span>
  )}
</NavLink>

```

## Link

Use `<Link>` quando o link **não precisa de estilo ativo:**

```jsx
import { Link } from "react-router";

export function LoggedOutMessage() {
    return (
        <p>
            You've been logged out. <Link to="/login">Login again</Link>
        </p>
    );
}
```

## useNavigate

Esse hook permite que o programador **navegue o usuário para uma nova página sem interação do próprio usuário.**

Para navegação normal, é melhor usar `<Link>` ou `<NavLink>`. Eles já cuidam de:

-   Eventos de teclado
-   Acessibilidade
-   “Abrir em nova janela”
-   Menu de contexto do clique direito

Use `useNavigate` **somente quando o usuário não está interagindo**, mas você precisa mudar a rota, por exemplo:

-   Após o envio de um formulário
-   Para deslogar o usuário após inatividade
-   Em interfaces temporizadas, como quizzes

```jsx
import { useNavigate } from "react-router";

export function LoginPage() {
    let navigate = useNavigate();

    return (
        <>
            <MyHeader />
            <MyLoginForm
                onSuccess={() => {
                    navigate("/dashboard");
                }}
            />
            <MyFooter />
        </>
    );
}
```

# Valores de URL

## Parâmetros de Rota

Os **route params** são os valores extraídos de um **segmento dinâmico** da rota.

```jsx
<Route path="/concerts/:city" element={<City />} />
```

---

-   Aqui, `:city` é o **segmento dinâmico.**
-   O valor digitado na URL será **disponível via** `useParams()`.

```jsx
import { useParams } from "react-router";

function City() {
    let { city } = useParams();
    let data = useFakeDataLibrary(`/api/v2/cities/${city}`);
    // ...
}
```

---

**Explicação**

-   Se o usuário acessar `/concerts/salt-lake-city` → `city = "salt-lake-city"`
-   Se acessar `/concerts/new-york` → `city = "new-york"`
-   `useParams()` sempre retorna um objeto com os nomes dos segmentos dinâmicos definidos na rota.

## Parâmetros de Busca na URL

Os **search params** são os valores que aparecem **após o** `?` na URL.
Eles podem ser acessados com `useSearchParams()`, que retorna uma instância de `URLSearchParams`

```jsx
function SearchResults() {
    let [searchParams] = useSearchParams();
    return (
        <div>
            <p>
                You searched for <i>{searchParams.get("q")}</i>
            </p>
            <FakeSearchResults />
        </div>
    );
}
```

## Objeto Location

O React Router cria um **objeto de localização personalizado** com informações úteis sobre a rota atual. Ele pode ser acessado com `useLocation()`.

```jsx
function useAnalytics() {
    let location = useLocation();
    useEffect(() => {
        sendFakeAnalytics(location.pathname);
    }, [location]);
}

function useScrollRestoration() {
    let location = useLocation();
    useEffect(() => {
        fakeRestoreScroll(location.key);
    }, [location]);
}
```
