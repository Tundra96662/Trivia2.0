import AnswerChoice from "./AnswerChoice";

function Question(props) {
  return (
    <div>
      <div className="question">{props.question}</div>

      <div className="answers">
        <AnswerChoice
          answer={props.choices[0]}
          onClick={() => props.setAnswerState(props.choices[0])}
        />
        <AnswerChoice
          answer={props.choices[1]}
          onClick={() => props.setAnswerState(props.choices[1])}
        />
        <AnswerChoice
          answer={props.choices[2]}
          onClick={() => props.setAnswerState(props.choices[2])}
        />
        <AnswerChoice
          answer={props.choices[3]}
          onClick={() => props.setAnswerState(props.choices[3])}
        />
      </div>
    </div>
  );
}

export default Question;
