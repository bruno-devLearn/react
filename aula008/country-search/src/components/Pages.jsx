import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export function Pages() {
    return (
        <>
            <div className="pages">
                <button className="page-btn prev" disabled>
                    <div className="icon">
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                    Anterior
                </button>
                <div className="page-nuns">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <span className="dots">...</span>
                    <button className="page-btn">8</button>
                </div>
                <button className="page-btn next">
                    Próximo
                    <div className="icon">
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </button>
            </div>
            <div className="amount">Mostrando 1 a 12 de 88 países</div>
        </>
    );
}
