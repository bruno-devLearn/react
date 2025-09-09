import { useEffect, useState } from "react";
import { StoreContext } from "./js/storeContext";

export function StoreProvider({ children }) {
    const [url, setUrl] = useState("");
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState([]);
    const [urls, setUrls] = useState([]);

    const get = {
        url,
        setUrl,
        products,
        setProducts,
        categories,
        setCategories,
        urls,
        setUrls,
    };

    const [selected, setSelected] = useState([]);
    const [_, setRender] = useState(false);
    const [prices, setPrices] = useState({});

    const [assessment, setAssessment] = useState(0);
    const [item, setItem] = useState("Default");

    const [order, setOrder] = useState(null);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        switch (item) {
            case "Default":
                setOrder("");
                setSort("");
                break;
            case "Lowest Price":
                setOrder("asc");
                setSort("price");
                break;
            case "Highest Price":
                setOrder("desc");
                setSort("price");
                break;
            case "Best Rating":
                setOrder("desc");
                setSort("rating");
                break;
            case "Alphabetical":
                setOrder("asc");
                setSort("title");
        }
    }, [item, products]);

    const filters = {
        selected,
        setSelected,
        setRender,
        prices,
        setPrices,
        assessment,
        setAssessment,
        item,
        setItem,
        order,
        sort,
    };

    return (
        <StoreContext.Provider value={{ get, filters }}>
            {children}
        </StoreContext.Provider>
    );
}
