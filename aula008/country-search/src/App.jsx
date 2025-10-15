import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Pages } from "./components/Pages";
import { useEffect } from "react";
import { fetchCountries } from "./js/requisition";
import { useData } from "./js/store";
import "./app.css";

function App() {
    const { updateDatas, inputValue } = useData();

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchCountries();
                updateDatas(data, data.pageInfo.endCursor);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [updateDatas, inputValue]);

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
