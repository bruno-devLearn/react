import "./result.css";
import { values } from "../../js/nextQuestion";

export function Result({ question }) {
    return (
        <main>
            <div className="hits">
                <h2>Your Score</h2>
                <span className="score">
                    {values.reduce((acc, value, index) => {
                        return acc + (value === question[index].answer ? 1 : 0);
                    }, 0)}
                    /10
                </span>
            </div>
            <div className="performace">
                <h2>Performance Breakdown</h2>
                {values.map((value, i) => (
                    <div
                        className={`answers ${
                            question[i].answer === value
                                ? "correct"
                                : "incorrect"
                        }`}
                        key={value}
                    >
                        Question {i + 1} <span>{value}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}
//todo: for com as divs + respostas do usuario
