// src/App.js
import React from "react";
import { QuizProvider, Quiz } from "./components/QuestionBank";

const App = () => (
  <>

    <div className="container mt-5">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  </>
);

export default App;
