// src/components/QuestionBank.js
import React, { useState, useEffect, useContext, createContext } from "react";
import { Button, Container, Card } from "react-bootstrap";
import "../App.css";

// Dữ liệu câu hỏi
export const quizData = [
    {
        question: "What is ReactJS?",
        answers: ["A JavaScript library for building user interfaces", "A programming language", "A database management system"],
        correctAnswer: "A JavaScript library for building user interfaces"
    },
    {
        question: "What is JSX?",
        answers: ["A programming language", "A file format", "A syntax extension for JavaScript"],
        correctAnswer: "A syntax extension for JavaScript"
    }
];

// Context để chia sẻ dữ liệu
const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [questions, setQuestions] = useState(quizData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        if (selectedAnswer !== null) {
            const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer;
            if (isCorrect) setScore(prevScore => prevScore + 1);
        }
    }, [selectedAnswer]);

    const handleNextQuestion = () => {
        currentQuestionIndex + 1 < questions.length ? setCurrentQuestionIndex(prevIndex => prevIndex + 1) : setShowScore(true);
        setSelectedAnswer(null);
    };

    return (
        <QuizContext.Provider value={{ questions, currentQuestionIndex, selectedAnswer, setSelectedAnswer, score, showScore, handleNextQuestion }}>
            {children}
        </QuizContext.Provider>
    );
};

export const Quiz = () => {
    const { questions, currentQuestionIndex, selectedAnswer, setSelectedAnswer, showScore, score, handleNextQuestion } = useContext(QuizContext);

    return showScore ? (

        <Container className="mt-4 text-center">
            <Card className="quiz-card p-4">
                <h2>Your Score: {score} / {questions.length}</h2>
                <Button variant="primary" onClick={() => window.location.reload()}>Restart Quiz</Button>
            </Card>
        </Container>
    ) : (
        <Container className="mt-4">
            <Card className="quiz-card p-4">
                <h4>{questions[currentQuestionIndex].question}</h4>
                <div>
                    {questions[currentQuestionIndex].answers.map((answer, index) => (
                        <Button
                            key={index}
                            className={`option-btn ${selectedAnswer ? (answer === questions[currentQuestionIndex].correctAnswer ? "correct" : "wrong") : ""}`}
                            variant="outline-light"
                            onClick={() => setSelectedAnswer(answer)}
                            disabled={selectedAnswer !== null}
                        >
                            {answer}
                        </Button>
                    ))}
                </div>
                <Button className="mt-3" onClick={handleNextQuestion} disabled={selectedAnswer === null}>
                    Next Question
                </Button>
            </Card>
        </Container>
    );
};