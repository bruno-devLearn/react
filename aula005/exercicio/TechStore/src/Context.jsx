import { useState } from "react";
import { StoreContext } from "./js/storeContext";

export function StoreProvider({ children }) {
    const [url, setUrl] = useState("");
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState([]);

    const get = {
        url,
        setUrl,
        products,
        setProducts,
        categories,
        setCategories,
    };

    const [selected, setSelected] = useState([]);
    const [_, setRender] = useState(false);
    const [prices, setPrices] = useState({});

    const [assessment, setAssessment] = useState(0);

    const filters = {
        selected,
        setSelected,
        setRender,
        prices,
        setPrices,
        assessment,
        setAssessment,
    };

    return (
        <StoreContext.Provider value={{ get, filters }}>
            {children}
        </StoreContext.Provider>
    );
}
