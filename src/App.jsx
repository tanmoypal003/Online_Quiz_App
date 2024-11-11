import { useState } from "react";
import "./App.css";
import { info } from "./assets/Data";

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
                    <div className="quiz_wrapper"></div>
                    <h3>Welcome to the </h3>
                    <h2>QUICK QUIZ</h2>
                    <p>Number of questions : {info.length}</p>
                    <button onClick={loadQuestion}>Let&apos;s Start</button>
                </>
            )}

            {status ? (
                <>
                    <div></div>
                </>
            ) : (
                <></>
            )}
        </main>
    );
}

export default App;
