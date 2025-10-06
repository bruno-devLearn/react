import { Grid, GridItem, Box } from "@chakra-ui/react";

export function Game() {
    return (
        <div className="game-div">
            <div className="points">
                <span className="game-points">Tentativas: 0</span>
            </div>

            <Grid
                templateColumns="repeat(5, 1fr)"
                templateRows="repeat(5, 1fr)"
                gap="10px"
            >
                {Array.from({ length: 25 }).map((_, index) => (
                    <GridItem key={index}>
                        <Box
                            background="yellow.300"
                            w="150px"
                            h="150px"
                            shadow="3px 3px 2px 1px rgba(0, 0, 0, 0.1)"
                            cursor="pointer"
                        ></Box>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
}
