import React, { useReducer } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function formReducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.value };
        case "SET_AGE":
            return { ...state, age: action.value };
        default:
            return state;
    }
}

function ChangeNameAge() {
    const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg border-0 p-4" style={{ width: "25rem", background: "#fff" }}>
                <Card.Body>
                    <Card.Title className="text-center fw-bold fs-4 text-primary">Thông Tin Cá Nhân</Card.Title>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Họ & Tên:</Form.Label>
                            <Form.Control
                                type="text"
                                value={state.name}
                                onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
                                placeholder="Nhập tên của bạn"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Tuổi:</Form.Label>
                            <Form.Control
                                type="number"
                                value={state.age}
                                onChange={(e) => dispatch({ type: 'SET_AGE', value: e.target.value })}
                                placeholder="Nhập tuổi của bạn"
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="success">Lưu Thông Tin</Button>
                        </div>
                    </Form>

                    <hr />

                    <div className="text-center">
                        <h4 className="text-secondary">Tên: <span className="text-dark">{state.name || "Chưa nhập"}</span></h4>
                        <h4 className="text-secondary">Tuổi: <span className="text-dark">{state.age || "Chưa nhập"}</span></h4>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ChangeNameAge;
