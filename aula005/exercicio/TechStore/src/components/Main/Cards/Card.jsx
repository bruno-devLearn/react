import { StoreContext } from "../../../js/storeContext";
import { NavLink } from "react-router";
import { useContext, useRef, useEffect } from "react";
import "./cards.css";
import { setData } from "../../../js/localStore";

export function Cards() {
    const { get, page } = useContext(StoreContext);
    const cardsRef = useRef(null);

    useEffect(() => {
        if (cardsRef.current) {
            cardsRef.current.scrollTop = 0;
        }
    }, [page]);

    const currentItems = {
        products: () => {
            const result = [];
            const start = page * 30;
            const end = start + 30;

            for (
                let i = start;
                i < end && i < get.products.products.length;
                i++
            ) {
                result.push(get.products.products[i]);
            }

            return result;
        },
    };

    function slugify(title) {
        return title
            .toLowerCase() // tudo minusculo
            .trim() // remove espaços no início/fim
            .replace(/\s+/g, "-") // troca espaços por -
            .replace(/[^a-z0-9-]/g, ""); // remove caracteres inválidos
    }

    return (
        <div className="cards-div">
            <div className="quant">
                <span className="text">
                    {get.products.total} products found{" "}
                    {get.products.index > 1
                        ? `(page ${page + 1} of ${get.products.index})`
                        : null}
                </span>
            </div>
            <div
                className="cards"
                ref={cardsRef}
                style={{
                    height: `${
                        get.products.index < 2
                            ? "calc(100vh - 261px)"
                            : "calc(100vh - 321px)"
                    }`,
                }}
            >
                {currentItems.products().map((item) => {
                    return (
                        <NavLink
                            to={`/item/${slugify(item.title)}`}
                            className="card"
                            onClick={() => {
                                get.setProducts({
                                    products: [],
                                    total: 0,
                                    index: 0,
                                });
                            }}
                            key={item.id}
                        >
                            <div className="card" key={crypto.randomUUID()}>
                                <div className="img">
                                    <img src={item.thumbnail} />
                                    {Math.ceil(item.discountPercentage) > 0 ? (
                                        <span className="discount">
                                            -
                                            {Math.ceil(item.discountPercentage)}
                                            %
                                        </span>
                                    ) : null}
                                </div>
                                <div className="information">
                                    <div className="category">
                                        <span className="text">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="info">
                                        <h2>{item.title}</h2>
                                        <div className="quality">
                                            <span className="material-symbols-outlined">
                                                star
                                            </span>
                                            <span className="text">
                                                {Math.floor(item.rating * 10) /
                                                    10}
                                            </span>
                                            <span className="available">
                                                ({item.reviews.length}{" "}
                                                available)
                                            </span>
                                        </div>
                                        <div className="price">
                                            <span className="current">
                                                {(() => {
                                                    const oldPrice = item.price;
                                                    const discountValue =
                                                        (oldPrice / 100) *
                                                        item.discountPercentage;
                                                    const price =
                                                        oldPrice -
                                                        discountValue;

                                                    return price.toLocaleString(
                                                        "en-US",
                                                        {
                                                            style: "currency",
                                                            currency: "USD",
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2,
                                                        }
                                                    );
                                                })()}
                                            </span>

                                            <span className="old">
                                                <del>
                                                    {item.price.toLocaleString(
                                                        "en-US",
                                                        {
                                                            style: "currency",
                                                            currency: "USD",
                                                        }
                                                    )}
                                                </del>
                                            </span>
                                        </div>
                                        <button
                                            className="add-cart"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();

                                                const exists =
                                                    get.cartProducts.some(
                                                        (p) =>
                                                            p.item === item.id
                                                    );

                                                if (!exists) {
                                                    const updated = [
                                                        ...get.cartProducts,
                                                        { item: item.id },
                                                    ];
                                                    get.setCartProducts(
                                                        updated
                                                    );
                                                    setData(
                                                        "products",
                                                        updated
                                                    );
                                                }
                                            }}
                                        >
                                            <span className="material-symbols-outlined">
                                                shopping_cart
                                            </span>
                                            <span className="text">Add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}
