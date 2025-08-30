import { ErrorDiv, Loading, NotFound } from "../statusComponents/status";
import { CardItem } from "./CardItem";
import "./cards.css";

export function Cards() {
    return (
        <div className="cards-div">
            <div className="quant">
                <span className="text">178 products found (page 1 of 6)</span>
            </div>
            <div className="cards">
                <CardItem />
            </div>
        </div>
    );
}
