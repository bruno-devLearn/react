import { useContext, useState } from "react";
import { StoreContext } from "../../../../js/storeContext";

export function FilterByPrice() {
    const { filters, search } = useContext(StoreContext);

    // estados locais para arrastar sem travar
    const [localMin, setLocalMin] = useState(filters.prices.minUserPrice);
    const [localMax, setLocalMax] = useState(filters.prices.maxUserPrice);
    const [localAssessment, setLocalAssessment] = useState(filters.assessment);

    return (
        <div
            className="price-filters fadeIn"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="price">
                <h2>Price Range</h2>
                <div className="price-itens">
                    <span className="references">
                        {filters.prices.minPrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </span>
                    <span className="references">
                        {localMin.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                        -
                        {localMax.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </span>
                    <span className="references">
                        {filters.prices.maxPrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </span>
                </div>

                <div className="slides">
                    <h3>Minimum</h3>
                    <input
                        type="range"
                        className="slide"
                        min={filters.prices.minPrice}
                        max={filters.prices.maxPrice}
                        step={0.01}
                        value={localMin}
                        onChange={(e) => {
                            setLocalMin(Number(e.target.value));
                            search.setInputSearch("");
                            search.setInputSearchRaw("");
                        }}
                        onMouseUp={(e) => {
                            const newMin = Number(e.target.value);
                            filters.setPrices((prev) => ({
                                ...prev,
                                minUserPrice: newMin,
                                maxUserPrice: Math.max(
                                    newMin,
                                    prev.maxUserPrice
                                ),
                            }));
                        }}
                    />

                    <h3>Maximum</h3>
                    <input
                        type="range"
                        className="slide"
                        min={filters.prices.minPrice}
                        max={filters.prices.maxPrice}
                        step={0.01}
                        value={localMax}
                        onChange={(e) => {
                            setLocalMax(Number(e.target.value));
                            search.setInputSearch("");
                            search.setInputSearchRaw("");
                        }}
                        onMouseUp={(e) => {
                            const newMax = Number(e.target.value);
                            filters.setPrices((prev) => ({
                                ...prev,
                                maxUserPrice: newMax,
                                minUserPrice: Math.min(
                                    newMax,
                                    prev.minUserPrice
                                ),
                            }));
                        }}
                    />
                </div>
            </div>

            <div className="rating">
                <h2>Minimum Assessment</h2>
                <div className="rate-itens">
                    <span className="references">0 ⭐</span>
                    <span className="references">{localAssessment} ⭐</span>
                    <span className="references">5 ⭐</span>
                </div>
                <div className="slides">
                    <input
                        type="range"
                        className="slide"
                        min={0}
                        max={5}
                        step={0.1}
                        value={localAssessment}
                        onChange={(e) => {
                            setLocalAssessment(Number(e.target.value));
                            search.setInputSearch("");
                            search.setInputSearchRaw("");
                        }}
                        onMouseUp={(e) =>
                            filters.setAssessment(Number(e.target.value))
                        }
                    />
                </div>
            </div>
        </div>
    );
}
