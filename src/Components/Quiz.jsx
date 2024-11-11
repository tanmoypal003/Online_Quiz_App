import { useState } from "react";
import { info } from "../assets/Data";

function Quiz() {
    let [currentQIndex, setCurrentQIndex] = useState(0);

    let [question, setQuestion] = useState(info[currentQIndex].question);

    let [choices, setChoices] = useState(info[currentQIndex].choices);

    let [currentAnswer, setCurrentAnswer] = useState(null);

    let [score, setScore] = useState(0);

    const handleClick = (choice, index) => {
        setCurrentAnswer(choice);
        if (info[currentQIndex].answer == index) {
            setScore(++score);
        }
    };

    return (
        <div className="container">
            <h1>Question</h1>
            <h2>{question}</h2>
            <ul>
                {choices.map((choice, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(choice, index + 1)}
                        className={currentAnswer === choice ? "selection" : ""}
                    >
                        {choice}
                    </li>
                ))}
            </ul>
            <button>Next</button>
        </div>
    );
}

export default Quiz;
