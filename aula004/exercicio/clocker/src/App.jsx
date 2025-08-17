import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import "./css/App.css";

function App() {
    const [option, setOption] = useState("clock");

    return (
        <>
            <Header option={option} setOption={setOption} />
            <Main option={option} />
        </>
    );
}

export default App;
