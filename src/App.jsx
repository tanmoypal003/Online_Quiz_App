import { useState } from "react";
import "./App.css";
import { info } from "./assets/Data";
import Quiz from "./Components/Quiz";

function App() {
    let [status, setStatus] = useState(false);

    const loadQuestion = () => {
        setStatus(true);
    };

    return (
        <main className="container">
            {status ? (
                <></>
            ) : (
                <>
                    <div className="quiz_wrapper">
                        <h3>Welcome to the </h3>
                        <h2>QUICK QUIZ</h2>
                        <p>Number of questions : {info.length}</p>
                        <button onClick={loadQuestion} className="start_btn">
                            Let&apos;s Start
                        </button>
                    </div>
                </>
            )}

            {status ? (
                <>
                    <div>
                        <Quiz />
                    </div>
                </>
            ) : (
                <></>
            )}
        </main>
    );
}

export default App;
