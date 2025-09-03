import "../../css/index.css";
import { StoreProvider } from "../../js/StoreProvider";
import { Cart } from "../cart/Cart";
import { Cards } from "./Cards/Card";

import { FilterBar } from "./components/FilterBar";
import { FiltersDiv } from "./components/FiltersDiv";
import { Pages } from "./Pages";

export function Store({ status }) {
    return (
        <>
            {window.location.pathname === "/" ? (
                status === "sucess" ? (
                    <>
                        <StoreProvider>
                            <FilterBar />
                            <FiltersDiv />
                        </StoreProvider>
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
