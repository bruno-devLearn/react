export function FilterByPrice({ divRef }) {
    return (
        <div
            className="price-filters fadeIn"
            ref={(el) => (divRef.current.order = el)}
        >
            <div className="price">
                <h2>Price Range</h2>
                <div className="price-itens">
                    <span className="references">$0</span>
                    <span className="references">$0-3000</span>
                    <span className="references">$3000</span>
                </div>
                <div className="slides">
                    <h3>Minimum</h3>
                    <input type="range" className="slide" />
                    <h3>Maximum</h3>
                    <input type="range" className="slide" />
                </div>
            </div>
            <div className="rating">
                <h2>Minimum Assessment</h2>
                <div className="rate-itens">
                    <span className="references">0 ⭐</span>
                    <span className="references">0.0 ⭐</span>
                    <span className="references">5 ⭐</span>
                </div>
                <div className="slides">
                    <input type="range" className="slide" />
                </div>
            </div>
        </div>
    );
}
