import { useEffect, useState } from "react";
import "../../css/index.css";
import { Cart } from "../cart/Cart";
import { Cards } from "./Cards/Card";

import { FilterBar } from "./components/FilterBar";
import { FiltersDiv } from "./components/FiltersDiv";
import { Pages } from "./Pages";

export function Store() {
    const [open, setOpen] = useState("");

    useEffect(() => {
        const eventClick = () => setOpen("");
        document.addEventListener("click", eventClick);

        return () => {
            document.removeEventListener("click", eventClick);
        };
    }, []);

    return (
        <>
            <FilterBar setOpen={setOpen} />
            <FiltersDiv open={open} />
            <Cart />
            <Cards />
            <Pages />
        </>
    );
}
