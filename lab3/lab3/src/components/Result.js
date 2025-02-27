import React from "react";

function Result({ score, total, resetQuiz }) {
  return (
    <div>
      <h2>Kết quả</h2>
      <p>Bạn đã trả lời đúng {score} trên {total} câu.</p>
      <button onClick={resetQuiz}>Chơi lại</button>
    </div>
  );
}

export default Result;
