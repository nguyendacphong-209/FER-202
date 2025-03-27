import React from "react";
import { motion } from "framer-motion";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => (
    <Container className="home-container text-center mt-4">
        <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Welcome Home Page!
        </motion.h2>
        <motion.img
            src="/images/slide1.jpg"
            alt="Slide 1"
            style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
        <Row className="mt-4">
            {[...Array(8)].map((_, index) => (
                <Col key={index} xs={3} className="d-flex justify-content-center">
                    <motion.img
                        src={`/images/menu-0${index + 1}.jpg`}
                        alt={`Menu-0 ${index + 1}`}
                        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    />
                </Col>
            ))}
        </Row>
        <motion.p
            className="mt-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            Challenge yourself with exciting quizzes and test your knowledge!
        </motion.p>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Button variant="primary" as={Link} to="/quiz">Start Quiz</Button>
        </motion.div>
    </Container>
);

export default Home;
