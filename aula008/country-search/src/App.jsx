import { Header } from "./components/Header";
import "./app.css";
import { Cards } from "./components/Cards";
import { Pages } from "./components/Pages";

function App() {
    return (
        <>
            <Header />
            <main>
                <Cards />
                <Pages />
            </main>
        </>
    );
}

export default App;
