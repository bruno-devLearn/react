import { FilterByCategory } from "./FiltersDiv/FilterByCategory";
import { FilterByOrder } from "./FiltersDiv/FilterByOrder";
import { FilterByPrice } from "./FiltersDiv/FilterByPrice";
import "./FiltersDiv/css/filtersDiv.css";

export function FiltersDiv({ open, setOpen }) {
    let content;

    switch (open) {
        case "category":
            content = <FilterByCategory />;
            break;
        case "specific":
            content = <FilterByPrice />;
            break;
        case "default":
            content = <FilterByOrder setOpen={setOpen} />;
            break;
        default:
            content = null;
    }

    return <>{content}</>;
}
