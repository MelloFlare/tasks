import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    const isCorrect = selected === expectedAnswer;

    const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userEmotions">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select value={selected} onChange={optionChange}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {isCorrect ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
