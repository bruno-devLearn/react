import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, App2, App3, App4, App5, App6, App7 } from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <App2 />
        <App3 />
        <App4 />
        <App5 />
        <App6 />
        <App7 />
    </StrictMode>
);
