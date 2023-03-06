function NextQuestion(props) {
  return (
    <div>
      <button onClick={props.goToNextQuestion}>Next Question</button>
      <p>Question: {props.currentQuestionNumber + 1}</p>
    </div>
  );
}

export default NextQuestion;
