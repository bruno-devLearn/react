import "./item.css";

export function Item() {
    return (
        <div className="item-div">
            <div className="back">
                <button>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                    <span className="text">return to the store</span>
                </button>
            </div>
            <div className="item-display">
                <div className="item">
                    <div className="img">
                        <img src="#" />
                    </div>
                    <div className="information">
                        <div className="category">
                            <span className="text">Beauty</span>
                        </div>
                        <div className="infos">
                            <h2>Essence Mascara Lash Princess</h2>
                            <div className="rating">
                                <span className="rate">
                                    <span className="material-symbols-outlined">
                                        star
                                    </span>
                                    2.6
                                    <span className="num-reviews">
                                        (3 reviews)
                                    </span>
                                </span>
                            </div>
                            <div className="prices">
                                <span className="current">$8.94</span>
                                <del className="old">$9.99</del>
                                <div className="discount">
                                    <span>-10% OFF</span>
                                </div>
                            </div>
                            <div className="available">
                                <span className="text">availability:</span>
                                <span className="quant">99 in stock</span>
                            </div>
                            <div className="cont">
                                <span className="text">Amount:</span>
                                <div className="buttons">
                                    <button className="decreased">-</button>
                                    <span className="value">1</span>
                                    <button className="increase">+</button>
                                </div>
                            </div>
                        </div>
                        <button className="add">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            Add to Cart
                        </button>
                        <div className="characteristics">
                            <div className="left">
                                <span className="brand light">
                                    Brand: <span className="dark">Essence</span>
                                </span>
                                <span className="weight light">
                                    Weight: <span className="dark">4kg</span>
                                </span>
                            </div>
                            <div className="right">
                                <span className="sku light">
                                    SKU:{" "}
                                    <span className="dark">
                                        BEA-ESS-ESS-001
                                    </span>
                                </span>
                                <span className="status light">
                                    Status:{" "}
                                    <span className="dark">In Stock</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
