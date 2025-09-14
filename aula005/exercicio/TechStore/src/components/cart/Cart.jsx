import { CartItem } from "./cart-item";
import { Empty } from "./empty";
import "./cart.css";
import { useContext } from "react";
import { StoreContext } from "../../js/storeContext";

export function Cart() {
    const { cart, get } = useContext(StoreContext);

    return (
        <div className={`cart-div ${cart.cartAnimation}`}>
            <div className={`cart ${cart.cartAnimation}`}>
                <div className="title">
                    <h2>Shopping Cart</h2>
                    <div
                        className="close"
                        onClick={() => {
                            cart.setCartOpen(false);
                        }}
                    >
                        <span className="material-symbols-outlined">close</span>
                    </div>
                </div>
                {get.cartProducts.length > 0 ? <CartItem /> : <Empty />}
            </div>

            <div className="background"></div>
        </div>
    );
}
