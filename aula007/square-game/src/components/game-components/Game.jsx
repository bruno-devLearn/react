// Importa componentes de layout do Chakra UI
import { Grid, GridItem, Box } from "@chakra-ui/react";
// Importa hook do React para efeitos colaterais
import { useEffect } from "react";
// Importa o hook Zustand para acessar o estado global do jogo
import { useSquare } from "../../js/store";

export function Game() {
    // Desestrutura os estados e funções necessárias do store
    const {
        squareIndex, // Tamanho do grid (ex: 3, 4, 5)
        randomIndex, // Índice aleatório que deve ser acertado
        tentativas, // Número de tentativas feitas
        colors, // Array com as cores de cada quadrado
        powerFunct, // Função que retorna o total de quadrados (squareIndex^2)
        updateIndex, // Função que atualiza randomIndex
        updateColorAt, // Função que altera a cor de um quadrado específico
        updateTentativas, // Função que incrementa tentativas
        updateFind, // Função que marca que o jogo foi encontrado/acertado
    } = useSquare();

    // Calcula a quantidade total de quadrados no grid
    const power = powerFunct();

    // Efeito que inicializa randomIndex ao montar ou quando 'power' muda
    useEffect(() => {
        // Escolhe um índice aleatório entre 0 e power
        updateIndex(Math.floor(Math.random() * power));
    }, [updateIndex, power]);

    // Função executada quando o usuário clica em um quadrado
    function playGame(index) {
        if (index === randomIndex) {
            // Acertou: muda a cor do quadrado para verde
            updateColorAt(index, "green");

            // Depois de 200ms, atualiza o estado find para indicar que o jogo terminou
            setTimeout(() => {
                updateFind();
            }, 200);
        } else {
            // Errou: muda a cor do quadrado para vermelho
            updateColorAt(index, "red");
        }

        // Incrementa o contador de tentativas
        updateTentativas();
    }

    return (
        <div className="game-div">
            {/* Mostra o número de tentativas */}
            <div className="points">
                <span className="game-points">Tentativas: {tentativas}</span>
            </div>

            {/* Grid principal do jogo */}
            <Grid templateColumns={`repeat(${squareIndex}, 1fr)`} gap="10px">
                {/* Renderiza cada quadrado com base no array colors */}
                {colors.map((_, index) => (
                    <GridItem key={index}>
                        <Box
                            // Define a cor de fundo do quadrado com base no estado
                            background={
                                colors[index] === "yellow"
                                    ? "yellow.300"
                                    : colors[index] === "green"
                                    ? "green.500"
                                    : colors[index] === "red"
                                    ? "red.500"
                                    : null
                            }
                            w="150px" // Largura do quadrado
                            h="150px" // Altura do quadrado
                            shadow="3px 3px 2px 1px rgba(0, 0, 0, 0.1)" // Sombra
                            cursor="pointer"
                            onClick={(e) => {
                                // Impede clicar em quadrados já clicados (não amarelos)
                                if (colors[index] !== "yellow") {
                                    e.preventDefault();
                                    return;
                                }

                                // Executa lógica do clique
                                playGame(index);
                            }}
                        ></Box>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
}
