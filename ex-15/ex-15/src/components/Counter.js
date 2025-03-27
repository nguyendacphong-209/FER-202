import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from "react";
import { Card, Button } from "react-bootstrap";

function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: Math.max(0, state.count - 1) }; // Không giảm xuống dưới 0
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg border-0" style={{ width: "20rem", background: "#fff" }}>
                <Card.Body className="text-center">
                    <Card.Title className="fw-bold fs-4 text-primary">Counter App</Card.Title>
                    <h1 className="display-3 text-success">{state.count}</h1>
                    <div className="d-flex justify-content-around mt-3">
                        <Button variant="outline-primary" onClick={() => dispatch({ type: "INCREMENT" })}>
                            +
                        </Button>
                        <Button variant="outline-danger" onClick={() => dispatch({ type: "DECREMENT" })}>
                            -
                        </Button>
                        <Button variant="danger" onClick={() => dispatch({ type: "RESET" })}>
                            Reset
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Counter;
