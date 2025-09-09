import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Store } from "./components/Main/Store";
import { Item } from "./components/Main/Item/Item";
import { StoreProvider } from "./Context";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <StoreProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Store />} />
                    <Route path="item" element={<Item />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StoreProvider>
);
