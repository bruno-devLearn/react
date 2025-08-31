import { useEffect, useState } from "react";
import "../store.css";

export function FilterBar({
    setDivOpen,
    divRef,
    inputArr,
    setInputArr,
    inputRef,
}) {
    const [active, setActive] = useState("none");

    useEffect(() => {
        function handleClick(event) {
            const clicouDentro = Object.values(divRef.current).some(
                (el) => el && el.contains(event.target)
            );

            if (!clicouDentro) {
                setDivOpen(null);
            }
        }

        inputArr.length > 0 ? setActive("flex") : setActive("none");

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputArr]);

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
                                setDivOpen((prev) =>
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
                                setDivOpen((prev) =>
                                    prev === "price" ? null : "price"
                                );
                            }}
                        >
                            <div className="filter">
                                <span className="material-symbols-outlined">
                                    tune
                                </span>
                                <span className="text">Filters</span>
                                <div className="invisible-point"></div>
                            </div>
                        </div>
                        <div
                            className="clear-filter"
                            style={{ display: `${active}` }}
                            onClick={() => {
                                Object.keys(inputRef.current).forEach(
                                    (slug) => {
                                        const item = inputRef.current[slug];
                                        if (item?.el) item.el.checked = false;
                                        if (item) item.checked = false;
                                    }
                                );

                                setInputArr([]);
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
                            setDivOpen((prev) =>
                                prev === "order" ? null : "order"
                            );
                        }}
                    >
                        <span className="filter">Default</span>
                        <span className="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="active-filters"
                style={{
                    display: inputArr.length > 0 ? "flex" : "none",
                }}
            >
                <div className="filters">
                    <span className="active">Active Filters: </span>
                    {inputArr.map((item) => {
                        return (
                            <div className="filter" key={item}>
                                <div className="text">
                                    <span className="label">{item}</span>
                                    <span
                                        className="material-symbols-outlined"
                                        onClick={() => {
                                            setInputArr((prev) => {
                                                const newArr = prev.filter(
                                                    (i) => i !== item
                                                );

                                                Object.keys(
                                                    inputRef.current
                                                ).forEach((slug) => {
                                                    if (
                                                        !newArr.includes(slug)
                                                    ) {
                                                        const refItem =
                                                            inputRef.current[
                                                                slug
                                                            ];
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
