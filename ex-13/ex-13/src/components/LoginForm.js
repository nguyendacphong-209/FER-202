import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert, Card, Image } from "react-bootstrap";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailError(emailRegex.test(email) ? "" : "Email không hợp lệ");
        }
    }, [email]);

    useEffect(() => {
        if (password) {
            setPasswordError(password.length >= 8 ? "" : "Mật khẩu phải có ít nhất 8 ký tự");
        }
    }, [password]);

    useEffect(() => {
        setIsValid(emailError === "" && passwordError === "" && email !== "" && password !== "");
    }, [emailError, passwordError, email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Đăng nhập thành công!");
    };

    return (
        <Container className="mt-5">
        <Card className="p-4">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail Logo" width={50} className="mx-auto d-block mb-3" />
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!emailError}
                    />
                    <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={!!passwordError}
                    />
                    <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3" disabled={!isValid}>
                    Submit
                </Button>
            </Form>
            </Card>
        </Container>
    );
};

export default LoginForm;
