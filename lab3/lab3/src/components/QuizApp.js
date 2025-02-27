import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";
import Header from "./Header";

const questions = [
    {
        question: "React là gì?",
        options: ["Thư viện JavaScript", "Ngôn ngữ lập trình", "Framework", "Hệ điều hành"],
        answer: "Thư viện JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        question: "JSX trong React là gì?",
        options: ["Một loại dữ liệu", "Cú pháp mở rộng của JavaScript", "Thư viện", "Hàm toán tử"],
        answer: "Cú pháp mở rộng của JavaScript",
        image: "https://miro.medium.com/max/1400/1*LZQHj6c8XqT_gX8MIOs2xA.png"
    },
    {
        question: "Hook nào được dùng để quản lý state trong React?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: "useState",
        image: "https://reactjs.org/logo-og.png"
    },
    {
        question: "Lệnh nào được sử dụng để tạo một component trong React?",
        options: ["class MyComponent", "function MyComponent", "new MyComponent", "React.createComponent"],
        answer: "function MyComponent",
        image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
    }
];

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    function handleAnswer(selected) {
        if (selected === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinished(true);
        }
    }

    function resetQuiz() {
        setCurrentQuestion(0);
        setScore(0);
        setFinished(false);
    }

    return (
        <>
            <Header />
            <Container className="quiz-container d-flex flex-column align-items-center mt-5">
                <Card className="quiz-card p-4 text-center shadow-lg">
                    <h1 className="mb-4">Quiz App</h1>
                    {finished ? (
                        <Result score={score} total={questions.length} resetQuiz={resetQuiz} />
                    ) : (
                        <Question
                            question={questions[currentQuestion].question}
                            options={questions[currentQuestion].options}
                            image={questions[currentQuestion].image}
                            handleAnswer={handleAnswer}
                            className="question-container"
                        />
                    )}
                </Card>
            </Container>
        </>
    );
}

export default QuizApp;
