import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler(): JSX.Element {
        return (
            <div>
                <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
            </div>
        );
    }

    function Halver(): JSX.Element {
        return (
            <div>
                <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
            </div>
        );
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}