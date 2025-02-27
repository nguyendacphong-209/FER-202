import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function Question({ question, options, image, handleAnswer }) {
    return (
        <div className="question-container text-center">
            <h2>{question}</h2>
            {image && <img src={image} alt="Question Illustration" className="question-image" />}
            <Row className="mt-3">
                {options.map((option, index) => (
                    <Col key={index} xs={6} className="d-flex justify-content-center">
                        <Button variant="primary" className="answer-btn" onClick={() => handleAnswer(option)}>
                            {option}
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Question;
