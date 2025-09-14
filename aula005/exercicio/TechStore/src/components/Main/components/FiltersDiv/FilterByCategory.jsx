import { useContext } from "react";
import { StoreContext } from "../../../../js/storeContext";

export function FilterByCategory() {
    const { get, filters, search } = useContext(StoreContext);

    function removeCategory(category) {
        filters.setSelected((selected) =>
            selected.filter((select) => select !== category)
        );
    }

    function addCategory(category) {
        filters.setSelected((prev) => [...prev, category]);
    }

    return (
        <div className="categories fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="title">
                <h2>Categories</h2>
                <span
                    className="clear"
                    style={{
                        display: `${
                            filters.selected.length > 0 ? "block" : "none"
                        }`,
                    }}
                    onClick={() => {
                        filters.setSelected([]);
                        get.setUrls([]);
                    }}
                >
                    Clear
                </span>
            </div>
            <div className="scroll">
                {get.categories.map((category) => (
                    <div className="select" key={category}>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={
                                    filters.selected.includes(category) === true
                                        ? true
                                        : false
                                }
                                onChange={() => {
                                    filters.selected.includes(category) !==
                                    false
                                        ? removeCategory(category)
                                        : addCategory(category);

                                    search.setInputSearch(""); // limpa query
                                    search.setInputSearchRaw(""); // limpa input visível
                                }}
                            />

                            <span className="material-symbols-outlined">
                                check
                            </span>
                            <span className="text">{category}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
