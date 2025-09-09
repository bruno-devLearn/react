import { useContext } from "react";
import "./cards.css";
import { StoreContext } from "../../../js/storeContext";

/* 
<div className="card">
    <div className="img">
        <img src="#" />
        <span className="discount">-10%</span>
    </div>
    <div className="information">
        <div className="category">
            <span className="text">beauty</span>
        </div>
        <div className="info">
            <h2>Essence Mascara Lash</h2>
            <div className="quality">
                <span class="material-symbols-outlined">
                    star
                </span>
                <span className="text">2.6</span>
                <span className="available">
                    (99 available)
                </span>
            </div>
            <div className="price">
                <span className="current">$8.94</span>
                <span className="old">
                    <del>$9.99</del>
                </span>
            </div>
            <button className="add-cart">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
                <span className="text">Add</span>
            </button>
        </div>
    </div>
</div>
*/

export function Cards() {
    const { get, page } = useContext(StoreContext);

    return (
        <div className="cards-div">
            <div className="quant">
                <span className="text">
                    {get.products.total} products found (page {page + 1} of{" "}
                    {get.products.index})
                </span>
            </div>
            <div className="cards"></div>
        </div>
    );
}
