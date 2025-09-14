import { useEffect, useState } from "react";
import { StoreContext } from "./js/storeContext";
import { getData } from "./js/localStore";

export function StoreProvider({ children }) {
    const [url, setUrl] = useState("");
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState([]);
    const [urls, setUrls] = useState([]);
    const [cartProducts, setCartProducts] = useState(getData("products"));

    const get = {
        url,
        setUrl,
        products,
        setProducts,
        categories,
        setCategories,
        urls,
        setUrls,
        cartProducts,
        setCartProducts,
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

    const [inputSearch, setInputSearch] = useState("");
    const [inputSearchRaw, setInputSearchRaw] = useState("");

    const search = {
        inputSearch,
        setInputSearch,
        inputSearchRaw,
        setInputSearchRaw,
    };

    const [status, setStatus] = useState("");
    const [page, setPage] = useState(0);

    const [cartOpen, setCartOpen] = useState(false);
    const [cartAnimation, setCartAnimation] = useState("");
    const [shopping, setShopping] = useState([]);

    const cart = {
        cartOpen,
        setCartOpen,
        cartAnimation,
        setCartAnimation,
        shopping,
        setShopping,
    };

    const [again, setAgain] = useState(false);

    return (
        <StoreContext.Provider
            value={{
                get,
                filters,
                status,
                setStatus,
                page,
                setPage,
                search,
                cart,
                again,
                setAgain,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}
