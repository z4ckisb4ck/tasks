import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "🎃" // Halloween (October 31)
    | "🎄" // Christmas (December 25)
    | "🎆" // New Year (January 1)
    | "❤️" // Valentine's Day (February 14)
    | "🍀"; // St. Patrick's Day (March 17)

const ALPHABET_ORDER: Record<Holiday, Holiday> = {
    "🎄": "🍀",
    "🍀": "🎃",
    "🎃": "🎆",
    "🎆": "❤️",
    "❤️": "🎄",
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    "🎆": "❤️",
    "❤️": "🍀",
    "🍀": "🎃",
    "🎃": "🎄",
    "🎄": "🎆",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");

    const advanceAlphabet = () => {
        setHoliday(ALPHABET_ORDER[holiday]);
    };

    const advanceYear = () => {
        setHoliday(YEAR_ORDER[holiday]);
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
