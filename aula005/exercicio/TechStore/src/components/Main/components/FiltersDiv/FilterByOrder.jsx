// <span className="material-symbols-outlined">check</span>

import { useContext } from "react";
import { StoreContext } from "../../../../js/context";

export function FilterByOrder() {
    const { storeState } = useContext(StoreContext);

    return (
        <div
            className="order-div fadeIn"
            ref={(el) => (storeState.divRef.current.order = el)}
        >
            <div className="select-item">
                <span className="text">Default</span>
            </div>
            <div className="select-item">
                <span className="text">Lowest Price</span>
            </div>
            <div className="select-item">
                <span className="text">Highest Price</span>
            </div>
            <div className="select-item">
                <span className="text">Best Rating</span>
            </div>
            <div className="select-item">
                <span className="text">Alphabetical</span>
            </div>
        </div>
    );
}
