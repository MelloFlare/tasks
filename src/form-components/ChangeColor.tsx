import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [favorite, setFavorite] = useState<string>(COLORS[0]);

    const colorChange = (color: string) => {
        setFavorite(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="FavColors">
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        inline
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    padding: "2px"
                                }}
                            >
                                {color}
                            </span>
                        }
                        id={color}
                        value={color}
                        checked={favorite === color}
                        onChange={() => colorChange(color)}
                    />
                ))}
            </Form.Group>
            <div>You Have Chosen </div>
            <p data-testid="colored-box" style={{ marginTop: "10px" }}>
                <span style={{ backgroundColor: favorite, padding: "2px" }}>
                    {favorite}
                </span>
            </p>
        </div>
    );
}
