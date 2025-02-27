import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const StudentCard = () => {
  const students = [
    { id: "DE160182", name: "Nguyễn Hà Quốc Khánh", location: "Đà Nẵng", status: "Absent", image: "image/image" },
    { id: "DE160377", name: "Chny Vich Thịnh", location: "Quảng Nam", status: "Present", image: "https://via.placeholder.com/150" },
    { id: "DE160547", name: "Đỗ Nguyên Phúc", location: "Quảng Nam", status: "Present", image: "https://via.placeholder.com/150" },
    { id: "DE170089", name: "Lù Hoàng Minh", location: "Đà Nẵng", status: "Present", image: "https://via.placeholder.com/150" },
  ];

  return (
    <Container>
      <h3 className="text-center my-4">Students Detail</h3>
      <Row className="justify-content-center">
        {students.map((student, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img variant="top" src={student.image} />
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>
                  <strong>{student.id}</strong> <br />
                  {student.location} - {student.status}
                </Card.Text>
                <Button variant="warning">Submit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentCard;
