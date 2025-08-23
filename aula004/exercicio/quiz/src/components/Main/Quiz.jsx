import "./main.css";

export function Quiz() {
    return (
        <main>
            <div className="quiz">
                <h1>{}</h1>
                <div className="alternatives">
                    <div className="A1 alternativa">{}</div>
                    <div className="A2 alternativa">{}</div>
                    <div className="A3 alternativa">{}</div>
                    <div className="A4 alternativa">{}</div>
                </div>
            </div>
        </main>
    );
}
