import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";

import Question from "./Question.js";
import NextQuestion from "./NextQuestion.js";

function App() {
  let currentQuestionNumber = 0;
  //const [currentQuestionNumber, setCurrentQuestionNumber = useState(0);

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>

      <Question question={data[currentQuestionNumber].question.text} />

      <NextQuestion />
    </div>
  );
}

export default App;
