import { useState } from "react";
import "./informations.css";
import {
    Delivery,
    Description,
    Reviews,
    Specifications,
} from "./Itens-informations/itensComponets";

export function ItemInformations({ item }) {
    const [select, setSelect] = useState("description");

    return (
        <div className="info">
            <div className="select">
                <span
                    className={`option ${
                        select === "description" ? "selected" : null
                    }`}
                    onClick={() => setSelect("description")}
                >
                    Description
                </span>
                <span
                    className={`option ${
                        select === "specifications" ? "selected" : null
                    }`}
                    onClick={() => setSelect("specifications")}
                >
                    Specifications
                </span>
                <span
                    className={`option ${
                        select === "reviews" ? "selected" : null
                    }`}
                    onClick={() => setSelect("reviews")}
                >
                    Reviews
                </span>
                <span
                    className={`option ${
                        select === "delivery" ? "selected" : null
                    }`}
                    onClick={() => setSelect("delivery")}
                >
                    Delivery and Warranty
                </span>
            </div>

            <div className="result">
                {select === "description" ? (
                    <Description item={item} />
                ) : select === "specifications" ? (
                    <Specifications item={item} />
                ) : select === "reviews" ? (
                    <Reviews item={item} />
                ) : select === "delivery" ? (
                    <Delivery item={item} />
                ) : null}
            </div>
        </div>
    );
}
