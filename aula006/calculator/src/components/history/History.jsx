import { Calculations } from "./components/Calculations";
import { Empty } from "./components/Empty";

export function History() {
    return (
        <div className="history">
            <div className="title">
                <h2>Historico de Cálculos</h2>
            </div>
            <div className="content">
                <Calculations />
            </div>
            <div className="clear-div">
                <button className="clear">Limpar Historico</button>
            </div>
        </div>
    );
}
