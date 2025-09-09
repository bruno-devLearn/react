export function Description() {
    return <span className="description"></span>;
}

export function Specifications() {
    return (
        <div className="specifications">
            <div className="left">
                <h2>Dimensions</h2>
                <div className="dimensions">
                    <span className="text">Width: </span>
                    <span className="text">Height: </span>
                    <span className="text">Depth: </span>
                </div>
            </div>
            <div className="right">
                <h2>General Information</h2>
                <div className="item-info">
                    <span className="text">Weight: </span>
                    <span className="text">Minimum order: </span>
                    <span className="text">Barcode: </span>
                </div>
            </div>
        </div>
    );
}

export function Reviews() {
    return (
        <div className="reviews">
            <div className="review-div">
                <div className="reviewer">
                    <div className="star">
                        <span className="material-symbols-outlined completed">
                            star
                        </span>
                        <span className="material-symbols-outlined completed">
                            star
                        </span>
                        <span className="material-symbols-outlined completed">
                            star
                        </span>
                        <span className="material-symbols-outlined not-completed">
                            star
                        </span>
                        <span className="material-symbols-outlined not-completed">
                            star
                        </span>
                    </div>
                    <div className="reviwer-name"></div>
                    <div className="date"></div>
                </div>
                <div className="review">
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export function Delivery() {
    return (
        <div className="delivery">
            <div className="delivery-info">
                <h2>Delivery Information</h2>
                <span className="text"></span>
            </div>
            <div className="delivery-info">
                <h2>Warranty</h2>
                <span className="text"></span>
            </div>
            <div className="delivery-info">
                <h2>Return Policy</h2>
                <span className="text"></span>
            </div>
        </div>
    );
}
