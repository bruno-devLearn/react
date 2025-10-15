import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export function Pages() {
    return (
        <>
            <div className="pages">
                <button class="page-btn prev" disabled>
                    <div className="icon">
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                    Anterior
                </button>
                <div className="page-nuns">
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <span class="dots">...</span>
                    <button class="page-btn">8</button>
                </div>
                <button class="page-btn next">
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
