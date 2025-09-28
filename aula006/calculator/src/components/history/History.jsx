import { useStore } from "../../js/Store";
import { Calculations } from "./components/Calculations";
import { Empty } from "./components/Empty";

export function History() {
    const { history, clearHistory } = useStore();

    return (
        <div className="history">
            <div className="title">
                <h2>Historico de Cálculos</h2>
            </div>
            <div className="content">
                {history.length === 0 ? <Empty /> : <Calculations />}
            </div>
            <div className="clear-div">
                <button className="clear" onClick={() => clearHistory()}>
                    Limpar Historico
                </button>
            </div>
        </div>
    );
}
