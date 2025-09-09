import { useContext } from "react";
import { StoreContext } from "../../../../js/storeContext";

export function FilterByPrice() {
    const { filters } = useContext(StoreContext);

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
                        {filters.prices.minUserPrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                        -
                        {filters.prices.maxUserPrice.toLocaleString("en-US", {
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
                        value={filters.prices.minUserPrice}
                        onChange={(e) => {
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
                        value={filters.prices.maxUserPrice}
                        onChange={(e) => {
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
                    <span className="references">{filters.assessment} ⭐</span>
                    <span className="references">5 ⭐</span>
                </div>
                <div className="slides">
                    <input
                        type="range"
                        className="slide"
                        min={0}
                        max={5}
                        step={0.1}
                        value={filters.assessment}
                        onChange={(e) => filters.setAssessment(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
