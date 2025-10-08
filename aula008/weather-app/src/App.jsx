import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./components/ui/provider";

// 1️⃣ Criar o client
const queryClient = new QueryClient();

function App() {
    return (
        <Provider>
            <QueryClientProvider client={queryClient}>
                {/* Seus componentes que usam React Query */}
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
