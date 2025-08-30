import "../../css/index.css";
import { Cart } from "../cart/Cart";
import { Cards } from "./Cards/Card";

import { FilterBar } from "./components/FilterBar";
import { FiltersDiv } from "./components/FiltersDiv";
import { Pages } from "./Pages";

export function Store() {
    return (
        <>
            <FilterBar />
            <FiltersDiv />
            <Cart />
            <Cards />
            <Pages />
        </>
    );
}
