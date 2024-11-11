import { useState } from "react";
import { info } from "../assets/Data";

function Quiz() {
    let [currentQIndex, setCurrentQIndex] = useState(0);

    let [question, setQuestion] = useState(info[currentQIndex].question);

    let [choices, setChoices] = useState(info[currentQIndex].choices);

    return (
        <div className="container">
            <h1>Question</h1>
            <h2>{question}</h2>
            <ul>
                {choices.map((choice, index) => (
                    <li key={index}>{choice}</li>
                ))}
            </ul>
            <button>Next</button>
        </div>
    );
}

export default Quiz;
