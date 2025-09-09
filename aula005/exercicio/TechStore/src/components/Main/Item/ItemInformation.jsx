import "./informations.css";
import {
    Delivery,
    Description,
    Reviews,
    Specifications,
} from "./Itens-informations/itensComponets";

export function ItemInformations() {
    return (
        <div className="info">
            <div className="select">
                <span className="option selected">Description</span>
                <span className="option">Specifications</span>
                <span className="option">Reviews</span>
                <span className="option">Delivery and Warranty</span>
            </div>

            <div className="result"></div>
        </div>
    );
}
