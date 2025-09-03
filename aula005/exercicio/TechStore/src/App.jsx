import { Outlet } from "react-router-dom"; // Import Outlet
import { Header } from "./components/Header/Header";
import { useContext } from "react";
import { useStart } from "./js/start";
import { StatusContext } from "./components/Main/statusComponents/StatusContext";

function App() {
    const { status } = useContext(StatusContext);

    useStart();

    return (
        <>
            <Header status={status} />
            <main
                style={{
                    height:
                        location.pathname === "/"
                            ? "calc(100vh - 56px)"
                            : "auto",
                }}
            >
                <Outlet />
            </main>
        </>
    );
}

export default App;
