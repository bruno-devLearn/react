import { Empty } from "./components/Empty";
// TODO: criar componente do historico de contas

export function History() {
    return (
        <div className="history">
            <div className="title">
                <h2>Historico de Cálculos</h2>
            </div>
            <div className="content">
                <Empty />
            </div>
            <div className="clear-div">
                <button className="clear">Limpar Historico</button>
            </div>
        </div>
    );
}
