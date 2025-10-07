import { Button, Stack } from "@chakra-ui/react";
import { useSquare } from "../../js/store";

export function Start() {
    const { selectIndex } = useSquare();

    return (
        <div className="start-div">
            <h1>Escolha seu modo de jogo</h1>

            <Stack spacing={4} gap="15px">
                {[3, 4, 5].map((num, index) => (
                    <Button
                        colorPalette="blue"
                        w="350px"
                        h="100px"
                        color="white"
                        fontSize="20px"
                        fontWeight="700"
                        rounded="full"
                        shadow="7px 10px 2px 1px rgba(0, 0, 0, 0.2)"
                        key={index}
                        onClick={() => {
                            selectIndex(num);
                        }}
                    >{`${num}x${num}`}</Button>
                ))}
            </Stack>
        </div>
    );
}
