import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./components/ui/provider";
import { Header } from "./components/structure/header/Header";
import "./app.css";

// 1️⃣ Criar o client
const queryClient = new QueryClient();

function App() {
    return (
        <Provider>
            <QueryClientProvider client={queryClient}>
                <Header />
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
