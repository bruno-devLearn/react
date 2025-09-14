import { useContext } from "react";
import "./item.css";
import { StoreContext } from "../../../js/storeContext";
import { Link } from "react-router";
import { ItemInformations } from "./ItemInformation";
import { setData } from "../../../js/localStore";
import { Cart } from "../../cart/Cart";

export function Item() {
    const { search, get, cart } = useContext(StoreContext);

    const item = get.products.products?.[0];

    return (
        <>
            {item ? (
                <>
                    <div className="item-div">
                        <div className="back">
                            <Link
                                to={"/"}
                                onClick={() => {
                                    search.setInputSearch("");
                                    search.setInputSearchRaw("");
                                }}
                            >
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
                                        <span className="text">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="infos">
                                        <h2>{item.title}</h2>
                                        <div className="rating">
                                            <span className="rate">
                                                <span className="material-symbols-outlined">
                                                    star
                                                </span>
                                                {Math.floor(item.rating * 10) /
                                                    10}
                                                <span className="num-reviews">
                                                    ({item.reviews.length}{" "}
                                                    available)
                                                </span>
                                            </span>
                                        </div>
                                        <div className="prices">
                                            <span className="current">
                                                {(() => {
                                                    const oldPrice = item.price;
                                                    const discountValue =
                                                        (oldPrice / 100) *
                                                        item.discountPercentage;
                                                    const price =
                                                        oldPrice -
                                                        discountValue;

                                                    return price.toLocaleString(
                                                        "en-US",
                                                        {
                                                            style: "currency",
                                                            currency: "USD",
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2,
                                                        }
                                                    );
                                                })()}
                                            </span>
                                            <del className="old">
                                                {item.price}
                                            </del>
                                            <div className="discount">
                                                {Math.ceil(
                                                    item.discountPercentage
                                                ) > 0 ? (
                                                    <span>
                                                        -
                                                        {Math.ceil(
                                                            item.discountPercentage
                                                        )}
                                                        % OFF
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="available">
                                            <span className="text">
                                                availability:
                                            </span>
                                            <span className="quant">
                                                {item.availabilityStatus ===
                                                "Out of Stock"
                                                    ? item.availabilityStatus
                                                    : `${item.stock} in stock`}
                                            </span>
                                        </div>
                                        <div className="cont">
                                            <span className="text">
                                                Amount:
                                            </span>
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
                                    <button
                                        className="add"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();

                                            const exists =
                                                get.cartProducts.some(
                                                    (p) => p.item === item.id
                                                );

                                            if (!exists) {
                                                const updated = [
                                                    ...get.cartProducts,
                                                    { item: item.id },
                                                ];
                                                get.setCartProducts(updated);
                                                setData("products", updated);
                                            }
                                        }}
                                    >
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
                    </div>

                    <ItemInformations item={item} />
                    {cart.cartOpen === true ? <Cart /> : null}
                </>
            ) : null}
        </>
    );
}
