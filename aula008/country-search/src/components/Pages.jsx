import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useData } from "../js/store";

export function Pages() {
    const { data, indexPage, updateIndex, updateAfter } = useData();

    return (
        <div className="pages">
            <button
                className="page-btn prev"
                disabled={!data?.pageInfo?.hasPreviousPage}
                onClick={() => {
                    updateIndex(indexPage - 1);
                    updateAfter("", data.pageInfo.endCursor);
                }}
            >
                <div className="icon">
                    <MdOutlineKeyboardArrowLeft />
                </div>
                Anterior
            </button>

            <div className="page-nuns">
                <button className="page-btn active">{indexPage + 1}</button>
            </div>

            <button
                className="page-btn next"
                disabled={!data?.pageInfo?.hasNextPage}
                onClick={() => {
                    updateIndex(indexPage + 1);
                    updateAfter(data.pageInfo.endCursor, "");
                }}
            >
                Próximo
                <div className="icon">
                    <MdOutlineKeyboardArrowRight />
                </div>
            </button>
        </div>
    );
}
