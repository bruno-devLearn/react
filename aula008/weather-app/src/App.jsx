import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./components/ui/provider";
import { Header } from "./components/structure/header/Header";
import "./app.css";
import { Outlet } from "react-router";

// 1️⃣ Criar o client
const queryClient = new QueryClient();

function App() {
    return (
        <Provider>
            <QueryClientProvider client={queryClient}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
