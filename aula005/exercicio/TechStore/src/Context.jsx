import { useEffect, useState } from "react";
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

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <StoreContext.Provider value={get}>{children}</StoreContext.Provider>
    );
}
