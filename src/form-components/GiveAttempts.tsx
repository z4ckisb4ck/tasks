import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={(event) => {
                    setRequestedAttempts(event.target.value);
                }}
            />
            <Button
                onClick={() => {
                    setAttemptsLeft((attempts) => attempts - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    const parsed = parseInt(requestedAttempts);
                    if (!Number.isNaN(parsed)) {
                        setAttemptsLeft((attempts) => attempts + parsed);
                    }
                }}
            >
                gain
            </Button>
        </div>
    );
}
