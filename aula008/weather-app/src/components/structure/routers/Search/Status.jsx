import { VStack, EmptyState, Button, Spinner } from "@chakra-ui/react";
import { MdError } from "react-icons/md";

export function Empty() {
    return (
        <EmptyState.Root size="lg">
            <EmptyState.Content gap="10px">
                <EmptyState.Indicator>
                    <MdError color="#5a5a5aff" />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title color="#0a0a0a">
                        Nenhum Resultado Encontrado
                    </EmptyState.Title>
                    <EmptyState.Description color="#4a5565">
                        Você ainda não buscou por cidades
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    );
}

export function NotFound() {
    return (
        <EmptyState.Root size="lg">
            <EmptyState.Content gap="10px">
                <EmptyState.Indicator>
                    <MdError color="#5a5a5aff" />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title color="#0a0a0a">
                        Nenhum Resultado Encontrado
                    </EmptyState.Title>
                    <EmptyState.Description color="#4a5565">
                        Não foi encontrado cidades com esse nome
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    );
}

export function Error() {
    return (
        <EmptyState.Root size="lg">
            <EmptyState.Content gap="10px">
                <EmptyState.Indicator>
                    <MdError color="red" />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title color="#ef3e3e">Erro</EmptyState.Title>
                    <Button bgColor="#0a0a0a" color="#fff" w="130px">
                        Tente Novamente
                    </Button>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    );
}

export function Loading() {
    return (
        <div className="loading">
            <Spinner
                color="grey"
                w="100px"
                h="100px"
                borderWidth="6px"
                animationDuration="0.9s"
            />
        </div>
    );
}
