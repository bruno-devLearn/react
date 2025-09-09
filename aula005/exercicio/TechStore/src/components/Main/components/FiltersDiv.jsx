import "./css/filtersDiv.css";

/* 
<div className="select">
    <label className="checkbox">
        <input type="checkbox" id="" />
        <span className="material-symbols-outlined">
            check
        </span>
        <span className="text">beauty</span>
    </label>
</div>
*/

export function FiltersDiv() {
    return (
        <>
            <div className="categorys">
                <div className="title">
                    <h2>Categories</h2>
                    <span className="clear">Clear</span>
                </div>
                <div className="scroll"></div>
            </div>
        </>
    );
}
