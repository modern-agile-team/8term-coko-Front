import { MultipleChoiceQuestionButton, ResponseBoxSection } from '../styles';
export default function MUltipleChoice() {
  return (
    <ResponseBoxSection $gapColumn="20px">
      <MultipleChoiceQuestionButton>1</MultipleChoiceQuestionButton>
      <MultipleChoiceQuestionButton>2</MultipleChoiceQuestionButton>
      <MultipleChoiceQuestionButton>3</MultipleChoiceQuestionButton>
      <MultipleChoiceQuestionButton>4</MultipleChoiceQuestionButton>
    </ResponseBoxSection>
  );
}
