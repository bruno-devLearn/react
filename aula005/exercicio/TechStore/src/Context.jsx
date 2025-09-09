import { useEffect, useState } from "react";
import { StoreContext } from "./js/storeContext";

export function StoreProvider({ children }) {
    const [url, setUrl] = useState("");
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log(products);
        console.log(categories);
    }, [products, categories]);

    return (
        <StoreContext.Provider
            value={{
                url,
                setUrl,
                products,
                setProducts,
                categories,
                setCategories,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}
