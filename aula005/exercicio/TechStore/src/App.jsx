import { Header } from "./components/Header/Header";
import { Pages } from "./components/Main/Pages";
import { Store } from "./components/Main/Store";

function App() {
    return (
        <>
            <Header />
            <main>
                <Store />
                <Pages />
            </main>
        </>
    );
}

export default App;
