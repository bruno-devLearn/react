import { Outlet, useLocation } from "react-router-dom"; // Import Outlet
import { Header } from "./components/Header/Header";
import { useStart } from "./js/start";
import { useContext, useEffect } from "react";
import { StoreContext } from "./js/storeContext";

function App() {
    const { setUrl } = useContext(StoreContext);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setUrl(location.pathname);
        } else if (location.pathname === "/item") {
            setUrl(location.pathname);
        }
    }, [location, setUrl]);

    useStart();

    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* This is where nested routes will be rendered */}
            </main>
        </>
    );
}

export default App;
