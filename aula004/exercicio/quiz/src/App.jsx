import { Header } from "./components/Header/Header";
import { Quiz } from "./components/Main/Quiz";
import "./App.css";
import { Result } from "./components/Result/Result";
import { useEffect, useState } from "react";
import { getData } from "./js/getData";

export default function App() {
    const [question, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setQuestions(getData());
    }, []);

    return (
        <>
            {index < question.length ? (
                <>
                    <Header index={index} />
                    <Quiz
                        index={index}
                        setIndex={setIndex}
                        question={question}
                    />
                </>
            ) : (
                <Result question={question} />
            )}
        </>
    );
}
