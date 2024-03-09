import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [user, setUser] = useState<string>("Your Name");
    const [isStudent, setisStudent] = useState<boolean>(true);
    const [mode, setMode] = useState<boolean>(false);

    const handleUserChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const studentChange = () => {
        setisStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="editModeSwitch">
                <Form.Check
                    type="switch"
                    id="editModeSwitch"
                    label="Edit Mode"
                    checked={mode}
                    onChange={() => setMode(!mode)}
                />
            </Form.Group>
            {!mode ? (
                <p>
                    {user} is {isStudent ? "a student" : "not a student"}
                </p>
            ) : (
                <Form>
                    <Form.Group controlId="user">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={user}
                            onChange={handleUserChagne}
                        />
                    </Form.Group>
                    <Form.Group controlId="isStudent">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={studentChange}
                        />
                    </Form.Group>
                </Form>
            )}
        </div>
    );
}
