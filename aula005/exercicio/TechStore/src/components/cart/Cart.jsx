import { CartItem } from "./cart-item";
import { Empty } from "./empty";
import "./cart.css";

export function Cart() {
    return (
        <div className="cart-div">
            <div className="cart">
                <div className="title">
                    <h2>Shopping Cart</h2>
                    <div className="close">
                        <span className="material-symbols-outlined">close</span>
                    </div>
                </div>
                <Empty />
            </div>

            <div className="background"></div>
        </div>
    );
}
