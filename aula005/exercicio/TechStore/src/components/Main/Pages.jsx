import { useContext } from "react";
import "./pages.css";
import { StoreContext } from "../../js/storeContext";

export function Pages() {
    const { get, page, setPage } = useContext(StoreContext);

    return (
        <div className="pages-div">
            <div className="pages">
                <span className="back">
                    <span
                        className="material-symbols-outlined"
                        onClick={() =>
                            page > 0 ? setPage((prev) => prev - 1) : null
                        }
                    >
                        arrow_back_ios
                    </span>
                </span>
                {[...Array(get.products.index)].map((_, i) => (
                    <span
                        className={`page ${page === i ? "select" : null}`}
                        onClick={() => setPage(i)}
                        key={i}
                    >
                        {i + 1}
                    </span>
                ))}

                <span className="next">
                    <span
                        className="material-symbols-outlined"
                        onClick={() =>
                            page < get.products.index - 1
                                ? setPage((prev) => prev + 1)
                                : null
                        }
                    >
                        arrow_forward_ios
                    </span>
                </span>
            </div>
        </div>
    );
}
