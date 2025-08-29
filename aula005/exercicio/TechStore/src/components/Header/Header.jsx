import "./header.css";
import "../../css/index.css";
import { Link } from "react-router";

export function Header() {
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
                    <div className="shopping-cart">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <div className="quant"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
