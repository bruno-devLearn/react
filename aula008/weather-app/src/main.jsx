import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import { Search } from "./components/structure/routers/Search/Search.jsx";
import { Result } from "./components/structure/routers/result/Result.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Search />}></Route>
                    <Route path="result" element={<Result />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
