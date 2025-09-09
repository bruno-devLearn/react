import { useRef } from "react";
import { FilterByCategory } from "./FiltersDiv/FilterByCategory";
import { FilterByOrder } from "./FiltersDiv/FilterByOrder";
import { FilterByPrice } from "./FiltersDiv/FilterByPrice";
import "./FiltersDiv/css/filtersDiv.css";

export function FiltersDiv({ open }) {
    const inputRef = useRef({});

    let content;

    switch (open) {
        case "category":
            content = <FilterByCategory inputRef={inputRef} />;
            break;
        case "specific":
            content = <FilterByPrice />;
            break;
        case "default":
            content = <FilterByOrder />;
            break;
        default:
            content = null;
    }

    return <>{content}</>;
}
