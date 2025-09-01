import { useContext } from "react";
import { StoreContext } from "../../../../js/context";
import { order } from "../../../../js/start";

export function FilterByOrder() {
    const { storeState } = useContext(StoreContext);

    return (
        <div
            className="order-div fadeIn"
            ref={(el) => (storeState.divRef.current.order = el)}
        >
            <div
                className="select-item"
                onClick={() => {
                    const newSelect = "Default";
                    storeState.setSelect(newSelect);
                    order.value = newSelect;
                    storeState.setDivOpen("null");
                }}
            >
                <span className="text">Default</span>
                <span
                    className="material-symbols-outlined"
                    style={{
                        display: `${
                            storeState.select === "Default" ? "block" : "none"
                        }`,
                    }}
                >
                    check
                </span>
            </div>
            <div
                className="select-item"
                onClick={() => {
                    const newSelect = "Lowest Price";
                    storeState.setSelect(newSelect);
                    order.value = newSelect;
                    storeState.setDivOpen("null");
                }}
            >
                <span className="text">Lowest Price</span>
                <span
                    className="material-symbols-outlined"
                    style={{
                        display: `${
                            storeState.select === "Lowest Price"
                                ? "block"
                                : "none"
                        }`,
                    }}
                >
                    check
                </span>
            </div>
            <div
                className="select-item"
                onClick={() => {
                    const newSelect = "Highest Price";
                    storeState.setSelect(newSelect);
                    order.value = newSelect;
                    storeState.setDivOpen("null");
                }}
            >
                <span className="text">Highest Price</span>
                <span
                    className="material-symbols-outlined"
                    style={{
                        display: `${
                            storeState.select === "Highest Price"
                                ? "block"
                                : "none"
                        }`,
                    }}
                >
                    check
                </span>
            </div>
            <div
                className="select-item"
                onClick={() => {
                    const newSelect = "Best Rating";
                    storeState.setSelect(newSelect);
                    order.value = newSelect;
                    storeState.setDivOpen("null");
                }}
            >
                <span className="text">Best Rating</span>
                <span
                    className="material-symbols-outlined"
                    style={{
                        display: `${
                            storeState.select === "Best Rating"
                                ? "block"
                                : "none"
                        }`,
                    }}
                >
                    check
                </span>
            </div>
            <div
                className="select-item"
                onClick={() => {
                    const newSelect = "Alphabetical";
                    storeState.setSelect(newSelect);
                    order.value = newSelect;
                    storeState.setDivOpen("null");
                }}
            >
                <span className="text">Alphabetical</span>
                <span
                    className="material-symbols-outlined"
                    style={{
                        display: `${
                            storeState.select === "Alphabetical"
                                ? "block"
                                : "none"
                        }`,
                    }}
                >
                    check
                </span>
            </div>
        </div>
    );
}
