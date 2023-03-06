import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";

import Question from "./Question.js";
import NextQuestion from "./NextQuestion.js";
import AnswerChoice from "./AnswerChoice";

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [answerState, setAnswerState] = useState(null);

  function getCorrectAnswer(questionNum) {
    let currentQuestion = data[questionNum].question;
    let correctChoiceIndex = currentQuestion.correct_choice_index;
    return currentQuestion.choices[correctChoiceIndex];
  }

  function questionAnswered() {
    if (answerState === null) {
      return <p className="prompt">Click an answer above</p>;
    } else if (answerState === getCorrectAnswer(currentQuestionNumber)) {
      return (
        <p className="prompt">You chose {answerState}. That is correct!</p>
      );
    } else {
      return (
        <p className="prompt">You chose {answerState}. That is incorrect.</p>
      );
    }
  }

  function goToNextQuestion(setAnswerState) {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    // setAnswerState(null);
  }

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>

      <Question
        question={data[currentQuestionNumber].question.text}
        choices={data[currentQuestionNumber].question.choices}
        setAnswerState={setAnswerState}
      />
      {questionAnswered()}

      <NextQuestion
        currentQuestionNumber={currentQuestionNumber}
        goToNextQuestion={goToNextQuestion}
      />

      <AnswerChoice />
    </div>
  );
}

export default App;
