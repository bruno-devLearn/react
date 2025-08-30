import { Outlet } from "react-router-dom"; // Import Outlet
import { Header } from "./components/Header/Header";

function App() {
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
