import { useState } from "react";
import { info } from "../assets/Data";
import "./Quiz.css";

function Quiz() {
    let [currentQIndex, setCurrentQIndex] = useState(0);

    let [question, setQuestion] = useState(info[currentQIndex].question);

    let [choices, setChoices] = useState(info[currentQIndex].choices);

    let [currentAnswer, setCurrentAnswer] = useState(null);

    let [score, setScore] = useState(0);

    let [result, setResult] = useState(false);

    const handleClick = (choice, index) => {
        setCurrentAnswer(choice);
        if (info[currentQIndex].answer == index) {
            setScore(++score);
        }
    };

    const handleNextQ = () => {
        if (currentQIndex === info.length - 1) {
            setResult(true);
            return 0;
        } else {
            setCurrentQIndex(++currentQIndex);
            setCurrentAnswer(null);
            setQuestion(info[currentQIndex].question);
            setChoices(info[currentQIndex].choices);
        }
    };

    const resetAll = () => {
        setCurrentQIndex(0);
        setQuestion(info[0].question);
        setChoices(info[0].choices);
        setScore(0);
        setResult(false);
        setCurrentAnswer(null);
    };

    return (
        <div className="q_container">
            <h1>Question</h1>
            {result ? (
                <></>
            ) : (
                <>
                    <h2>{question}</h2>
                    <ul>
                        {choices.map((choice, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(choice, index + 1)}
                                className={
                                    currentAnswer === choice ? "selection" : ""
                                }
                            >
                                {choice}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={handleNextQ}
                        disabled={currentAnswer === null}
                        className={
                            currentAnswer === null ? "disable" : "enable"
                        }
                    >
                        Next
                    </button>
                </>
            )}

            {result ? (
                <>
                    <h2>
                        You Scored {score} out of {info.length}
                    </h2>
                    <button onClick={resetAll}>Reset</button>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Quiz;
