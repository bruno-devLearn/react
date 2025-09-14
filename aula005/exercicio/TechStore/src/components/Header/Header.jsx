import "./header.css";
import "../../css/index.css";
import { Link } from "react-router";
import { useContext } from "react";
import { StoreContext } from "../../js/storeContext";

export function Header() {
    const { cart } = useContext(StoreContext);

    return (
        <header>
            <div className="header">
                <div className="flex-itens">
                    <div className="logo">
                        <Link to={"/"}>
                            <span className="material-symbols-outlined">
                                shopping_bag
                            </span>
                            <h1>TechStore</h1>
                        </Link>
                    </div>
                    <div
                        className="shopping-cart"
                        onClick={() => {
                            cart.setCartOpen(true);
                            cart.setCartAnimation("open");
                        }}
                    >
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
