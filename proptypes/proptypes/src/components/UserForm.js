import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const UserForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <Container className="mt-4">
            <h4 className="text-center">Đăng Ký Người Dùng</h4>
            <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow bg-white">

                {/* Hiển thị thông báo lỗi chung */}
                {Object.keys(errors).length > 0 && (
                    <Alert variant="danger">Vui lòng kiểm tra các trường nhập.</Alert>
                )}

                <Form.Group className="mb-3">
                    <Form.Label>Tên:</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("name", { required: "Tên không được để trống", minLength: 3, maxLength: 50 })}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Tuổi:</Form.Label>
                    <Form.Control
                        type="number"
                        {...register("age", {
                            required: "Tuổi không được để trống",
                            min: { value: 18, message: "Tuổi phải từ 18 đến 100" },
                            max: { value: 100, message: "Tuổi phải từ 18 đến 100" },
                        })}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">{errors.age?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        {...register("email", { required: "Email không được để trống", pattern: /^\S+@\S+\.\S+$/ })}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại:</Form.Label>
                    <Form.Control
                        type="tel"
                        {...register("phone", {
                            required: "Số điện thoại không được để trống",
                            pattern: { value: /^[0-9]{10,15}$/, message: "Số điện thoại phải từ 10-15 chữ số" },
                        })}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Giới tính:</Form.Label>
                    <Form.Select {...register("gender")}>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="Đồng ý với điều khoản"
                        {...register("terms", { required: "Bạn phải đồng ý với điều khoản" })}
                        isInvalid={!!errors.terms}
                    />
                    <Form.Control.Feedback type="invalid">{errors.terms?.message}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Gửi
                </Button>
            </Form>
        </Container>
    );
};

// **PropTypes validation**
UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
