import { FilterByCategory } from "./FiltersDiv/FilterByCategory";
import { FilterByPrice } from "./FiltersDiv/FilterByPrice";
import "./FiltersDiv/css/filtersDiv.css";

export function FiltersDiv() {
    return (
        <>
            <FilterByCategory />
            <FilterByPrice />
        </>
    );
}
