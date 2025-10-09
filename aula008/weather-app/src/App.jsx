import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "./components/ui/provider";
import { Header } from "./components/structure/header/Header";
import "./app.css";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

// 1️⃣ Criar o client
const queryClient = new QueryClient();

function App() {
    const location = useLocation();

    useEffect(() => {
        const body = document.body;

        if (location.pathname === "/result") {
            body.style.backgroundImage =
                "linear-gradient(to right bottom, oklch(0.97 0.014 254.604) 0%, oklch(0.932 0.032 255.585) 100%)";
            body.style.backgroundColor = "";
        } else if (location.pathname === "/") {
            body.style.backgroundImage = "";
            body.style.backgroundColor = "var(--bg-color)";
        } else {
            // reset padrão (caso queira outras rotas)
            body.style.backgroundImage = "";
            body.style.backgroundColor = "";
        }

        // limpeza opcional
        return () => {
            body.style.backgroundImage = "";
            body.style.backgroundColor = "";
        };
    }, [location.pathname]);

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
