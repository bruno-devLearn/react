import "./item.css";
import { ItemInformations } from "./ItemInformation";
import { Link } from "react-router";

export function Item() {
    return (
        <div className="item-div">
            <div className="back">
                <Link to="/">
                    <button>
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                        <span className="text">return to the store</span>
                    </button>
                </Link>
            </div>
            <div className="item-display">
                <div className="item">
                    <div className="img">
                        <img src="#" />
                    </div>
                    <div className="information">
                        <div className="category">
                            <span className="text"></span>
                        </div>
                        <div className="infos">
                            <h2></h2>
                            <div className="rating">
                                <span className="rate">
                                    <span className="material-symbols-outlined">
                                        star
                                    </span>

                                    <span className="num-reviews">()</span>
                                </span>
                            </div>
                            <div className="prices">
                                <span className="current"></span>
                                <del className="old"></del>
                                <div className="discount">
                                    <span> OFF</span>
                                </div>
                            </div>
                            <div className="available">
                                <span className="text">availability:</span>
                                <span className="quant"></span>
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
                                    Brand: <span className="dark"></span>
                                </span>
                                <span className="weight light">
                                    Weight: <span className="dark"></span>
                                </span>
                            </div>
                            <div className="right">
                                <span className="sku light">
                                    SKU: <span className="dark"></span>
                                </span>
                                <span className="status light">
                                    Status: <span className="dark"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ItemInformations />
        </div>
    );
}
