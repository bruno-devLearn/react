import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../../js/storeContext";

export function FilterByCategory({ inputRef }) {
    const get = useContext(StoreContext);
    const [_, setRender] = useState(false);

    useEffect(() => {
        if (!inputRef.current || Object.keys(inputRef.current).length === 0) {
            inputRef.current = {};
            get.categories.forEach((category) => {
                inputRef.current[category] = false;
            });
        }
    }, [get.categories, inputRef]);

    function toggleCategory(category) {
        inputRef.current[category] = !inputRef.current[category];
        setRender((prev) => !prev);
    }

    return (
        <div className="categories fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="title">
                <h2>Categories</h2>
                <span className="clear">Clear</span>
            </div>
            <div className="scroll">
                {get.categories.map((category) => (
                    <div className="select" key={category}>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={inputRef.current[category] ?? false} // garante true/false
                                onChange={() => toggleCategory(category)}
                            />

                            <span className="material-symbols-outlined">
                                check
                            </span>
                            <span className="text">{category}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
