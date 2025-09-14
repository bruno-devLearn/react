import { useContext } from "react";
import { StoreContext } from "../../js/storeContext";
import { setData } from "../../js/localStore";

export function CartItem() {
    const { cart, get } = useContext(StoreContext);

    return (
        <div className="cart-item">
            <div className="itens">
                {cart.shopping.map((item) => {
                    return (
                        <div
                            className="cart-item__item"
                            key={crypto.randomUUID()}
                        >
                            <div className="cart-item__img">
                                <img src={item.thumbnail} />
                            </div>
                            <div className="cart-item__characteristics">
                                <h3>{item.title}</h3>
                                <span>
                                    {(() => {
                                        const oldPrice = item.price;
                                        const discountValue =
                                            (oldPrice / 100) *
                                            item.discountPercentage;
                                        const price = oldPrice - discountValue;

                                        return price.toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        });
                                    })()}
                                </span>
                                <div className="cart-item__actions">
                                    <div className="cart-item__count">
                                        <button className="cart-item__decrease">
                                            -
                                        </button>
                                        <span className="cart-item__value">
                                            1
                                        </span>
                                        <button className="cart-item__increase">
                                            +
                                        </button>
                                    </div>
                                    <div
                                        className="cart-item__delete"
                                        onClick={() => {
                                            const newArr =
                                                get.cartProducts.filter(
                                                    (product) =>
                                                        product.item !== item.id
                                                );

                                            get.setCartProducts(newArr);
                                            setData("products", newArr);
                                        }}
                                    >
                                        Remove
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="finish">
                <div className="purchase">
                    <span className="text">Total:</span>
                    <span className="value"></span>
                </div>
                <div className="finish-btn">
                    <button className="conclude">Finalize Purchase</button>
                </div>
            </div>
        </div>
    );
}
