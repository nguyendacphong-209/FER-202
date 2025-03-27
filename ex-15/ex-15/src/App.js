
import './App.css';
import React from "react";
import Counter from "./components/Counter";
import ChangeName from "./components/ChangeName";
import List from "./components/List";
import QuestionBank from "./components/QuestionBank";

function App() {
  return (
    <div className="App">
    <Counter/>
    <ChangeName/>
    <List/>
    <QuestionBank/>
    </div>
  );
}

export default App;
