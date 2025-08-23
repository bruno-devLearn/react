import { useState } from "react";
import { next } from "../../js/nextQuestion";
import "./main.css";

export function Quiz({ index, setIndex, question }) {
    const [animation, setAnimation] = useState(null);
    const [enableStatus, setEnableStatus] = useState(true);

    return (
        <main>
            <div className="quiz ">
                <h1>{question[index].title}</h1>
                <div className={`alternatives ${animation}`}>
                    <div
                        className={`A1 alternativa ${
                            !enableStatus ? "disabled" : ""
                        }`}
                        onClick={() => {
                            if (!enableStatus) return;
                            next(
                                question[index].A,
                                setIndex,
                                question[index],
                                setAnimation,
                                setEnableStatus
                            );
                        }}
                    >
                        {question[index].A}
                    </div>
                    <div
                        className={`A1 alternativa ${
                            !enableStatus ? "disabled" : ""
                        }`}
                        onClick={() => {
                            if (!enableStatus) return;
                            next(
                                question[index].B,
                                setIndex,
                                question[index],
                                setAnimation,
                                setEnableStatus
                            );
                        }}
                    >
                        {question[index].B}
                    </div>
                    <div
                        className={`A1 alternativa ${
                            !enableStatus ? "disabled" : ""
                        }`}
                        onClick={() => {
                            if (!enableStatus) return;
                            next(
                                question[index].C,
                                setIndex,
                                question[index],
                                setAnimation,
                                setEnableStatus
                            );
                        }}
                    >
                        {question[index].C}
                    </div>
                    <div
                        className={`A1 alternativa ${
                            !enableStatus ? "disabled" : ""
                        }`}
                        onClick={() => {
                            if (!enableStatus) return;
                            next(
                                question[index].D,
                                setIndex,
                                question[index],
                                setAnimation,
                                setEnableStatus
                            );
                        }}
                    >
                        {question[index].D}
                    </div>
                </div>
            </div>
        </main>
    );
}
