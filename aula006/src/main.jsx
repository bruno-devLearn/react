import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, App2, App3, App4, App5, App6, App7, App8 } from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <br />
        <App2 />
        <br />
        <App3 />
        <br />
        <App4 />
        <br />
        <App5 />
        <br />
        <App6 />
        <br />
        <App7 />
        <br />
        <App8 />
    </StrictMode>
);
