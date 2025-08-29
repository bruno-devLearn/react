import { Cart } from "./components/cart/Cart";
import { Header } from "./components/Header/Header";
import { Cards } from "./components/Main/Cards/Card";
import { Pages } from "./components/Main/Pages";
import { Store } from "./components/Main/Store";

function App() {
    return (
        <>
            <Header />
            <main>
                <Store />
                <Cart />
                <Cards />
                <Pages />
            </main>
        </>
    );
}

export default App;
