import { useContext, useEffect } from "react";
import "../store.css";
import { StoreContext } from "../../../js/context";
import { order } from "../../../js/start";

export function FilterBar() {
    const { filters, storeState } = useContext(StoreContext);

    useEffect(() => {
        function handleClick(event) {
            const clicouDentro = Object.values(storeState.divRef.current).some(
                (el) => el && el.contains(event.target)
            );

            if (!clicouDentro) {
                storeState.setDivOpen(null);
            }
        }

        if (
            filters.minUserPrice !== filters.minPrice ||
            filters.maxUserPrice !== filters.maxPrice ||
            storeState.inputArr.length > 0 ||
            filters.userAssessment > 0
        ) {
            storeState.setActive("flex");
        } else {
            storeState.setActive("none");
        }

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        storeState.inputArr,
        filters.minPrice,
        filters.minUserPrice,
        filters.maxPrice,
        filters.maxUserPrice,
        storeState.active,
        filters.userAssessment,
    ]);

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
                                e.stopPropagation(); // impede de cair no handleClick global
                                storeState.setDivOpen((prev) =>
                                    prev === "category" ? null : "category"
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
                                e.stopPropagation(); // impede de cair no handleClick global
                                storeState.setDivOpen((prev) =>
                                    prev === "price" ? null : "price"
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
                                            filters.minUserPrice !==
                                                filters.minPrice ||
                                            filters.maxUserPrice !==
                                                filters.maxPrice ||
                                            filters.userAssessment > 0
                                                ? "flex"
                                                : "none"
                                        }`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div
                            className="clear-filter"
                            style={{ display: `${storeState.active}` }}
                            onClick={() => {
                                Object.keys(
                                    storeState.inputRef.current
                                ).forEach((slug) => {
                                    const item =
                                        storeState.inputRef.current[slug];
                                    if (item?.el) item.el.checked = false;
                                    if (item) item.checked = false;
                                });

                                storeState.setInputArr([]);
                                filters.setMaxUserPrice(filters.maxPrice);
                                filters.setMinUserPrice(filters.minPrice);
                                filters.setUserAssessment(0);
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
                            storeState.setDivOpen((prev) =>
                                prev === "order" ? null : "order"
                            );
                        }}
                    >
                        <span className="filter">{order.value}</span>
                        <span className="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="active-filters"
                style={{
                    display: storeState.inputArr.length > 0 ? "flex" : "none",
                }}
            >
                <div className="filters">
                    <span className="active">Active Filters: </span>
                    {storeState.inputArr.map((item) => {
                        return (
                            <div className="filter" key={item}>
                                <div className="text">
                                    <span className="label">{item}</span>
                                    <span
                                        className="material-symbols-outlined"
                                        onClick={() => {
                                            storeState.setInputArr((prev) => {
                                                const newArr = prev.filter(
                                                    (i) => i !== item
                                                );

                                                Object.keys(
                                                    storeState.inputRef.current
                                                ).forEach((slug) => {
                                                    if (
                                                        !newArr.includes(slug)
                                                    ) {
                                                        const refItem =
                                                            storeState.inputRef
                                                                .current[slug];
                                                        if (refItem?.el)
                                                            refItem.el.checked = false;
                                                        if (refItem)
                                                            refItem.checked = false;
                                                    }
                                                });

                                                return newArr;
                                            });
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
