import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "./Images/HelloWorld.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>By Dhir</h1>
            <p>Things I like:</p>
            <ul>
                <li>Sleep </li>
                <li>Food </li>
                <li>Games </li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Hello World</p>
            <img src={img} alt="Code that outputs 'Hello World'" />
            <div className="App-Rect">
                <Container>
                    <Row>
                        <Col>THIS</Col>
                        <Col>IS</Col>
                    </Row>
                    <Row>
                        <Col>A</Col>
                        <Col>TEST</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
