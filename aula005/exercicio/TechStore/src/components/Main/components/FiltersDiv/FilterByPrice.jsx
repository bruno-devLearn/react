import { useContext } from "react";
import { StoreContext } from "../../../../js/context";
import { assessment, userPrices } from "../../../../js/start";

export function FilterByPrice() {
    const { filters, storeState } = useContext(StoreContext);

    const maxPriceFormated = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(filters.maxPrice);

    const minPriceFormated = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(filters.minPrice);

    return (
        <div
            className="price-filters fadeIn"
            ref={(el) => (storeState.divRef.current.order = el)}
        >
            <div className="price">
                <h2>Price Range</h2>
                <div className="price-itens">
                    <span className="references">{minPriceFormated}</span>
                    <span className="references">
                        ${filters.minUserPrice}-${filters.maxUserPrice}
                    </span>
                    <span className="references">{maxPriceFormated}</span>
                </div>
                <div className="slides">
                    <h3>Minimum</h3>
                    <input
                        type="range"
                        className="slide"
                        min={filters.minPrice}
                        max={filters.maxPrice}
                        step={0.01}
                        value={filters.minUserPrice}
                        onInput={(e) => {
                            const value = Number(e.target.value);
                            filters.setMinUserPrice(value);
                            userPrices.min = value;

                            value > filters.maxUserPrice
                                ? filters.setMaxUserPrice(value)
                                : null;
                        }}
                    />
                    <h3>Maximum</h3>
                    <input
                        type="range"
                        className="slide"
                        min={filters.minPrice}
                        max={filters.maxPrice}
                        step={0.01}
                        value={filters.maxUserPrice}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            filters.setMaxUserPrice(value);
                            userPrices.max = value;

                            filters.minUserPrice > value
                                ? filters.setMinUserPrice(value)
                                : null;
                        }}
                    />
                </div>
            </div>
            <div className="rating">
                <h2>Minimum Assessment</h2>
                <div className="rate-itens">
                    <span className="references">0 ⭐</span>
                    <span className="references">
                        {filters.userAssessment} ⭐
                    </span>
                    <span className="references">5 ⭐</span>
                </div>
                <div className="slides">
                    <input
                        type="range"
                        className="slide"
                        min={0}
                        max={5}
                        step={0.1}
                        value={filters.userAssessment}
                        onChange={(e) => {
                            filters.setUserAssessment(e.target.value);
                            assessment.value = e.target.value;
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
