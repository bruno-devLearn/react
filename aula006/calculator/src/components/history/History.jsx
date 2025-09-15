import { Empty } from "./components/Empty";
// TODO: criar componente do historico de contas

export function History() {
    return (
        <div className="history">
            <h2>Historico de Cálculos</h2>
            <Empty />
            <button className="clear">Limpar Historico</button>
        </div>
    );
}
