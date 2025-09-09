import { useContext } from "react";
import { StoreContext } from "../../../../js/storeContext";

export function FilterByOrder({ setOpen }) {
    const { filters } = useContext(StoreContext);

    return (
        <div className="order-div fadeIn" onClick={(e) => e.stopPropagation()}>
            <div
                className="select-item"
                onClick={() => {
                    filters.item !== "Default"
                        ? filters.setItem("Default")
                        : null;
                    setOpen("");
                }}
            >
                <span className="text">Default</span>
                {filters.item === "Default" ? (
                    <span className="material-symbols-outlined">check</span>
                ) : null}
            </div>
            <div
                className="select-item"
                onClick={() => {
                    filters.item !== "Lowest Price"
                        ? filters.setItem("Lowest Price")
                        : null;
                    setOpen("");
                }}
            >
                <span className="text">Lowest Price</span>
                {filters.item === "Lowest Price" ? (
                    <span className="material-symbols-outlined">check</span>
                ) : null}
            </div>
            <div
                className="select-item"
                onClick={() => {
                    filters.item !== "Highest Price"
                        ? filters.setItem("Highest Price")
                        : null;
                    setOpen("");
                }}
            >
                <span className="text">Highest Price</span>
                {filters.item === "Highest Price" ? (
                    <span className="material-symbols-outlined">check</span>
                ) : null}
            </div>
            <div
                className="select-item"
                onClick={() => {
                    filters.item !== "Best Rating"
                        ? filters.setItem("Best Rating")
                        : null;
                    setOpen("");
                }}
            >
                <span className="text">Best Rating</span>
                {filters.item === "Best Rating" ? (
                    <span className="material-symbols-outlined">check</span>
                ) : null}
            </div>
            <div
                className="select-item"
                onClick={() => {
                    filters.item !== "Alphabetical"
                        ? filters.setItem("Alphabetical")
                        : null;
                    setOpen("");
                }}
            >
                <span className="text">Alphabetical</span>
                {filters.item === "Alphabetical" ? (
                    <span className="material-symbols-outlined">check</span>
                ) : null}
            </div>
        </div>
    );
}
