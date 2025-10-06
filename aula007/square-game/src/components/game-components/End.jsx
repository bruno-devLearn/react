import { Button } from "@chakra-ui/react";

export function End() {
    return (
        <div className="end-div">
            <span className="pontuation">Tentativas: 0</span>
            <Button
                colorPalette="blue"
                w="350px"
                h="100px"
                color="white"
                fontSize="20px"
                fontWeight="700"
                rounded="full"
                shadow="7px 10px 2px 1px rgba(0, 0, 0, 0.2)"
            >
                Voltar ao Inicio
            </Button>
        </div>
    );
}
