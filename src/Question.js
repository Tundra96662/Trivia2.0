import AnswerChoice from "./AnswerChoice";

function Question(props) {
  return (
    <div>
      <div className="question">{props.question}</div>

      <div className="answers">
        <AnswerChoice answer="Ansaeer Choice Goes here" />
      </div>
    </div>
  );
}

export default Question;
