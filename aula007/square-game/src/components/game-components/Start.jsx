// Importa componentes do Chakra UI
import { Button, Stack } from "@chakra-ui/react";

// Importa o hook do Zustand para acessar o estado global do jogo
import { useSquare } from "../../js/store";

export function Start() {
    // Pega a função selectIndex do store, que define o tamanho do grid
    const { selectIndex } = useSquare();

    return (
        <div className="start-div">
            {/* Título da tela de seleção */}
            <h1>Escolha seu modo de jogo</h1>

            {/* Stack do Chakra UI para organizar os botões verticalmente com espaçamento */}
            <Stack spacing={4} gap="15px">
                {/* Gera 3 botões dinamicamente para os modos 3x3, 4x4 e 5x5 */}
                {[3, 4, 5].map((num, index) => (
                    <Button
                        colorPalette="blue" // Cor base do botão
                        w="350px" // Largura
                        h="100px" // Altura
                        color="white" // Cor do texto
                        fontSize="20px" // Tamanho do texto
                        fontWeight="700" // Negrito
                        rounded="full" // Bordas arredondadas
                        shadow="7px 10px 2px 1px rgba(0, 0, 0, 0.2)" // Sombra do botão
                        key={index} // Key para lista
                        onClick={() => {
                            // Quando clicado, define o tamanho do grid no store
                            selectIndex(num);
                        }}
                    >
                        {/* Texto do botão, ex: "3x3", "4x4", "5x5" */}
                        {`${num}x${num}`}
                    </Button>
                ))}
            </Stack>
        </div>
    );
}
