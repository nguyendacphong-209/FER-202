import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        // Xử lý gửi thông tin (có thể gửi lên API)
        console.log("Thông tin gửi:", formData);
        setSubmitted(true);
        setError("");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <Container className="mt-4">
            <h2>Liên Hệ</h2>
            {submitted && <Alert variant="success">Cảm ơn bạn đã liên hệ!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập tên của bạn"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Nhập email của bạn"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tin nhắn</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nhập nội dung tin nhắn"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Gửi
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
