import { useContext } from "react";
import { ErrorDiv, Loading, NotFound } from "../statusComponents/status";
import { CardItem } from "./CardItem";
import "./cards.css";
import { StatusContext } from "../statusComponents/StatusContext";
import { GetContext } from "../../../js/context";

export function Cards({ status }) {
    const { totalValue } = useContext(StatusContext);
    const { get } = useContext(GetContext);

    return (
        <div className="cards-div">
            <div className="quant">
                <span className="text">
                    {totalValue} products found (page {get.select + 1} of{" "}
                    {Math.ceil(totalValue / 30)})
                </span>
            </div>
            <div className="cards">
                {status === "loading" ? (
                    <Loading />
                ) : status === "error" ? (
                    <ErrorDiv />
                ) : status === "sucess" ? (
                    <CardItem />
                ) : null}
            </div>
        </div>
    );
}
