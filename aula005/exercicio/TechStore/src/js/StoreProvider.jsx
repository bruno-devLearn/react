import { useEffect, useRef, useState } from "react";
import { prices } from "./start";
import { GetContext, StoreContext } from "./context";

export function StoreProvider({ children }) {
    const minPrice = Math.min(...prices.priceItem.map((p) => p.price));
    const maxPrice = Math.max(...prices.priceItem.map((p) => p.price));

    const [minUserPrice, setMinUserPrice] = useState(0);
    const [maxUserPrice, setMaxUserPrice] = useState(0);

    useEffect(() => {
        setMinUserPrice(minPrice);
        setMaxUserPrice(maxPrice);
    }, [maxPrice, minPrice]);

    const [userAssessment, setUserAssessment] = useState(0);

    const filters = {
        userAssessment,
        minPrice,
        maxPrice,
        minUserPrice,
        maxUserPrice,
        setMinUserPrice,
        setMaxUserPrice,
        setUserAssessment,
    };

    const [divOpen, setDivOpen] = useState(null);
    const [inputArr, setInputArr] = useState([]);

    const divRef = useRef({ category: null, order: null, price: null });
    const inputRef = useRef({});

    const [active, setActive] = useState("none");
    const [select, setSelect] = useState("Default");

    const storeState = {
        divOpen,
        setDivOpen,
        inputArr,
        setInputArr,
        active,
        setActive,
        divRef,
        inputRef,
        select,
        setSelect,
    };

    return (
        <StoreContext.Provider value={{ filters, storeState }}>
            {children}
        </StoreContext.Provider>
    );
}

export function GetProvider({ children }) {
    const [skip, setSkip] = useState(0);
    const [select, setSelect] = useState(0);
    const [products, setProducts] = useState({ items: [] });

    const get = { skip, setSkip, select, setSelect, products, setProducts };

    return (
        <GetContext.Provider value={{ get }}>{children}</GetContext.Provider>
    );
}
