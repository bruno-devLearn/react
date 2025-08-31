import { useRef, useState } from "react";
import "../../css/index.css";
import { Cart } from "../cart/Cart";
import { Cards } from "./Cards/Card";

import { FilterBar } from "./components/FilterBar";
import { FiltersDiv } from "./components/FiltersDiv";
import { Pages } from "./Pages";

export function Store({ status }) {
    const [divOpen, setDivOpen] = useState(null);
    const [inputArr, setInputArr] = useState([]);

    const divRef = useRef({ category: null, order: null, price: null });
    const inputRef = useRef({});

    return (
        <>
            {window.location.pathname === "/" ? (
                status === "sucess" ? (
                    <>
                        <FilterBar
                            setDivOpen={setDivOpen}
                            divRef={divRef}
                            inputArr={inputArr}
                            setInputArr={setInputArr}
                            inputRef={inputRef}
                        />
                        <FiltersDiv
                            divOpen={divOpen}
                            divRef={divRef}
                            inputArr={inputArr}
                            setInputArr={setInputArr}
                            inputRef={inputRef}
                        />
                        <Cart />
                        <Cards status={status} />
                        <Pages />
                    </>
                ) : (
                    <Cards status={status} />
                )
            ) : null}
        </>
    );
}
