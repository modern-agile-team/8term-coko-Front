import { QuestionSection } from './../styles';
interface questiontype {
  title: string;
  question: string;
}
export default function Question({ title, question }: questiontype) {
  return (
    <>
      <QuestionSection>
        <div>title: {title} </div>
        <div>question: {question}</div>
      </QuestionSection>
    </>
  );
}
