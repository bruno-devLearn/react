import { useContext } from "react";
import "./status.css";
import { StoreContext } from "../../../js/storeContext";

export function NotFound() {
    return (
        <div className="not-found">
            <span className="material-symbols-outlined">filter_alt</span>
            <h2>No products found</h2>
            <p>
                Try adjusting your filters or search to find what you're looking
                for.
            </p>
        </div>
    );
}

export function ErrorDiv() {
    const { again, setAgain } = useContext(StoreContext);

    return (
        <div className="error">
            <span className="material-symbols-outlined">cancel</span>
            <h2>Error! Try Again</h2>
            <button
                onClick={() =>
                    again === true ? setAgain(false) : setAgain(true)
                }
            >
                Try Again
            </button>
        </div>
    );
}

export function Loading() {
    return (
        <div className="loading">
            <span className="material-symbols-outlined">progress_activity</span>
            <span className="text">Loading</span>
        </div>
    );
}
