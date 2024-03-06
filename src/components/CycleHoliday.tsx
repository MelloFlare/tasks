import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiday = "🎁" | "🪔" | "🎃" | "🕺" | "🍅";

const BYYEAR: Record<holiday, holiday> = {
    "🍅": "🕺",
    "🕺": "🎃",
    "🎃": "🪔",
    "🪔": "🎁",
    "🎁": "🍅"
};

const BYALPHA: Record<holiday, holiday> = {
    "🎁": "🪔",
    "🪔": "🎃",
    "🎃": "🍅",
    "🍅": "🕺",
    "🕺": "🎁"
};
export function CycleHoliday(): JSX.Element {
    const [currHoliday, setHoliday] = useState<holiday>("🎁");
    function changebyYear(): void {
        const newHoliday = BYYEAR[currHoliday];
        setHoliday(newHoliday);
    }
    function changebyAlpha(): void {
        const newHoliday = BYALPHA[currHoliday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>Holiday: {currHoliday}</div>
            <Button onClick={changebyAlpha}>Advance by Alphabet</Button>
            <Button onClick={changebyYear}>Advance by Year</Button>
        </div>
    );
}
