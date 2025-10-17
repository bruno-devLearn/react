import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Pages } from "./components/Pages";
import { useEffect } from "react";
import { fetchCountries } from "./js/requisition";
import { useData } from "./js/store";
import "./app.css";

function App() {
    const { updateData, inputValue, after, namePrefix, before } = useData();

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchCountries({
                    after,
                    namePrefix,
                    before,
                });
                updateData(data);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [updateData, inputValue, after, namePrefix, before]);

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
