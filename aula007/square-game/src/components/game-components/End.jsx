// Importa o componente Button do Chakra UI
import { Button } from "@chakra-ui/react";

// Importa o hook Zustand para acessar o estado global do jogo
import { useSquare } from "../../js/store";

export function End() {
    // Desestrutura tentativas e reset do store
    const { tentativas, reset } = useSquare();

    return (
        <div className="end-div">
            {/* Mostra o total de tentativas feitas pelo jogador */}
            <span className="pontuation">Tentativas: {tentativas}</span>

            {/* Botão para reiniciar o jogo */}
            <Button
                colorPalette="blue" // Cor base do botão
                w="350px" // Largura
                h="100px" // Altura
                color="white" // Cor do texto
                fontSize="20px" // Tamanho do texto
                fontWeight="700" // Negrito
                rounded="full" // Bordas arredondadas
                shadow="7px 10px 2px 1px rgba(0, 0, 0, 0.2)" // Sombra do botão
                onClick={() => reset()} // Ao clicar, reseta o estado do jogo
            >
                Voltar ao Inicio
            </Button>
        </div>
    );
}
