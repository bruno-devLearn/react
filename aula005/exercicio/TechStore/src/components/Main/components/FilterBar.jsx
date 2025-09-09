import "../store.css";

export function FilterBar({ setOpen }) {
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
                                <div className="invisible-point"></div>
                            </div>
                        </div>
                        <div className="clear-filter">
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
                        <span className="filter">Default</span>
                        <span className="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </div>
                </div>
            </div>
            <div className="active-filters">
                <div className="filters">
                    <span className="active">Active Filters:</span>
                </div>
            </div>
        </div>
    );
}
