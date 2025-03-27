import React, { useState, useEffect } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const Quiz = () => {
    const questions = [
        { id: 1, question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
        { id: 2, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" }
    ];

    const [username, setUsername] = useState("");
    const [isStarted, setIsStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);
    const [highScoreUser, setHighScoreUser] = useState(localStorage.getItem("highScoreUser") || "N/A");

    useEffect(() => {
        if (isStarted && timer > 0) {
            const interval = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(interval);
        } else if (isStarted && timer === 0) {
            handleNextQuestion();
        }
    }, [timer, isStarted]);

    const handleStartQuiz = () => {
        if (username.trim()) {
            setIsStarted(true);
            setQuizCompleted(false);
            setCurrentQuestion(0);
            setScore(0);
            setTimer(10);
        }
    };

    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setTimeout(() => handleNextQuestion(), 1000);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setTimer(10);
        } else {
            if (score > highScore) {
                setHighScore(score);
                setHighScoreUser(username);
                localStorage.setItem("highScore", score);
                localStorage.setItem("highScoreUser", username);
            }
            setIsStarted(false);
            setQuizCompleted(true);
        }
    };

    return (
        <Container className="quiz-container text-center">
            <h2 className="quiz-title">Quiz Page</h2>
            {!isStarted && !quizCompleted ? (
                <>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter your name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" className="mt-3 start-btn" onClick={handleStartQuiz}>
                        Start Quiz
                    </Button>
                </>
            ) : isStarted ? (
                <Card className="mb-3 question-card fade-in">
                    <Card.Body>
                        <h4 className="question-text">{questions[currentQuestion].question}</h4>
                        <p className="timer-text">Time Left: {timer}s</p>
                        {questions[currentQuestion].options.map((option, index) => (
                            <Button
                                key={index}
                                className="m-2 answer-btn"
                                variant={
                                    selectedAnswer
                                        ? option === questions[currentQuestion].answer
                                            ? "success"
                                            : option === selectedAnswer
                                                ? "danger"
                                                : "secondary"
                                        : "primary"
                                }
                                onClick={() => handleAnswerClick(option)}
                                disabled={selectedAnswer !== null}
                            >
                                {option}
                            </Button>
                        ))}
                    </Card.Body>
                </Card>
            ) : (
                <>
                    <h4 className="score-text">{username}, Your Score: {score}</h4>
                    <h4 className="highscore-text">High Score: {highScore} by {highScoreUser || "N/A"}</h4>
                    <Button variant="success" className="retry-btn" onClick={handleStartQuiz}>Play Again</Button>
                </>
            )}
        </Container>
    );
};

export default Quiz;
