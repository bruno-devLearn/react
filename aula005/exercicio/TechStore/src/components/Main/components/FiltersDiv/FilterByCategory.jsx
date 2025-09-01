import { useContext, useEffect, useState } from "react";
import { categories } from "../../../../js/start";
import { StoreContext } from "../../../../js/context";

export function FilterByCategory() {
    const [active, setActive] = useState("none");
    const { storeState } = useContext(StoreContext);

    useEffect(() => {
        storeState.inputArr.length > 0 ? setActive("flex") : setActive("none");
    }, [storeState.inputArr]);

    return (
        <div
            className="categories fadeIn"
            ref={(el) => (storeState.divRef.current.category = el)}
        >
            <div className="title">
                <h2>Categories</h2>
                <span
                    className="clear"
                    style={{ display: `${active}` }}
                    onClick={() => {
                        Object.keys(storeState.inputRef.current).forEach(
                            (slug) => {
                                const item = storeState.inputRef.current[slug];
                                if (item?.el) item.el.checked = false;
                                if (item) item.checked = false;
                            }
                        );
                        setActive("none"); // esconde o botão após limpar
                        storeState.setInputArr([]);
                    }}
                >
                    Clear
                </span>
            </div>
            <div className="scroll">
                {categories.categItem.map((item) => {
                    return (
                        <div className="select" key={item.slug}>
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    ref={(el) => {
                                        if (!el) return; // evita erro quando el é null
                                        if (
                                            storeState.inputRef.current[
                                                item.slug
                                            ]
                                        ) {
                                            el.checked =
                                                storeState.inputRef.current[
                                                    item.slug
                                                ].checked;
                                            storeState.inputRef.current[
                                                item.slug
                                            ].el = el;
                                        } else {
                                            storeState.inputRef.current[
                                                item.slug
                                            ] = {
                                                el,
                                                checked: false,
                                            };
                                        }
                                    }}
                                    onChange={(e) => {
                                        storeState.inputRef.current[
                                            item.slug
                                        ].checked = e.target.checked;

                                        if (e.target.checked) {
                                            if (
                                                !storeState.inputArr.includes(
                                                    item.slug
                                                )
                                            ) {
                                                storeState.setInputArr(
                                                    (prev) => [
                                                        ...prev,
                                                        item.slug,
                                                    ]
                                                );
                                            }
                                        } else if (!e.target.checked) {
                                            storeState.setInputArr(
                                                storeState.inputArr.filter(
                                                    (el) => el !== item.slug
                                                )
                                            );
                                        }
                                        const anyChecked = Object.values(
                                            storeState.inputRef.current
                                        ).some((item) => item.checked);
                                        setActive(anyChecked ? "flex" : "none");
                                    }}
                                />

                                <span className="material-symbols-outlined">
                                    check
                                </span>
                                <span className="text">{item.slug}</span>
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
