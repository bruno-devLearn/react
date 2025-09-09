import { useContext } from "react";
import "../store.css";
import { StoreContext } from "../../../js/storeContext";

export function FilterBar({ setOpen }) {
    const { filters, get } = useContext(StoreContext);

    return (
        <div className="filter-bar">
            <div className="inputFilter">
                <div className="input">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" placeholder="Search Products..." />
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
                            <span className="text">All categories...</span>
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
            >
                <div className="filters">
                    <span className="active">Active Filters:</span>
                    {filters.selected.map((selected) => {
                        return (
                            <div className="filter" key={crypto.randomUUID()}>
                                <div className="text">
                                    {selected}

                                    <span
                                        className="material-symbols-outlined"
                                        onClick={() => {
                                            filters.setSelected((select) =>
                                                select.filter(
                                                    (item) => item !== selected
                                                )
                                            );
                                        }}
                                    >
                                        close
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
