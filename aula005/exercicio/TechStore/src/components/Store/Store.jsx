import "../../css/index.css";

import { FilterBar } from "./components/FilterBar";
import { FiltersDiv } from "./components/FiltersDiv";

export function Store() {
    return (
        <>
            <FilterBar />
            <FiltersDiv />
        </>
    );
}
