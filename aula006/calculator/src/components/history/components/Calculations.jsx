import { useStore } from "../../../js/Store";

export function Calculations() {
    const { history } = useStore();

    return (
        <div className="calculations">
            {history.map((calc, index) => (
                <div className="calc-div" key={index}>
                    <div className="calc">{calc.calculo}</div>
                    <div className="result">{calc.resultado}</div>
                </div>
            ))}
        </div>
    );
}
