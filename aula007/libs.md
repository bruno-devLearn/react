# Bibliotecas de Componentes

São coleções de componentes prontos (botões, modais, cards, formulários etc.) que você pode usar no seu projeto para não precisar criar tudo do zero. Chakra UI, Material UI, Ant Design, Mantine, shadcn/ui são exemplos desse tipo de biblioteca.

nesse md, eu apenas especificarei sobre Chakra UI

## O que é o Chakra UI?

O Chakra UI é uma biblioteca de componentes para React que facilita a criação de interfaces de usuário acessíveis e personalizáveis. Ele oferece componentes prontos para uso, como botões, formulários, modais e muito mais, permitindo que você construa aplicações web de forma rápida e eficiente.
chakra-ui.com

## Instalação

Para começar a usar o Chakra UI em seu projeto React, siga os passos abaixo:

### 1. Instale as dependências necessárias:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### 2. Envolva seu aplicativo com o ChakraProvider no arquivo principal:

```jsx
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return <ChakraProvider>{/* Seus componentes */}</ChakraProvider>;
}

export default App;
```

## Componentes Principais

O Chakra UI oferece uma variedade de componentes para facilitar o desenvolvimento de interfaces:

-   **Box**: um componente de contêiner básico.

-   **Button**: botões com suporte a temas e estilos.

-   **Input**: campo de entrada de texto.

-   **Modal**: caixa de diálogo modal.

-   **Tooltip**: dica de ferramenta exibida ao passar o mouse.

## Estilização e Temas

O Chakra UI utiliza um sistema de temas que permite personalizar facilmente as cores, tipografia e outros aspectos visuais de sua aplicação. Você pode definir um tema personalizado e aplicá-lo globalmente:

```jsx
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7c6c7",
            900: "#9b2c2c",
        },
    },
});

function App() {
    return (
        <ChakraProvider theme={theme}>{/* Seus componentes */}</ChakraProvider>
    );
}

export default App;
```

## Responsividade

O Chakra UI facilita a criação de layouts responsivos utilizando propriedades como display, flexDirection, alignItems, entre outras, que aceitam valores baseados em breakpoints. Isso permite que sua aplicação se adapte a diferentes tamanhos de tela de forma simples e eficiente.

## Acessibilidade

A acessibilidade é uma prioridade no Chakra UI. Todos os componentes são projetados para serem acessíveis por padrão, seguindo as diretrizes do WAI-ARIA e garantindo que sua aplicação seja utilizável por pessoas com deficiências.
