import { FilterByCategory } from "./FiltersDiv/FilterByCategory";
import { FilterByOrder } from "./FiltersDiv/FilterByOrder";
import { FilterByPrice } from "./FiltersDiv/FilterByPrice";
import "./FiltersDiv/css/filtersDiv.css";

export function FiltersDiv() {
    return (
        <>
            <FilterByCategory />
            <FilterByPrice />
            <FilterByOrder />
        </>
    );
}
