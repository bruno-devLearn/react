export function Description({ item }) {
    return <span className="description">{item.description}</span>;
}

export function Specifications({ item }) {
    return (
        <div className="specifications">
            <div className="left">
                <h2>Dimensions</h2>
                <div className="dimensions">
                    <span className="text">
                        Width: {item.dimensions.width}cm
                    </span>
                    <span className="text">
                        Height: {item.dimensions.height}cm
                    </span>
                    <span className="text">
                        Depth: {item.dimensions.depth}cm
                    </span>
                </div>
            </div>
            <div className="right">
                <h2>General Information</h2>
                <div className="item-info">
                    <span className="text">Weight: {item.weight}kg</span>
                    <span className="text">
                        Minimum order: {item.minimumOrderQuantity} units
                    </span>
                    <span className="text">Barcode: {item.meta.barcode}</span>
                </div>
            </div>
        </div>
    );
}

export function Reviews({ item }) {
    function formatDate(isoString) {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // mês começa em 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="reviews">
            {item.reviews.map((review) => {
                return (
                    <div className="review-div" key={crypto.randomUUID()}>
                        <div className="reviewer">
                            <div className="star">
                                {[...Array(5)].map((_, i) => {
                                    return (
                                        <span
                                            className={`material-symbols-outlined ${
                                                i + 1 <= review.rating
                                                    ? "completed"
                                                    : "not-completed"
                                            }`}
                                            key={crypto.randomUUID()}
                                        >
                                            star
                                        </span>
                                    );
                                })}
                            </div>
                            <div className="reviwer-name">
                                {review.reviewerName}
                            </div>
                            <div className="date">
                                {formatDate(review.date)}
                            </div>
                        </div>
                        <div className="review">
                            <p>{review.comment}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export function Delivery({ item }) {
    return (
        <div className="delivery">
            <div className="delivery-info">
                <h2>Delivery Information</h2>
                <span className="text">{item.shippingInformation}</span>
            </div>
            <div className="delivery-info">
                <h2>Warranty</h2>
                <span className="text">{item.warrantyInformation}</span>
            </div>
            <div className="delivery-info">
                <h2>Return Policy</h2>
                <span className="text">{item.returnPolicy}</span>
            </div>
        </div>
    );
}
