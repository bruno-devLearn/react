import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useStart } from "./js/start";
import { useContext, useEffect } from "react";
import { StoreContext } from "./js/storeContext";
import { ErrorDiv, Loading } from "./components/Main/statusComponents/status";

function App() {
    const { get, status } = useContext(StoreContext); // pegando status
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            get.setUrl("/");
        } else if (location.pathname.startsWith("/item")) {
            get.setUrl("/item");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, get.setUrl]);

    useStart();

    return (
        <>
            <Header />
            <main>
                {status === "loading" &&
                location.pathname.startsWith("/item") ? (
                    <Loading />
                ) : status === "success" &&
                  location.pathname.startsWith("/item") ? (
                    <Outlet />
                ) : status === "error" ? (
                    <ErrorDiv />
                ) : (
                    <Outlet />
                )}
            </main>
        </>
    );
}

export default App;
