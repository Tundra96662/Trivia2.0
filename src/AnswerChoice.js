function AnswerChoice(props) {
  return (
    <div className="answer-choice">
      <div onClick={props.onClick}>{props.answer}</div>
    </div>
  );
}

export default AnswerChoice;
