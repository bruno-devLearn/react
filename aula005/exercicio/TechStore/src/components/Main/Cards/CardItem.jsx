import { useContext, useEffect } from "react";
import { GetContext } from "../../../js/context";
import { StatusContext } from "../statusComponents/StatusContext";

export function CardItem() {
    const { get } = useContext(GetContext);
    const { setStatus } = useContext(StatusContext);

    useEffect(() => {
        if (get.products?.items?.length > 0) {
            setStatus("sucess");
        }
    }, [get.products?.items, setStatus]);

    return (
        <>
            {get.products?.items?.length > 0 &&
                get.products.items.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="img">
                            <img src={item.thumbnail} />
                            {Math.floor(item.discountPercentage) > 0 && (
                                <div className="discount">
                                    -{Math.floor(item.discountPercentage)}%
                                </div>
                            )}
                        </div>
                        <div className="information">
                            <div className="category">
                                {item.tags.map((categ) => (
                                    <span
                                        className="text"
                                        key={crypto.randomUUID()}
                                    >
                                        {categ}
                                    </span>
                                ))}
                            </div>

                            <div className="info">
                                <h2>{item.title}</h2>
                                <div className="quality">
                                    <span className="material-symbols-outlined">
                                        star
                                    </span>
                                    <span className="text">
                                        {item.rating.toFixed(1)}
                                    </span>
                                    <span className="available">
                                        ({item.reviews.length} available)
                                    </span>
                                </div>
                                <div className="price">
                                    <span className="current">
                                        {(() => {
                                            const oldValue = item.price;
                                            const discountValue =
                                                (oldValue / 100) *
                                                item.discountPercentage;
                                            const value =
                                                oldValue - discountValue;

                                            return value.toLocaleString(
                                                "en-US",
                                                {
                                                    style: "currency",
                                                    currency: "USD",
                                                }
                                            );
                                        })()}
                                    </span>

                                    {Math.floor(item.discountPercentage) >
                                        0 && (
                                        <div className="old">
                                            <del>
                                                {item.price.toLocaleString(
                                                    "en-US",
                                                    {
                                                        style: "currency",
                                                        currency: "USD",
                                                    }
                                                )}
                                            </del>
                                        </div>
                                    )}
                                </div>
                                <button className="add-cart">
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                    <span className="text">Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}
