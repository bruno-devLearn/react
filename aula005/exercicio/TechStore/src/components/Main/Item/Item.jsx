import { useGetUrlProduct } from "../../../js/gets";
import "./item.css";
import { ItemInformations } from "./ItemInformation";
import { Link } from "react-router";

export function Item() {
    const itemArray = useGetUrlProduct();
    const item = itemArray?.[0];

    return (
        <>
            {item && (
                <div className="item-div">
                    <div className="back">
                        <Link to="/">
                            <button>
                                <span className="material-symbols-outlined">
                                    arrow_back
                                </span>
                                <span className="text">
                                    return to the store
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div className="item-display">
                        <div className="item">
                            <div className="img">
                                <img src={item.thumbnail} />
                            </div>
                            <div className="information">
                                <div className="category">
                                    {item.tags.map((categ) => (
                                        <span
                                            className="text"
                                            key={crypto.randomUUID()}
                                        >
                                            {categ}
                                        </span>
                                    ))}
                                </div>
                                <div className="infos">
                                    <h2>{item.title}</h2>
                                    <div className="rating">
                                        <span className="rate">
                                            <span className="material-symbols-outlined">
                                                star
                                            </span>
                                            {item.rating.toFixed(1)}
                                            <span className="num-reviews">
                                                ({item.reviews.length}{" "}
                                                available)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="prices">
                                        <span className="current">
                                            {(() => {
                                                const oldValue = item.price;
                                                const discountValue =
                                                    (oldValue / 100) *
                                                    item.discountPercentage;
                                                const value =
                                                    oldValue - discountValue;
                                                return value.toLocaleString(
                                                    "en-US",
                                                    {
                                                        style: "currency",
                                                        currency: "USD",
                                                    }
                                                );
                                            })()}
                                        </span>
                                        {Math.floor(item.discountPercentage) >
                                            0 && (
                                            <>
                                                <del className="old">
                                                    {item.price.toLocaleString(
                                                        "en-US",
                                                        {
                                                            style: "currency",
                                                            currency: "USD",
                                                        }
                                                    )}
                                                </del>
                                                <div className="discount">
                                                    <span>
                                                        -
                                                        {Math.floor(
                                                            item.discountPercentage
                                                        )}
                                                        % OFF
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="available">
                                        <span className="text">
                                            availability:
                                        </span>
                                        {item.availabilityStatus !==
                                        "Out of Stock" ? (
                                            <span className="quant">
                                                {item.stock} in stock
                                            </span>
                                        ) : (
                                            <span className="quant">
                                                {item.availabilityStatus}
                                            </span>
                                        )}
                                    </div>
                                    <div className="cont">
                                        <span className="text">Amount:</span>
                                        <div className="buttons">
                                            <button className="decreased">
                                                -
                                            </button>
                                            <span className="value">1</span>
                                            <button className="increase">
                                                +
                                            </button>
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
                                            Brand:{" "}
                                            <span className="dark">
                                                {item.brand}
                                            </span>
                                        </span>
                                        <span className="weight light">
                                            Weight:{" "}
                                            <span className="dark">
                                                {item.weight}kg
                                            </span>
                                        </span>
                                    </div>
                                    <div className="right">
                                        <span className="sku light">
                                            SKU:{" "}
                                            <span className="dark">
                                                {item.sku}
                                            </span>
                                        </span>
                                        <span className="status light">
                                            Status:{" "}
                                            <span className="dark">
                                                {item.availabilityStatus}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ItemInformations item={item} />
                </div>
            )}
        </>
    );
}
