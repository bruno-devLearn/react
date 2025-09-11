import { useContext } from "react";
import "../store.css";
import { StoreContext } from "../../../js/storeContext";

export function FilterBar({ setOpen }) {
    const { filters, get, search } = useContext(StoreContext);

    return (
        <div className="filter-bar">
            <div className="inputFilter">
                <div className="input">
                    <span className="material-symbols-outlined">search</span>
                    <input
                        type="text"
                        placeholder="Search Products..."
                        value={search.inputSearchRaw} // só exibe o que o usuário digitou
                        onInput={(e) => {
                            const raw = e.target.value;
                            search.setInputSearchRaw(raw); // atualiza o input
                            const query = raw
                                .toLowerCase()
                                .trim()
                                .replace(/\s+/g, "-");
                            search.setInputSearch(query); // só atualiza a query se for pra buscar
                            filters.setSelected([]);
                            filters.setAssessment(0);
                            get.setUrls([]);
                            filters.setPrices((prev) => ({
                                ...prev,
                                minUserPrice: filters.prices.minPrice,
                                maxUserPrice: filters.prices.maxPrice,
                            }));
                        }}
                    />
                </div>
            </div>
            <div className="filters">
                <div className="flex-itens">
                    <div className="specific-filters">
                        <div
                            className="select-category border"
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen((prev) =>
                                    prev !== "category" ? "category" : ""
                                );
                            }}
                        >
                            <span className="text">
                                {filters.selected.length === 0
                                    ? "All categories..."
                                    : filters.selected.length === 1
                                    ? filters.selected[0]
                                    : `${filters.selected.length} Categories`}
                            </span>

                            <span className="material-symbols-outlined">
                                keyboard_arrow_down
                            </span>
                        </div>
                        <div
                            className="specific-filter border"
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen((prev) =>
                                    prev !== "specific" ? "specific" : ""
                                );
                            }}
                        >
                            <div className="filter">
                                <span className="material-symbols-outlined">
                                    tune
                                </span>
                                <span className="text">Filters</span>
                                <div
                                    className="invisible-point"
                                    style={{
                                        display: `${
                                            filters.prices.minUserPrice !==
                                                filters.prices.minPrice ||
                                            filters.prices.maxUserPrice !==
                                                filters.prices.maxPrice ||
                                            filters.assessment !== 0
                                                ? "block"
                                                : "none"
                                        }`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div
                            className="clear-filter"
                            style={{
                                display: `${
                                    filters.selected.length > 0 ||
                                    filters.prices.minUserPrice !==
                                        filters.prices.minPrice ||
                                    filters.prices.maxUserPrice !==
                                        filters.prices.maxPrice ||
                                    filters.assessment !== 0
                                        ? "flex"
                                        : "none"
                                }`,
                            }}
                            onClick={() => {
                                filters.setSelected([]);
                                filters.setAssessment(0);
                                get.setUrls([]);
                                filters.setPrices((prev) => ({
                                    ...prev,
                                    minUserPrice: filters.prices.minPrice,
                                    maxUserPrice: filters.prices.maxPrice,
                                }));
                            }}
                        >
                            <span className="material-symbols-outlined">
                                close
                            </span>
                            <span className="text">Clear</span>
                        </div>
                    </div>
                    <div
                        className="default-filters"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen((prev) =>
                                prev !== "default" ? "default" : ""
                            );
                        }}
                    >
                        <span className="filter">{filters.item}</span>
                        <span className="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="active-filters"
                style={{
                    display: `${
                        filters.selected.length > 0 ? "block" : "none"
                    }`,
                }}
            ></div>
        </div>
    );
}
