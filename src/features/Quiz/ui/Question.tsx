import { QuestionSection } from './../styles';
interface questiontype {
  title: string;
  question: string;
}
export default function Question({ title, question }: questiontype) {
  return (
    <>
      <QuestionSection>
        {title} {question}
      </QuestionSection>
    </>
  );
}
