import { useEffect, useState } from "react";
import { categories } from "../../../../js/start";

export function FilterByCategory({ divRef, inputRef, inputArr, setInputArr }) {
    const [active, setActive] = useState("none");

    useEffect(() => {
        inputArr.length > 0 ? setActive("flex") : setActive("none");
    }, [inputArr]);

    return (
        <div
            className="categories fadeIn"
            ref={(el) => (divRef.current.category = el)}
        >
            <div className="title">
                <h2>Categories</h2>
                <span
                    className="clear"
                    style={{ display: `${active}` }}
                    onClick={() => {
                        Object.keys(inputRef.current).forEach((slug) => {
                            const item = inputRef.current[slug];
                            if (item?.el) item.el.checked = false;
                            if (item) item.checked = false;
                        });
                        setActive("none"); // esconde o botão após limpar
                        setInputArr([]);
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
                                        if (inputRef.current[item.slug]) {
                                            el.checked =
                                                inputRef.current[
                                                    item.slug
                                                ].checked;
                                            inputRef.current[item.slug].el = el;
                                        } else {
                                            inputRef.current[item.slug] = {
                                                el,
                                                checked: false,
                                            };
                                        }
                                    }}
                                    onChange={(e) => {
                                        inputRef.current[item.slug].checked =
                                            e.target.checked;

                                        if (e.target.checked) {
                                            if (!inputArr.includes(item.slug)) {
                                                setInputArr((prev) => [
                                                    ...prev,
                                                    item.slug,
                                                ]);
                                            }
                                        } else if (!e.target.checked) {
                                            setInputArr(
                                                inputArr.filter(
                                                    (el) => el !== item.slug
                                                )
                                            );
                                        }
                                        const anyChecked = Object.values(
                                            inputRef.current
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
