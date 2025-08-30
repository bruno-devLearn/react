import "./pages.css";

export function Pages() {
    return (
        <div className="pages-div">
            <div className="pages">
                <span className="back">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </span>
                <span className="page  select">1</span>
                <span className="page no-select">2</span>
                <span className="page no-select">3</span>
                <span className="page no-select">4</span>
                <span className="page no-select">5</span>
                <span className="page no-select">6</span>
                <span className="page no-select">7</span>
                <span className="next">
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </span>
            </div>
        </div>
    );
}
