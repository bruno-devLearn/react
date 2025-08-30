import { Outlet } from "react-router-dom"; // Import Outlet
import { Header } from "./components/Header/Header";
import { useContext, useEffect } from "react";
import { start } from "./js/start";
import { StatusContext } from "./components/Main/statusComponents/StatusContext";

function App() {
    const { status, setStatus } = useContext(StatusContext);

    useEffect(() => {
        start(setStatus);
    }, [setStatus]);

    return (
        <>
            <Header status={status} />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
