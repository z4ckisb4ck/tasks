import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={(event) => {
                    setIsEditMode(event.target.checked);
                }}
            />
            {isEditMode ?
                <div>
                    <Form.Control
                        type="text"
                        value={name === "Your Name" ? "" : name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <Form.Check
                        id="student-checkbox"
                        type="checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={(event) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
