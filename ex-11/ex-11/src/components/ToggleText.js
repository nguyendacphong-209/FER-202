import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-lg p-3">
            <Card.Body>
              {isVisible && (
                <Card.Text className="fs-5 text-muted">
                  Chao co, em ten la Nguyen Dac Phong
                </Card.Text>
              )}
              <Button 
                variant={isVisible ? "danger" : "primary"} 
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? "Ẩn" : "Hiển thị"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ToggleText;
