import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

// Hàm xác thực đầu vào (ví dụ: kiểm tra độ dài tối thiểu)
const validateInput = (value) => {
    return value.length >= 5; // Giả sử giá trị phải có ít nhất 5 ký tự
};

function ValidatedInput() {
    const [value, setValue] = useState("vd:@abcxy"); // State lưu trữ giá trị đầu vào
    const [isValid, setIsValid] = useState(true); // State theo dõi tính hợp lệ của đầu vào
    const [errorMessage, setErrorMessage] = useState(""); // State lưu thông báo lỗi
    const [showAlert, setShowAlert] = useState(false); // State để kiểm soát hiển thị alert

    // useEffect để thực hiện xác thực mỗi khi giá trị đầu vào thay đổi
    useEffect(() => {
        const isValidInput = validateInput(value);
        setIsValid(isValidInput); // Cập nhật tính hợp lệ
        if (!isValidInput) {
            setErrorMessage("Giá trị phải có ít nhất 5 ký tự!"); // Cập nhật thông báo lỗi nếu không hợp lệ
        } else {
            setErrorMessage(""); // Xóa thông báo lỗi nếu hợp lệ
        }
    }, [value]); // useEffect sẽ chạy lại mỗi khi value thay đổi

    // Xử lý sự kiện submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            setShowAlert(true); // Hiển thị alert khi submit thành công
        }
    };

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <div className="p-3 border rounded w-50 shadow-sm">
                {showAlert && (
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        <Alert.Heading>Đăng ký thành công!</Alert.Heading>
                        <p>Thông tin của bạn đã được gửi đi thành công.</p>
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="validatedInput">
                        <Form.Label className="fw-bold">Nhập một giá trị</Form.Label>
                        <Form.Control
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            isValid={isValid}
                            isInvalid={!isValid}
                            className="small-input"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errorMessage}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!isValid} className="mt-3 w-100">
                        Gửi
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default ValidatedInput;
