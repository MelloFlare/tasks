import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleChangeType = () => {
        setQuestionType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            {qType === "multiple_choice_question" && <div>Multiple Choice</div>}
            {qType === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
