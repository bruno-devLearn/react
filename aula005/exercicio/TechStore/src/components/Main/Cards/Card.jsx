import { ErrorDiv, Loading, NotFound } from "../statusComponents/status";
import { CardItem } from "./CardItem";
import "./cards.css";

export function Cards({ status }) {
    return (
        <div className="cards-div">
            <div className="quant">
                <span className="text">178 products found (page 1 of 6)</span>
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
