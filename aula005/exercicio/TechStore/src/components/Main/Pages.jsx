import { useContext, useEffect, useState } from "react";
import "./pages.css";
import { GetContext } from "../../js/context";
import { StatusContext } from "./statusComponents/StatusContext";

export function Pages() {
    const [pagesArray, setPagesArray] = useState([]);

    const { get } = useContext(GetContext);
    const { totalValue } = useContext(StatusContext);

    // Recalcula pagesArray sempre que total.value mudar
    useEffect(() => {
        const index = Math.ceil(totalValue / 30);
        setPagesArray(new Array(index).fill(0));
    }, [totalValue]);

    useEffect(() => {
        get.setSkip(get.select * 30);
    }, [get]);

    return (
        <div className="pages-div">
            <div className="pages">
                <span
                    className="back"
                    onClick={() => {
                        get.setSelect((prev) => {
                            const next = prev !== 0 ? prev - 1 : prev;
                            return next;
                        });
                    }}
                >
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </span>

                {pagesArray.map((_, i) => (
                    <span
                        className={`page ${
                            get.select === i ? "select" : "no-select"
                        }`}
                        key={i}
                        onClick={() => {
                            get.setSelect(i);
                        }}
                    >
                        {i + 1}
                    </span>
                ))}

                <span
                    className="next"
                    onClick={() =>
                        get.setSelect((prev) =>
                            prev !== pagesArray.length - 1 ? prev + 1 : prev
                        )
                    }
                >
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </span>
            </div>
        </div>
    );
}
