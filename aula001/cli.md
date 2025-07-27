# 1- CLI TOOLS

Ferramentas que funcionam via terminal (Command Line Interface). São usadas para automatizar tarefas, rodar scripts, instalar pacotes, etc.

### Git

Controle de versões.

```bash
git init
git add .
git commit -m "primeiro commit"
```

---

## 1.1- Vite

Vite é uma ferramenta de build para projetos front-end, focada em velocidade e simplicidade.

Foi criada para substituir ferramentas mais lentas como Webpack, usando ES Modules no desenvolvimento e Rollup na build final.

### Instalação

```bash
npm create vite@latest
```

---

### Uso básico do Vite

Depois de criar o projeto, entre na pasta do projeto e instale as dependências:

```bash
cd nome-do-projeto
npm install
```

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
```

Para gerar o build de produção:

```bash
npm run build
```

Para rodar o build localmente e testar:

```bash
npm run preview
```

---

### Prettier

Ferramenta para formatação automática de código.

---

### Instalando Prettier

```bash
npm install --save-dev prettier
```

---

### Usando Prettier

Crie um arquivo `.prettierrc` com as configurações desejadas, por exemplo:

```json
{
    "semi": true,
    "singleQuote": true,
    "printWidth": 80
}
```

Para formatar arquivos manualmente:

```bash
npx prettier --write .
```

---

### Boilerplate

Boilerplate é um código base padrão para iniciar um projeto rapidamente, contendo estrutura inicial e configurações básicas.

---

### Resumo rápido

-   CLI Tools: programas que rodam no terminal.
-   Git: controle de versão.
-   Vite: ferramenta rápida para projetos front-end.
-   Prettier: formata código automaticamente.
-   Boilerplate: código base inicial.
