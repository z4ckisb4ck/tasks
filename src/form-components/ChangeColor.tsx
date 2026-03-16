import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color}
                        name="color-choice"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(event) => {
                            setSelectedColor(event.target.value);
                        }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "8px",
                    display: "inline-block",
                    minWidth: "90px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
