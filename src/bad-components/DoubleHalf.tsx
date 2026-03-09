import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    function Doubler(): React.JSX.Element {
        return (
            <Button
                onClick={() => {
                    setValue((prev) => 2 * prev);
                }}
            >
                Double
            </Button>
        );
    }

    function Halver(): React.JSX.Element {
        return (
            <Button
                onClick={() => {
                    setValue((prev) => 0.5 * prev);
                }}
            >
                Halve
            </Button>
        );
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
