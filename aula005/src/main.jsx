import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoList, MonthList, TodoList2 } from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TodoList />
        <MonthList />
        <TodoList2 />
    </StrictMode>
);
