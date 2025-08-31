import { FilterByCategory } from "./FiltersDiv/FilterByCategory";
import { FilterByOrder } from "./FiltersDiv/FilterByOrder";
import { FilterByPrice } from "./FiltersDiv/FilterByPrice";
import "./FiltersDiv/css/filtersDiv.css";

export function FiltersDiv({
    divOpen,
    divRef,
    inputArr,
    setInputArr,
    inputRef,
}) {
    return (
        <>
            {divOpen === "category" ? (
                <FilterByCategory
                    divRef={divRef}
                    inputRef={inputRef}
                    inputArr={inputArr}
                    setInputArr={setInputArr}
                />
            ) : divOpen === "order" ? (
                <FilterByOrder divRef={divRef} />
            ) : divOpen === "price" ? (
                <FilterByPrice divRef={divRef} />
            ) : null}
        </>
    );
}
