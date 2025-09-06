import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Store } from "./components/Main/Store";
import { Item } from "./components/Main/Item/Item";
import { StatusContext } from "./components/Main/statusComponents/StatusContext";
import { GetProvider } from "./js/StoreProvider";
import { GetContext } from "./js/context"; // <- IMPORT CORRETO

function MainContent() {
    const { get } = useContext(GetContext);
    const [status, setStatus] = useState(null);
    const [reload, setReload] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    return (
        <StatusContext.Provider
            value={{
                status,
                setStatus,
                reload,
                setReload,
                totalValue,
                setTotalValue,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Store status={status} />} />
                        <Route path={`item/${get.url}`} element={<Item />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StatusContext.Provider>
    );
}

export function Main() {
    return (
        <GetProvider>
            <MainContent />
        </GetProvider>
    );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Main />);
