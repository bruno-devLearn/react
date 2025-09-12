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
                        select !== "description" ? null : "selected"
                    }`}
                    onClick={() =>
                        select !== "description"
                            ? setSelect("description")
                            : null
                    }
                >
                    Description
                </span>
                <span
                    className={`option ${
                        select !== "specifications" ? null : "selected"
                    }`}
                    onClick={() =>
                        select !== "specifications"
                            ? setSelect("specifications")
                            : null
                    }
                >
                    Specifications
                </span>
                <span
                    className={`option ${
                        select !== "reviews" ? null : "selected"
                    }`}
                    onClick={() =>
                        select !== "reviews" ? setSelect("reviews") : null
                    }
                >
                    Reviews
                </span>
                <span
                    className={`option ${
                        select !== "delivery" ? null : "selected"
                    }`}
                    onClick={() =>
                        select !== "delivery" ? setSelect("delivery") : null
                    }
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
                ) : (
                    <Delivery item={item} />
                )}
            </div>
        </div>
    );
}
