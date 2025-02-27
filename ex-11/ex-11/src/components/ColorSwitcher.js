import React, { useState } from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";

function ColorSwitcher() {
  const [bgColor, setBgColor] = useState("none");

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center">Chọn màu nền</h3>
          <Form.Select 
            className="mb-3" 
            onChange={(e) => setBgColor(e.target.value)}
          >
            <option value="white">Chọn màu</option>
            <option value="red">Đỏ</option>
            <option value="blue">Xanh dương</option>
            <option value="green">Xanh lá</option>
            <option value="yellow">Vàng</option>
            <option value="purple">Tím</option>
          </Form.Select>

          <Card 
            className="p-5 text-white text-center shadow-lg" 
            style={{ backgroundColor: bgColor }}
          >
            <h4 className="a3">Màu nền: {bgColor}</h4>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ColorSwitcher;
