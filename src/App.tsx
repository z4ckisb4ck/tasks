import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    const redBox: React.CSSProperties = {
        width: "150px",
        height: "150px",
        backgroundColor: "red",
        marginTop: "10px",
    };
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Zachary Zahzouhi,
                Hello World
            </header>

            <Container className="mt-4">
                <Row>
                    <Col>
                        <h2>First Column</h2>
                        <p>This is the left side content.</p>
                        <ul>
                            <li>Do my homework</li>
                            <li>Go to the gym</li>
                            <li>Do laundry</li>
                        </ul>
                        <img
                            src="https://a.espncdn.com/i/headshots/nba/players/full/1966.png"
                            alt="A picture of Lebron James"
                        />
                        <div style={redBox}></div>
                    </Col>

                    <Col>
                        <p>Second Column</p>
                        <p>
                            You can put whatever you want here. This will appear
                            on the right side.
                        </p>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div style={redBox}></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
