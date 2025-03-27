import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../App.css";

const initialState = {
    questions: [
        { id: 1, question: "Thủ đô của Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: "Melbourne" },
        { id: 2, question: "Hành tinh nào được gọi là Hành tinh Đỏ?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
        { id: 3, question: "Đại dương lớn nhất Trái Đất?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    ],
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false,
    isCorrect: null,
    timeLeft: 10,
    highScore: parseInt(localStorage.getItem("highScore")) || 0,
};

function quizReducer(state, action) {
    switch (action.type) {
        case "SELECT_OPTION":
            return { ...state, selectedOption: action.payload, isCorrect: action.payload === state.questions[state.currentQuestion].answer };

        case "NEXT_QUESTION":
            const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
            const newScore = isCorrect ? state.score + 1 : state.score;
            const isLastQuestion = state.currentQuestion + 1 === state.questions.length;

            return {
                ...state,
                score: newScore,
                currentQuestion: state.currentQuestion + 1,
                selectedOption: "",
                isCorrect: null,
                showScore: isLastQuestion,
                timeLeft: 10,
                highScore: Math.max(newScore, state.highScore),
            };

        case "TICK":
            return { ...state, timeLeft: state.timeLeft - 1 };

        case "TIME_UP":
            return { ...state, selectedOption: "", isCorrect: false };

        case "RESTART_QUIZ":
            return { ...initialState, highScore: state.highScore };

        default:
            return state;
    }
}

function QuestionBank() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, currentQuestion, selectedOption, score, showScore, isCorrect, timeLeft, highScore } = state;

    useEffect(() => {
        if (!showScore && timeLeft > 0) {
            const timer = setInterval(() => dispatch({ type: "TICK" }), 1000);
            return () => clearInterval(timer);
        }
        if (timeLeft === 0) {
            dispatch({ type: "TIME_UP" });
        }
    }, [timeLeft, showScore]);

    useEffect(() => {
        localStorage.setItem("highScore", highScore);
    }, [highScore]);

    return (
        <Container className="mt-4">
            <Card className="quiz-card">
                {showScore ? (
                    <div className="text-center">
                        <h2>Điểm của bạn: {score} / {questions.length}</h2>
                        <h4>🏆 Kỷ lục: {highScore}</h4>
                        <Button variant="primary" onClick={() => dispatch({ type: "RESTART_QUIZ" })} className="next-btn">
                            Chơi lại
                        </Button>
                    </div>
                ) : (
                    <div>
                        <h5>Tiến trình: {currentQuestion + 1} / {questions.length}</h5>
                        <ProgressBar now={(currentQuestion + 1) / questions.length * 100} className="progress-bar" />

                        <h4 className="quiz-question">
                            Câu {questions[currentQuestion].id}: {questions[currentQuestion].question}
                        </h4>

                        <div>
                            {questions[currentQuestion].options.map((option, index) => (
                                <Button key={index} className={`option-btn ${selectedOption && (option === questions[currentQuestion].answer ? "correct" : "wrong")}`}
                                    variant="outline-light"
                                    onClick={() => dispatch({ type: "SELECT_OPTION", payload: option })}
                                    disabled={selectedOption}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>

                        <h5 className={`timer ${timeLeft < 5 ? "warning" : ""}`}>⏳ {timeLeft}s</h5>

                        <Button className="next-btn" onClick={() => dispatch({ type: "NEXT_QUESTION" })} disabled={!selectedOption}>
                            Tiếp theo
                        </Button>
                    </div>
                )}
            </Card>
        </Container>
    );
}

export default QuestionBank;
