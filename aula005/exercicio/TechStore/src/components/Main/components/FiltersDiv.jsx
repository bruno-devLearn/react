import { useContext } from "react";
import { FilterByCategory } from "./FiltersDiv/FilterByCategory";
import { FilterByOrder } from "./FiltersDiv/FilterByOrder";
import { FilterByPrice } from "./FiltersDiv/FilterByPrice";
import { StoreContext } from "../../../js/context";

import "./FiltersDiv/css/filtersDiv.css";

export function FiltersDiv() {
    const { storeState } = useContext(StoreContext);

    return (
        <>
            {storeState.divOpen === "category" ? (
                <FilterByCategory />
            ) : storeState.divOpen === "order" ? (
                <FilterByOrder />
            ) : storeState.divOpen === "price" ? (
                <FilterByPrice />
            ) : null}
        </>
    );
}
