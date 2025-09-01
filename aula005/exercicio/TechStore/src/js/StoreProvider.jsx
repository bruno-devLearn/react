import { useRef, useState } from "react";
import { prices } from "./start";
import { StoreContext } from "./context";

export function StoreProvider({ children }) {
    const minPrice = Math.min(...prices.priceItem.map((p) => p.price));
    const maxPrice = Math.max(...prices.priceItem.map((p) => p.price));

    const [minUserPrice, setMinUserPrice] = useState(minPrice);
    const [maxUserPrice, setMaxUserPrice] = useState(maxPrice);

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
