import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-lg p-3">
            <Card.Body>
              <Card.Title className="fs-3">Bộ đếm</Card.Title>
              <Card.Text className="fs-4">
                Bạn đã nhấn <strong>{count}</strong> lần
              </Card.Text>
              <Button variant="primary" size="lg" onClick={() => setCount(count + 1)}>
                Nhấn tôi!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
