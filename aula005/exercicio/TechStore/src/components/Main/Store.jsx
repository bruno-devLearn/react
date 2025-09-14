import { useContext, useEffect, useState } from "react";
import "../../css/index.css";
import { Cart } from "../cart/Cart";
import { Cards } from "./Cards/Card";

import { FilterBar } from "./components/FilterBar";
import { FiltersDiv } from "./components/FiltersDiv";
import { Pages } from "./Pages";
import { StoreContext } from "../../js/storeContext";
import { ErrorDiv, Loading, NotFound } from "./statusComponents/status";

export function Store() {
    const { status, get, cart } = useContext(StoreContext);

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
            <FiltersDiv open={open} setOpen={setOpen} />
            {cart.cartOpen === true ? <Cart /> : null}
            {status === "loading" ? (
                <Loading />
            ) : status === "success" && get.products.total > 0 ? (
                <>
                    <Cards />
                    {get.products.index > 1 ? <Pages /> : null}
                </>
            ) : status === "success" && get.products.total === 0 ? (
                <NotFound />
            ) : status === "error" ? (
                <ErrorDiv />
            ) : null}
        </>
    );
}
