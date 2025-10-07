import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSquare } from "../../js/store";

export function Game() {
    const {
        updateIndex,
        randomIndex,
        updateColorAt,
        squareIndex,
        powerFunct,
        colors,
        tentativas,
        updateTentativas,
    } = useSquare();

    const power = powerFunct();

    useEffect(() => {
        updateIndex(Math.floor(Math.random() * power));
    }, [updateIndex, power]);

    function playGame(index) {
        if (index === randomIndex) {
            updateColorAt(index, "green");
        } else {
            updateColorAt(index, "red");
        }

        updateTentativas();
    }

    return (
        <div className="game-div">
            <div className="points">
                <span className="game-points">Tentativas: {tentativas}</span>
            </div>

            <Grid templateColumns={`repeat(${squareIndex}, 1fr)`} gap="10px">
                {colors.map((_, index) => (
                    <GridItem key={index}>
                        <Box
                            background={
                                colors[index] === "yellow"
                                    ? "yellow.300"
                                    : colors[index] === "green"
                                    ? "green.500"
                                    : colors[index] === "red"
                                    ? "red.500"
                                    : null
                            }
                            w="150px"
                            h="150px"
                            shadow="3px 3px 2px 1px rgba(0, 0, 0, 0.1)"
                            cursor="pointer"
                            onClick={() => {
                                playGame(index);
                            }}
                        ></Box>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
}
