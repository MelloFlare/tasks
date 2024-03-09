import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempt, setAttepmt] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    const handleUseAttempt = () => {
        if (attempt > 0) {
            setAttepmt(attempt - 1);
        }
    };

    const handleGainAttempts = () => {
        const newAttempt = parseInt(request);
        if (!isNaN(newAttempt) && newAttempt >= 0) {
            setAttepmt(attempt + newAttempt);
            setRequest("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempt}</p>
            <Form.Group controlId="seeAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                />
                <Button onClick={handleUseAttempt} disabled={attempt <= 0}>
                    use
                </Button>
                <Button onClick={handleGainAttempts}>gain</Button>
            </Form.Group>
        </div>
    );
}
