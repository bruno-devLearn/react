import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Store } from "./components/Main/Store";
import { Item } from "./components/Main/Item/Item";
import { StatusContext } from "./components/Main/statusComponents/StatusContext";

export function Main() {
    const [status, setStatus] = useState(null);

    return (
        <StatusContext.Provider value={{ status, setStatus }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Store status={status} />} />
                        <Route path="item" element={<Item />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StatusContext.Provider>
    );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Main />);
