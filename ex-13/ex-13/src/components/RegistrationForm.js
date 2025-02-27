import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Image } from "react-bootstrap";

const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: name.trim() ? "" : "Tên không được để trống",
            gender: gender ? "" : "Vui lòng chọn giới tính",
            role: role ? "" : "Vui lòng chọn vai trò",
            agree: agree ? "" : "Bạn phải đồng ý với điều khoản"
        }));
    }, [name, gender, role, agree]);

    useEffect(() => {
        setIsValid(Object.values(errors).every((err) => err === ""));
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Đăng ký thành công!");
    };

    return (
        <Container className="mt-5">
            <Card className="p-4">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail Logo" width={50} className="mx-auto d-block mb-3" />
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Tên</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mt-3" >
                        <Form.Label>Giới tính</Form.Label>
                        <div className="d-flex gap-3">
                            <Form.Check type="radio" label="Nam" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                            <Form.Check type="radio" label="Nữ" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
                        </div>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Vai trò</Form.Label>
                        <Form.Select value={role} onChange={(e) => setRole(e.target.value)} isInvalid={!!errors.role}>
                            <option value="">Chọn vai trò</option>
                            <option value="user">Người dùng</option>
                            <option value="admin">Quản trị viên</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formAgree" className="mt-3">
                        <Form.Check
                            type="checkbox"
                            label="Tôi đồng ý với điều khoản"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            isInvalid={!!errors.agree}
                        />
                        {errors.agree && <div className="text-danger">{errors.agree}</div>}
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3" disabled={!isValid}>
                        Đăng ký
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default RegistrationForm;
