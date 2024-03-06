import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttemps] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    const startQuiz = () => {
        setProgress(true);
        setAttemps((prevAttempts) => prevAttempts - 1);
    };
    const stopQuiz = () => {
        setProgress(false);
    };
    const takeMulliagn = () => {
        setAttemps((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <p>Number of Attemps: {attempts}</p>
            <p>Quiz is {progress ? "in progress" : "not in progress"}</p>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={takeMulliagn} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
